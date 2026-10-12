const fs = require('fs');

let svg = fs.readFileSync('d:/zeowl/public/character/parsed.svg', 'utf8');

svg = svg.replace(/class=/g, 'className=');
svg = svg.replace(/xml:space="preserve"/g, '');
svg = svg.replace(/xmlns:xlink/g, 'xmlnsXlink');
svg = svg.replace(/style="stop-color:([^"]+)"/g, 'stopColor="$1"');
svg = svg.replace(/\s*style="enable-background:new 0 0 1024 1024;"/g, '');

const startStyle = svg.indexOf('<style type="text/css">');
const endStyle = svg.indexOf('</style>') + 8;
if (startStyle > -1 && endStyle > -1) {
    const styleContent = svg.substring(startStyle + 23, endStyle - 8);
    svg = svg.substring(0, startStyle) + 
          '<style dangerouslySetInnerHTML={{ __html: `' + styleContent + '` }} />' + 
          svg.substring(endStyle);
}

svg = svg.replace(/<\?xml.*?\?>\r?\n?/g, '');
svg = svg.replace(/<!--.*?-->/, '');

const component = "import React, { forwardRef } from 'react';\n\nconst ZeowlCharacter = forwardRef(({ className }, ref) => {\n  return (\n    <div ref={ref} className={`relative w-full h-full ${className || ''}`}>\n      " + svg + "\n    </div>\n  );\n});\n\nZeowlCharacter.displayName = 'ZeowlCharacter';\nexport default ZeowlCharacter;\n";

fs.writeFileSync('d:/zeowl/src/components/loader/ZeowlCharacter.jsx', component);
console.log("ZeowlCharacter updated.");
