// Question 1
var btn1 = document.getElementById("btn1");

btn1.onclick = function()
{
    var input1 = document.getElementById("input1").value;

    document.getElementById("output1").innerHTML = input1;
}


// Question 2
var btn2 = document.getElementById("btn2");

btn2.onclick = function()
{
    var input2 = document.getElementById("input2").value;

    if( input2 % 3 == 0 && input2 % 4 == 0)
    {
        document.getElementById("output2").innerHTML = "Yes";
    }
    else
    {
        document.getElementById("output2").innerHTML = "No";        
    }

}


//Question 3
var btn3 = document.getElementById("btn3");

btn3.onclick = function()
{
    var firstNum = document.getElementById("input3-1").value;

    var secNum = document.getElementById("input3-2").value;

    document.getElementById("output3").innerHTML = Math.max(firstNum, secNum);
}


//Question 4
var btn4 = document.getElementById("btn4");

btn4.onclick = function()
{
    var input4 = document.getElementById("input4").value;

    if(input4 > 0)
    {
        document.getElementById("output4").innerHTML = "Positive";
    }
    else if(input4 < 0)
    {
        document.getElementById("output4").innerHTML = "Negative";
    }
    else
    {
        document.getElementById("output4").innerHTML = "Invalid";
    }
}


// Question 5
var btn5 = document.getElementById("btn5");

btn5.onclick = function()
{
    var result = "";
    
    var firstNum = document.getElementById("input5-1").value;
    var secNum = document.getElementById("input5-2").value;
    var thirdNum = document.getElementById("input5-3").value;
    
    document.getElementById("output5").innerHTML =
        "Max Element = " + Math.max(firstNum, secNum, thirdNum) + "</br> Min Element = " + Math.min(firstNum, secNum, thirdNum);
}




































