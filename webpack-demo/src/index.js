import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
import myName from './myName';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  //   lodash, now imported by this script
  element.textContent = myName('Paul');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  //Add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
