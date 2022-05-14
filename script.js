var operation=0,operationValue=0;

function clearValue() {
    document.getElementById("output-screen").value="";
}
function buttonClicked(valueFromButton) {
    var oldValue=document.getElementById("output-screen").value;
    document.getElementById("output-screen").value = oldValue+valueFromButton;
}
function addition() {
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
function equals() {
    if(operation==1) {
        operationValue=operationValue+parseInt(document.getElementById("output-screen").value);
        document.getElementById("output-screen").value=operationValue;
        operation=0;
        operationValue=0;
    }
    else if(operation==2) {
        operationValue=operationValue-parseInt(document.getElementById("output-screen").value);
        document.getElementById("output-screen").value=operationValue;
        operation=0;
        operationValue=0;
    }
    else if(operation==3) {
        operationValue=operationValue*parseInt(document.getElementById("output-screen").value);
        document.getElementById("output-screen").value=operationValue;
        operation=0;
        operationValue=0;
    }
    else if(operation==4) {
        operationValue=operationValue/parseInt(document.getElementById("output-screen").value);
        if(parseInt(document.getElementById("output-screen").value)==0) {
            document.getElementById("output-screen").value= "∞      " ;
        }
        else {
        document.getElementById("output-screen").value=operationValue;
        }
        operation=0;
        operationValue=0;
    }
}