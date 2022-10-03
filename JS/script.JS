const display = document.getElementById('display')
const btn = document.querySelectorAll('button')
console.log(btn)

for(let i in btn) {
    btn[i].addEventListener('click', calculate);
}
function calculate(e){
    // console.log('Button clicked')
    let clickBtn = (e.target.value)
    if (clickBtn === '='){
        display.value = eval(display.value)
    }else if(clickBtn === 'c'){
        display.value = ''
    }else{
        display.value += clickBtn;
    }
}