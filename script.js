function compute() {
    p = document.getElementById("principal").value;
}

//changes the value of .rate_val to be equal to .rate
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
//when slide bar changes, the rate changes aswell
document.getElementById("rate").onchange = updateRate;

//changes the 'result' span with the information completed.
function click() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit <span class='yellow'>" + principal + "</span>,<br\>at an interest rate of <span class='yellow'>" + rate + "%</span><br\>You will receive an amount of <span class='yellow'>" + interest + "</span>,<br\>in the year <span class='yellow'>" + year + "</span><br\>";
}

//when the compute buttton is clicked, it shows the new 'result' span
document.getElementById("button").onclick = click;

//checks the value of the 'Amount' input
function checkValue() {
    let value = document.getElementById("principal").value;
    //if the value is 0 or <0, alert the user
    if (value <= 0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
}
//when the 'Amount' input is changed, checks the value
document.getElementById("principal").onchange = checkValue;








