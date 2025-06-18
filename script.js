let button = document.querySelector('button');
let new_var = document.createElement('div')
new_var.id = 'result'
let locate = document.getElementById('main').appendChild(new_var)
button.addEventListener('click',calculate);
function calculate(){
     let value_1 = Number(document.getElementById('value_1').value)
     let value_2 = document.getElementById('value_2').value
     let value_3 = Number(document.getElementById('value_3').value)
     let result;
     if (value_2 === '+'){
        result = value_1 + value_3
     }else if (value_2 === '-'){
        result = value_1 - value_3
     }else if (value_2 === '*'){
        result = value_1 * value_3
     }else if (value_2 === '/'){
        result = value_1 / value_3
     }else{
        result = '--'
     } 
     document.getElementById('result').innerHTML = result
};