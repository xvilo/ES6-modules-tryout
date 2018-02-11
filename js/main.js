import dependency1 from './dependency-1.js';

function getComponent () {
    var element = document.createElement('div');
    element.innerHTML = dependency1();
    return element;
}

document.body.appendChild(getComponent());