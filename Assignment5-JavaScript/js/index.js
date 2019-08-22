function notANumber(number)
{
    if(isNaN(number) == true)
    {
        alert("Enter a valid number/numbers please!!")
    }
}
// ******************************************************


// Question 1
// Write a program that allow to user enter number then print it

var btn1 = document.getElementById("btn1");

btn1.onclick = function()
{
    var input1 = document.getElementById("input1").value;

    if(isNaN(input1) == false)        
    {
        document.getElementById("output1").innerHTML = input1;
    }
    else
    {
        notANumber(input1);
    }
}
// ******************************************************


// Question 2
// Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

var btn2 = document.getElementById("btn2");

btn2.onclick = function()
{
    var input2 = document.getElementById("input2").value;

    if(isNaN(input2) == false)
    {
        if( input2 % 3 == 0 && input2 % 4 == 0)
        {
            document.getElementById("output2").innerHTML = "Yes";
        }
        else
        {
            document.getElementById("output2").innerHTML = "No";        
        }
    }
    else
    {
        notANumber(input2);
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

    if(isNaN(firstNum) == false)
    {
        if(isNaN(secNum) == false)
        {
            document.getElementById("output3").innerHTML = Math.max(firstNum, secNum);
        }
        else
        {
            notANumber(secNum);
        }
    }
    else
    {
        notANumber(firstNum);
    }

}
// ******************************************************


// Question 4
// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive

var btn4 = document.getElementById("btn4");

btn4.onclick = function()
{
    var input4 = document.getElementById("input4").value;

    if(isNaN(input4) == false)
    {
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
            document.getElementById("output4").innerHTML = "Zero is neither positive nor negative";
        }
    }
    else
    {
        notANumber(input4);
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

    if (isNaN(firstNum) == false)
    {
        if (isNaN(secNum) == false)
        {
            if (isNaN(thirdNum) == false)
            {
                document.getElementById("output5").innerHTML =
                    "Max Element = " + Math.max(firstNum, secNum, thirdNum) + "</br> Min Element = " + Math.min(firstNum, secNum, thirdNum);
            }
            else
            {
                notANumber(thirdNum);
            }
        }
        else
        {
            notANumber(secNum);
        }
    }
    else
    {
        notANumber(firstNum);
    }
}
// ******************************************************


// Question 6
// Write a program that allows the user to insert integer number then Even or Odd 

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

var btn6 = document.getElementById("btn6");

btn6.onclick = function()
{
    var input6 = document.getElementById("input6").value;

    if (isNaN(input6) == false)
    {
        document.getElementById("output6").innerHTML = evenOrOdd(input6);
    }
    else
    {
        notANumber(input6);
    }
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
    else if(input7 == Number(input7))
    {
        alert("Enter a valid Character!!")
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

    if(isNaN(input8) == false)
    {
        for(var i = 1 ; i < input8; i++)
        {
            output += i + ", ";
        }
        document.getElementById("output8").innerHTML = output + input8;
    }
    else
    {
        notANumber(input8);
    }
}
// ******************************************************


// Question 9
// Write a program that allows user to insert integer then print a multiplication table up to 12.

var btn9 = document.getElementById("btn9");

btn9.onclick = function()
{
    var input9 = document.getElementById("input9").value;

    var output = "";

    if(isNaN(input9) == false)
    {
        for(i = 1; i < 12; i++)
        {
            output += i * input9 + ", ";
        }

        document.getElementById("output9").innerHTML = output + (12 * input9);
    }
    else
    {
        notANumber(input9);
    }
}
// ******************************************************


// Question 10
// Write a program that allows to user to insert number then print all even numbers between 1 to this number

var btn10 = document.getElementById("btn10");

btn10.onclick = function()
{
    var input10 = document.getElementById("input10").value;

    var output = "";

    if(isNaN(input10) == false)
    {
        for(var i = 2; i < input10; i += 2)
        {
            output += i + "&nbsp;&nbsp;&nbsp;&nbsp";
        }
        document.getElementById("output10").innerHTML = output;
    }
    else
    {
        notANumber(input10);
    }
}
// ******************************************************


// Question 11
// Write a program that take two integers then print the power

var btn11 = document.getElementById("btn11");

btn11.onclick = function()
{
    var firstNum = document.getElementById("input11-1").value;
    var secNum = document.getElementById("input11-2").value;

    // document.getElementById("output11").innerHTML = Math.pow(firstNum, secNum);

    if(isNaN(firstNum) == false)
    {
        if(isNaN(secNum) == false)
        {
            var power = 1;

            for(var i =1; i <= secNum; i++)
            {
                power *= firstNum;
            }
            document.getElementById("output11").innerHTML = power;
        }
        else
        {
            notANumber(secNum);
        }
    }
    else
    {
        notANumber(firstNum);
    }
}
// ******************************************************


// Question 12
// Calculate Average of Numbers Using Arrays (assume size=10) For

var btn12 = document.getElementById("btn12");

btn12.onclick = function()
{    
    var arr = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var sum = 0;

    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    var avg = sum/10;

    document.getElementById("output12").innerHTML = avg;
}
// ******************************************************


// Question 13
// Reverse array in another array

var btn13 = document.getElementById("btn13");

btn13.onclick = function()
{
    var arr = ["abc", "def", "ghi", "jkl"];

    var reversedArr = [];

    for(var i = 0; i < arr.length; i++)
    {
        reversedArr.unshift(arr[i]);
    }
    document.getElementById("output13").innerHTML = "Reversed Array = ["+ reversedArr +"]"
}
// ******************************************************


// Question 14
// Create function take an integer then print it

function printNumber(number)
{
    return number;
}

var btn14 = document.getElementById("btn14");


btn14.onclick = function()
{
    var input14 = document.getElementById("input14").value;

    if(isNaN(input14) == false)
    {
        document.getElementById("output14").innerHTML = printNumber(input14);
    }
    else
    {
        notANumber(input14);
    }
}
// ******************************************************


// Question 15
// Create function take three integers then return the average.

function printAverage(num1, num2, num3)
{
    if(isNaN(num1) == true || isNaN(num2) == true || isNaN(num3) == true)
    {
        alert("Enter a valid number/numbers please!!")
    }
    else
    {
        var sum = Number(num1) + Number(num2) + Number(num3);
        var avg = (sum/3);
        return avg;
    }
}

var btn15 = document.getElementById("btn15");

btn15.onclick = function()
{
    var num1 = document.getElementById("input15-1").value;
    var num2 = document.getElementById("input15-2").value;
    var num3 = document.getElementById("input15-3").value;

    document.getElementById("output15").innerHTML = printAverage(num1, num2, num3);
}

// ******************************************************


// Question 16
// Create function take an integer then return true if this number is prime otherwise return false.

function isPrime(number)
{
    if(isNaN(number) == false)
    {
        if(number == 2 || number == 3 ||
           number == 5 || number == 7 ||
           number == -2 || number == -3 ||
           number == -5 || number == -7)
        {
            return "True";
        }
        else
        {
            if(number % 2 == 0 || number % 3 == 0 || 
               number % 5 == 0 || number % 7 == 0)
            {
                return "False";
            }
            else
            {
                return "True";
            }
        }
    }
    else
    {
        notANumber(number);
    }
}

var btn16 = document.getElementById("btn16");

btn16.onclick = function()
{
    var input16 = document.getElementById("input16").value;
    
    document.getElementById("output16").innerHTML = isPrime(input16);
}
// ******************************************************


// Question 17
// Create function take an array then return summation of its values

var arr = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function arraySum(array)
{
    var sum = 0;
    for(var i= 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

var btn17 = document.getElementById("btn17");

btn17.onclick = function()
{
    document.getElementById("output17").innerHTML = "Sum = " + arraySum(arr);
}
// ******************************************************


// Question 18
// Create function take char and return true if it is vowel char (a,e,I,o,u) otherwise return false

function isVowel(char)
{
    var vowelsArray = ["a", "e", "i", "o", "u"];

    if(vowelsArray.includes(char))
    {
        return "True";
    }
    else
    {
        return "False";
    }

    /*
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
    {
        return "True";
    }
    else
    {
        return "False";
    }
    */
}

var btn18 = document.getElementById("btn18");

btn18.onclick = function()
{
    var input18 = document.getElementById("input18").value;

    document.getElementById("output18").innerHTML = isVowel(input18);
}
// ******************************************************


// Question 19
// Create function take string then return number of vowels (a,o,I,e,u)

function vowelsSum(string)
{
    var sum = 0;

    var l = 1;

    for(var i= 0; i < string.length; i++, l++)
    {
        if(isVowel(string.slice(i, l)) == "True")
        {
            sum++;
        }
    }
    return sum;
}

var btn19 = document.getElementById("btn19");

btn19.onclick = function()
{
    var input19 = document.getElementById("input19").value;

    document.getElementById("output19").innerHTML = vowelsSum(input19);
}
// ******************************************************


// Question 20
// Create function take string then remove all vowels from it.

function removeVowels(string)
{
    var l = 1;

    var newString = string;

    for(var i= 0; i < string.length; i++, l++)
    {
        var char = string.slice(i, l);

        if(isVowel(char) == "True")
        {
            newString = newString.replace(char, '')
        }
    }
    return newString;
}

var btn20 = document.getElementById("btn20");

btn20.onclick = function()
{
    var input20 = document.getElementById("input20").value;

    document.getElementById("output20").innerHTML = removeVowels(input20);
}
// ******************************************************