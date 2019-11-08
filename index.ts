// Import stylesheets
import './style.css';


function add(a ,b) {
  return a + b
}

let b = "5";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>TypeScript Starter</h1>
<h3>Current Output</h3>
<ul>
  <li>${add(1,2)}</li>
  <li>${add(1,100)}</li>
  <li>${add(1,"100")}</li>
  <li>${add(3,{value:"5"})}</li>
  <li>${add(b,{value:"10"}).toUpperCase()}</li>
</ul>
<h3>Expected Result</h3>
<ul>
  <li>3</li>
  <li>101</li>
  <li>101</li>
  <li>8</li>
  <li>15</li>
</ul>
`;