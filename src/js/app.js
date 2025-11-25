// TODO: write code here
import { addGoblin, showRandomGoblin } from './myGame/myGame.js';

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

if (typeof window !== 'undefined') {
  window.onload = function() {
    addGoblin();
    setInterval(showRandomGoblin, 3000);
  };
};
  
