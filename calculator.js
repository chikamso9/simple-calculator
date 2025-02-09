//SIMPLE CALCULATOR

const display=document.getElementById("display");

function appendToDisplay(input){
  display.value +=  input;
}

function clearDisplay() {
  display.value ="" ;
}

function calaculate(){
  display.value = eval(display.value);
}
