let output =0;
let num1,num2='';
let opp = '';

function numberSelect(num){
    if(opp){
        if(num2 && num2!='0')
            num2+=num;
        else
            num2=num;
        document.getElementById("output").innerHTML = num1+opp+num2;
    }
    else{
        if(num1 && num1!='0' && num1!=output)
            num1+=num;
        else
            num1=num;
        document.getElementById("output").innerHTML = num1;
    }
    document.getElementById('screen').scrollLeft = document.getElementById('screen').scrollWidth;
}
function oppSelect(opps){
    opp = opps 
    if(num1)
        document.getElementById("output").innerHTML = num1+opp;
    if(num2)
        document.getElementById("output").innerHTML +=num2;
    document.getElementById('screen').scrollLeft = document.getElementById('screen').scrollWidth;

}
function clearAll(){
    num1='';
    num2='';
    opp = '';
    document.getElementById("output").innerHTML = "0";
}
function clears(){
    if(opp){
        num2='';
        document.getElementById("output").innerHTML = num1+opp;
    }
    else{
        num1='';
        opp='';
        document.getElementById("output").innerHTML = 0;
    }

}
function calculate(){
    if(!num2 || num2=='.')
        num2='0';
    if(!num1 || num1=='.')
        num1='0';
    if(opp=='+')
        output = parseFloat(num1)+parseFloat(num2);
    if(opp=='-')
        output = parseFloat(num1)-parseFloat(num2);
    if(opp=='*')
        output = parseFloat(num1)*parseFloat(num2);
    if(opp=='/')
        output = parseFloat(num1)/parseFloat(num2);
    document.getElementById("output").innerHTML = output;
    num1=""+ output;
    num2="";
    opp=""
}
