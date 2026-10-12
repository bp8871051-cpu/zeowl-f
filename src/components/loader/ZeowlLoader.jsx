"use client";

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ZeowlCharacter from './ZeowlCharacter';
import ZeowlWall from './ZeowlWall';

gsap.registerPlugin(useGSAP);

export default function ZeowlLoader({ onComplete }) {
  const containerRef = useRef(null);
  const percentRef = useRef(null);
  const movingSceneRef = useRef(null);
  const charWrapperRef = useRef(null);
  const [isDone, setIsDone] = useState(true);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('zeowl_loader_seen');
      if (!seen) {
        setIsDone(false);
      }
    } catch (e) {
      setIsDone(true);
    }
  }, []);

  useGSAP(() => {
    if (isDone) return;

    // We create a master timeline controlling EVERYTHING
    const masterTl = gsap.timeline({
      onComplete: () => {
        // Exit animation sequence
        const exitTl = gsap.timeline({
          onComplete: () => {
            setIsDone(true);
            try {
              sessionStorage.setItem('zeowl_loader_seen', 'true');
            } catch (e) {}
            if (onComplete) onComplete();
          }
        });
        
        // Character gives a subtle satisfying final reaction before exit
        exitTl.to(charWrapperRef.current, {
          rotate: 0,
          scale: 1.03,
          duration: 0.15,
          ease: "back.out(2)"
        })
        .to(containerRef.current, {
          opacity: 0,
          yPercent: -100,
          duration: 0.5,
          ease: "power4.inOut",
          delay: 0.08
        });
      }
    });

    const progressObj = { value: 0 };
    const LOADING_DURATION = 1.0;

    // 1. Initial State: Character crouched slightly
    gsap.set(charWrapperRef.current, { rotate: 5, transformOrigin: "bottom center" });

    // 2. Anticipation: Lean in before pushing
    masterTl.to(charWrapperRef.current, {
      rotate: 15, // Lean forward against the wall
      scaleY: 0.95, // Slight compression
      duration: 0.6,
      ease: 'power2.inOut'
    });

    // We will run the pushing loop while the wall moves
    // Since we only have the whole character wrapper to animate, we will use a subtle yoyo loop 
    // layered via a separate concurrent timeline to give a "struggle" effect.
    const struggleTl = gsap.timeline({ repeat: -1, yoyo: true });
    const frontLegTl = gsap.timeline({ repeat: -1 });
    const backLegTl = gsap.timeline({ repeat: -1 });

    struggleTl.to(charWrapperRef.current, {
      y: "+=3",
      rotate: "+=2",
      duration: 0.15,
      ease: "sine.inOut"
    });

    // 3. Main Pushing Sequence (Wall moves, progress increments)
    masterTl.to(progressObj, {
      value: 100,
      duration: LOADING_DURATION,
      ease: "none",
      onUpdate: () => {
        if (percentRef.current) {
          const val = Math.round(progressObj.value);
          percentRef.current.innerText = (val < 10 ? `0${val}` : val) + '%';
        }
      },
      onComplete: () => {
        struggleTl.kill();
        frontLegTl.kill();
        backLegTl.kill();
        gsap.killTweensOf(".part-right-arm, .part-left-arm, .part-front-leg, .part-back-leg, .part-torso, .part-head");
      }
    }, "startPush"); // Label to sync everything

    // Set anatomically correct transform origins for each body part
    gsap.set(".part-head", { transformOrigin: "bottom center" }); // Rotates from neck
    gsap.set(".part-torso", { transformOrigin: "bottom center" }); // Rotates from hips
    gsap.set(".part-right-arm, .part-left-arm", { transformOrigin: "left center" }); // Rotates from shoulder
    gsap.set(".part-front-leg, .part-back-leg", { transformOrigin: "top center" }); // Rotates from hips

    // Realistic pushing struggle loop
    const struggleDuration = 0.6;

    // Torso leans in and heaves
    gsap.to(".part-torso", {
      rotate: 6,
      y: 4,
      yoyo: true,
      repeat: -1,
      duration: struggleDuration,
      ease: "sine.inOut"
    });

    // Head follows torso with a slight lag
    gsap.to(".part-head", {
      rotate: 10,
      y: 4,
      x: 2,
      yoyo: true,
      repeat: -1,
      duration: struggleDuration,
      ease: "sine.inOut",
      delay: 0.1
    });

    // Arms compress slightly as the body pushes into the wall
    gsap.to(".part-left-arm, .part-right-arm", {
      scaleX: 0.96, // Simulate bending
      yoyo: true,
      repeat: -1,
      duration: struggleDuration,
      ease: "sine.inOut"
    });

    // Legs take a full, realistic walk cycle (lift, plant forward, push back)
    // While one leg is in the air (0.6s total to lift and plant), the other leg is sliding back (0.6s)
    frontLegTl.to(".part-front-leg", { x: 0, y: -20, rotate: 0, duration: 0.3, ease: "power1.out" })    // Lift up and forward
              .to(".part-front-leg", { x: 15, y: 0, rotate: 15, duration: 0.3, ease: "power1.in" })     // Plant on ground
              .to(".part-front-leg", { x: -15, y: 0, rotate: -15, duration: 0.6, ease: "none" });       // Push back

    backLegTl.to(".part-back-leg", { x: -15, y: 0, rotate: -15, duration: 0.6, ease: "none" })          // Push back
             .to(".part-back-leg", { x: 0, y: -20, rotate: 0, duration: 0.3, ease: "power1.out" })      // Lift up and forward
             .to(".part-back-leg", { x: 15, y: 0, rotate: 15, duration: 0.3, ease: "power1.in" });      // Plant on ground



    // The entire scene (wall + character) moves as one unit from 0 to 130vw
    // 0vw = character is completely off-screen left
    // 130vw = character (which is ~20-30vw wide) is completely off-screen right
    masterTl.fromTo(movingSceneRef.current, {
      x: '0vw'
    }, {
      x: '130vw', 
      duration: LOADING_DURATION,
      ease: "none" // Matches the linear progress of the loading percentage exactly!
    }, "startPush");

  }, { dependencies: [isDone], scope: containerRef });

  if (isDone) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex items-center bg-white overflow-hidden"
    >
      {/* 
        Responsive layout: 
        On desktop, character starts slightly left of center.
        On mobile, scale the whole scene appropriately.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        
        {/* Revealed Background Video */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white">
          <div className="flex items-center justify-center w-full h-full max-w-[800px] px-8">
            <video 
              src="/logo/logo_reveal.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* 
          This moving scene contains both the character and the wall.
          It starts at x: 0 (character off-screen left) and moves to x: 130vw (character off-screen right)
        */}
        <div ref={movingSceneRef} className="absolute inset-0 w-full h-full">
          
          {/* The Wall container starts at exactly left: 0 */}
          <div className="absolute top-0 bottom-0 left-0 w-[100vw]">
            <ZeowlWall />
          </div>

          {/* 
            The Character container is positioned directly to the left of the wall (right: 100%).
            translate-x-4/8 pushes it slightly into the wall to close the gap and connect the hands.
          */}
          <div className="absolute bottom-1/4 md:bottom-1/3 right-[100%] translate-x-4 md:translate-x-8 w-48 md:w-80 h-[30vh] md:h-[40vh]">
            <ZeowlCharacter ref={charWrapperRef} className="w-full h-full" />
          </div>

        </div>
      </div>

      {/* Loading Percentage Container - Placed at the bottom */}
      <div className="absolute bottom-12 w-full flex flex-col items-center justify-center text-white z-20 mix-blend-difference">
        <h2 className="text-xs md:text-sm tracking-[0.3em] font-medium text-neutral-400 uppercase mb-2">
          Loading
        </h2>
        <div className="text-6xl md:text-8xl font-bold tracking-tighter" ref={percentRef}>
          00%
        </div>
      </div>
    </div>
  );
}
