
let body = document.querySelector('body')

let head = document.createElement('h1');
head.setAttribute('id','title');
head.innerText = 'CALCULATOR';
body.append(head);

let detail = document.createElement('p');
detail.setAttribute('id','description');
detail.innerText = 'Calculator using DOM';
body.append(detail);


let output = document.createElement('input');
output.setAttribute('id', 'result');
output.classList.add('output');
body.append(output);

let data = document.createElement('div');
data.classList.add('calc');

let clear = document.createElement('button');
clear.setAttribute('onclick', 'clearing(this)');
clear.setAttribute('id','clear');
clear.innerText = 'C';
data.append(clear)

let dot = document.createElement('button');
dot.setAttribute('onclick', 'clicking(this)');
dot.setAttribute('id','dot');
dot.innerText = '.';
data.append(dot)

let modulo = document.createElement('button');
modulo.setAttribute('onclick', 'clicking(this)');
modulo.setAttribute('id','modulus');
modulo.innerText = '%';
data.append(modulo)

let multi = document.createElement('button');
multi.setAttribute('onclick', 'clicking(this)');
multi.setAttribute('id','multiply');
multi.innerText = '*';
data.append(multi)

let space_0 = document.createElement('br')
data.append(space_0);

let button_7 = document.createElement('button');
button_7.setAttribute('onclick', 'clicking(this)');
button_7.setAttribute('id','7');
button_7.innerText = '7';
data.append(button_7)

let button_8 = document.createElement('button');
button_8.setAttribute('onclick', 'clicking(this)');
button_8.setAttribute('id','8');
button_8.innerText = '8';
data.append(button_8)

let button_9 = document.createElement('button');
button_9.setAttribute('onclick', 'clicking(this)');
button_9.setAttribute('id','9');
button_9.innerText = '9';
data.append(button_9)

let divide = document.createElement('button');
divide.setAttribute('onclick', 'clicking(this)');
divide.setAttribute('id','divide');
divide.innerText = '/';
data.append(divide)

let space_1 = document.createElement('br')
data.append(space_1);

let button_4 = document.createElement('button');
button_4.setAttribute('onclick', 'clicking(this)');
button_4.setAttribute('id','4');
button_4.innerText = '4';
data.append(button_4)

let button_5 = document.createElement('button');
button_5.setAttribute('onclick', 'clicking(this)');
button_5.setAttribute('id','5');
button_5.innerText = '5';
data.append(button_5)

let button_6 = document.createElement('button');
button_6.setAttribute('onclick', 'clicking(this)');
button_6.setAttribute('id','6');
button_6.innerText = '6';
data.append(button_6)

let minus = document.createElement('button');
minus.setAttribute('onclick', 'clicking(this)');
minus.setAttribute('id','subtract');
minus.innerText = '-';
data.append(minus)

let space_2 = document.createElement('br')
data.append(space_2);

let button_1 = document.createElement('button');
button_1.setAttribute('onclick', 'clicking(this)');
button_1.setAttribute('id','1');
button_1.innerText = '1';
data.append(button_1)

let button_2 = document.createElement('button');
button_2.setAttribute('onclick', 'clicking(this)');
button_2.setAttribute('id','2');
button_2.innerText = '2';
data.append(button_2)

let button_3 = document.createElement('button');
button_3.setAttribute('onclick', 'clicking(this)');
button_3.setAttribute('id','3');
button_3.innerText = '3';
data.append(button_3)

let add = document.createElement('button');
add.setAttribute('onclick', 'clicking(this)');
add.setAttribute('id','add');
add.innerText = '+';
data.append(add)

let space_3 = document.createElement('br')
data.append(space_3);

let zero = document.createElement('button');
zero.setAttribute('onclick', 'clicking(this)');
zero.setAttribute('id','0');
zero.innerText = '0';
data.append(zero)

let d_zero = document.createElement('button');
d_zero.setAttribute('onclick', 'clicking(this)');
d_zero.setAttribute('id','00');
d_zero.innerText = '00';
data.append(d_zero)

let equal = document.createElement('button');
equal.setAttribute('onclick', 'eval_exp(this)');
equal.setAttribute('id','equal');
equal.innerText = '=';
data.append(equal)

body.append(data);

function clearing(event){
    parent = document.getElementById('result');
    parent.value = "";
}

function clicking(event){
    
    parent = document.querySelector('.output');
    operator = ['-','+','/','*','%','.']
    // parent = document.querySelector('.data');
    if(!(operator.includes(parent.value.slice(-1)) && operator.includes(event.innerText))){
        parent.value = parent.value + event.innerText 
    }
}

window.addEventListener('keypress',(event)=>{
    operator = ['-','+','/','*','%','.'];
    key = event.key;
    code = event.code;
    if(code.includes('Digit') || operator.includes(key)){
        parent = document.querySelector('.output');
        parent.value = parent.value + key 
    } else{
        alert('Only Numbers are Allowed!!!');
    }

})

function eval_exp(event){
    parent = document.querySelector('.output');
    calc = parent.value;
    let output = eval(calc);
    parent.value = output;
}
