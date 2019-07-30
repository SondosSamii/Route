function evenOrOdd(number)
{
    var even = true;
    
    if(number % 2 == 0)
    {
        even = true;
        return "Even";
    }
    else
    {
        even = false;
        return "Odd";
    }
}
// ******************************************************


// Question 1
// Write a program that allow to user enter number then print it

var btn1 = document.getElementById("btn1");

btn1.onclick = function()
{
    var input1 = document.getElementById("input1").value;

    document.getElementById("output1").innerHTML = input1;
}
// ******************************************************


// Question 2
// Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

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
// ******************************************************


// Question 3
// Write a program that allows the user to insert 2 integers then print the max 

var btn3 = document.getElementById("btn3");

btn3.onclick = function()
{
    var firstNum = document.getElementById("input3-1").value;

    var secNum = document.getElementById("input3-2").value;

    document.getElementById("output3").innerHTML = Math.max(firstNum, secNum);
}
// ******************************************************


// Question 4
// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive

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
// ******************************************************


// Question 5
// Write a program that take 3 integer from user then print the max element and the min element.

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
// ******************************************************


// Question 6
// Write a program that allows the user to insert integer number then Even or Odd 

var btn6 = document.getElementById("btn6");

btn6.onclick = function()
{
    var input6 = document.getElementById("input6").value;
    
    document.getElementById("output6").innerHTML = evenOrOdd(input6);
}
// ******************************************************


// Question 7
// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

var btn7 = document.getElementById("btn7");

btn7.onclick = function()
{
    var input7 = document.getElementById("input7").value;

    if(input7 == "a" || input7 == "e" || input7 == "i" || input7 == "o" || input7 == "u")
    {
        document.getElementById("output7").innerHTML = "Vowel";
    }
    else
    {
        document.getElementById("output7").innerHTML = "Consonant";            
    }
}
// ******************************************************


// Question 8
// Write a program that allows user to insert integer then print all numbers between 1 to that’s number

var btn8 = document.getElementById("btn8");

btn8.onclick = function()
{
    var input8 = document.getElementById("input8").value;

    var output = "";

    for(var i = 1 ; i < input8; i++)
    {
        output += i + ", ";
    }
    document.getElementById("output8").innerHTML = output + input8;
}
// ******************************************************


// Question 9
// Write a program that allows user to insert integer then print a multiplication table up to 12.

var btn9 = document.getElementById("btn9");

btn9.onclick = function()
{
    var input9 = document.getElementById("input9").value;

    var output = "";

    for(i = 1; i < 12; i++)
    {
        output += i * input9 + ", ";
    }

    document.getElementById("output9").innerHTML = output + (12 * input9);
}
// ******************************************************


// Question 10
// Write a program that allows to user to insert number then print all even numbers between 1 to this number

var btn10 = document.getElementById("btn10");

btn10.onclick = function()
{
    var input10 = document.getElementById("input10").value;

    var output = "";
    
    for(var i = 2; i < input10; i += 2)
        {
            output += i + "&nbsp;&nbsp;&nbsp;&nbsp";
        }
    document.getElementById("output10").innerHTML = output;

}
// ******************************************************




















