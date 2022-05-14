var operation=0,operationValue=0;
function equals() {
    if(operation==1) {
        operationValue=operationValue+parseInt(document.getElementById("output-screen").value);
        document.getElementById("output-screen").value=operationValue;
    }
}
function clearValue() {
    document.getElementById("output-screen").value="";
}
function buttonClicked(valueFromButton) {
    var oldValue=document.getElementById("output-screen").value;
    document.getElementById("output-screen").value = oldValue+valueFromButton;
}
function addision() {
    operation=1;
    operationValue=parseInt(document.getElementById("output-screen").value);
    document.getElementById("output-screen").value="";
}
function subtraction() {
    operation=2;
    operationValue=parseInt(document.getElementById("output-screen").value);
    document.getElementById("output-screen").value="";
}
function multiplication() {
    operation=3;
    operationValue=parseInt(document.getElementById("output-screen").value);
    document.getElementById("output-screen").value="";
}
function division() {
    operation=4;
    operationValue=parseInt(document.getElementById("output-screen").value);
    document.getElementById("output-screen").value="";
}
