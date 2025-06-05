let expression= "";
function buttonClick(number){
    if(number== "="){
        try {
            expression=eval(expression);
        } catch (error) {
            expression="Invalid";
        }
    }else{
        expression+=number;
    }
    document.getElementById("display").value = expression;

}
function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}
