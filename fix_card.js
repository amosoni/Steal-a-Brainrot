const fs = require('fs'); 
let content = fs.readFileSync('components/BrainrotCard.tsx', 'utf8'); 
content = content.replace('export default function BrainrotCard({ brainrot }: any) {', 'export default function BrainrotCard({ brainrot, showDetails, lang }: any) {'); 
