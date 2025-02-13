let displayValue = '';
let currentValue = '';
display();

function display(){
    document.querySelector('#display').value = displayValue;
}
// inert number on display
function insert(element){
    displayValue = displayValue + element;
    currentValue = currentValue + element;
    display();
}

//Operator Selection
function operator(num){
    if(num===11){
        displayValue = displayValue + '+';
        currentValue = currentValue + '+';
        display();
    }else if(num===12){
        displayValue = displayValue + '-';
        currentValue = currentValue + '-';
        display();
    }else if(num===13){
        displayValue = displayValue + 'x';
        currentValue = currentValue + '*';
        display();
    }else if(num===14){
        displayValue = displayValue + '/';
        currentValue = currentValue + '/';
        display();
    }else{
        displayValue = displayValue + '.';
        currentValue = currentValue + '.';
        display();
    }
}
// Perform Operation
function operation(){
    
    if(currentValue == ''){
        display();
    }else{
        displayValue = eval(currentValue);
        currentValue = eval(currentValue);
        display();
    }

}
// Clear Display
function allClear(){
    displayValue = '';
    currentValue = '';
    display();
}
// Clear display last element
function clearDisplay(){
    let len = `${displayValue}`;
    displayValue = len.slice(0, -1);
    let len1 = `${currentValue}`;
    currentValue = len1.slice(0, -1);
    display();
}