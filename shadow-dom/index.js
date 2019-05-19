// Import stylesheets
import './style.css';

// Write Javascript code!
const container = document.getElementById('container');
const appShadow = container.attachShadow({ mode: 'open' });

appShadow.innerHTML=`
  <style>
  h1{color:green;}
  </style>
  <h1 id="sameID">In Shadow DOM</h1>
  <div>
  <p id="inShadow">I respect boundries.</p>
  </div>
  `;