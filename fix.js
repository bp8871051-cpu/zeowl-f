const fs = require('fs');
const file = 'd:/zeowl/src/components/loader/ZeowlCharacter.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/className="(part-[a-zA-Z0-9-]+)\s+className="/g, 'className="$1 ');
fs.writeFileSync(file, content);
