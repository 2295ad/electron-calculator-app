const calculator = require('./calculator');
const wrapper = document.getElementById('buttonArea');
const display = document.querySelector('.display_screen');

//bubbling and capturing
wrapper.addEventListener('click',(e)=>{
    const isBtn = e.target.nodeName;
    const input = e.target.innerText;
    if(isBtn!=='BUTTON') return;
    if(input === "AC") display.innerText = 0;
    
})
