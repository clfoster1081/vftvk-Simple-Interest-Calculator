//Update interest rate display according to slider input
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Validate principal input amount
function checkPrincipal(){
    var principal = document.getElementById("principal").value;
    var moreThenZero = parseInt(principal) > 0;
    if (!moreThenZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
       
    }
}
function compute(){
    //alert("calculating-test1"); //test to make sure function is running
    //Define variables
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var yearInTheFuture = new Date().getFullYear()+parseInt(years); //Convert the No of Years into an acutal year in the future
       
    //Highlight and display results
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "%"+"</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + yearInTheFuture + "</mark>";

    
}
        

