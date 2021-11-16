// ----Chapter 35-38-----



// --- Ques # 1
function date() {
    var now = new Date();
    return now;
}
document.write("<h2> Date </h2>");
document.write(date() + "<br><br><br>");


// --- Ques # 2
function name() {
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    alert("Have A Good Day" + " " + firstName + " " + lastName);
}
name();


// --- Ques # 3
var numb1 = +prompt("Enter Number 1");
var numb2 = +prompt("Enter Number 2");
function sum(numb1, numb2) {
    return alert( numb1 + numb2);

}
sum(numb1, numb2);


// --- Ques # 4
document.write("<h2> Calculator </h2>");
var num1 = +prompt("Enter Number 1");
var opt = prompt("Enter Operator");
var num2 = +prompt("Enter Number 2");
function calc() {
    if (opt == "+") {
        return document.write(num1 + num2 + "<br><br><br>")
    }
    else if (opt == "-") {
        return document.write(num1 - num2 + "<br><br><br>")
    }
    else if (opt == "/") {
        return document.write(num1 / num2 + "<br><br><br>")
    }
    else if (opt == "*") {
        return document.write(num1 * num2 + "<br><br><br>")
    }
    else {
        alert("Enter Correct number or Operator")
    }
}
calc();


// --- Ques # 5
document.write("<h2> Square </h2>");
var numbr1 = +prompt("Enter Number ForS quare Your Value")
function sqr(numbr1) {
    return numbr1 * numbr1
}
var sqr1 = sqr(numbr1);
document.write("Square value:" + " " + sqr1 + "<br><br><br>")


// --- Ques # 6
document.write("<h2> Factorial </h2>")
function fact() {
    var inputNumber = +prompt("Please enter a number");
    var numbr = 1;
    for (var i = inputNumber; i >= 1; i--) {
        numbr = numbr * i;
    }
    document.write("Factorail number is:" + " " + numbr + "<br><br><br>");
}
fact();


// --- Ques # 7
document.write("<h2> Counting </h2>");
var firstNum = +prompt("Enter First Number");
var lastNum = +prompt("Enter Last Number");
function counting(firstNum, lastNum) {

    for (var i = firstNum; i <= lastNum; i++) {
        document.write(i+"<br>")
    }
}
counting(firstNum, lastNum);


// --- Ques # 8
document.write("<br><br><h2> Find Hypoteneous </h2>");
var perp = +prompt("Enter Perpendicular value") * 2;
var hypo;
function calculateHypo(perp) {
    //hypo = base+perp^2
    function calculateSqr(perp) {
        return perp * 2;
    }
    return hypo = 10 + perp;
    calculateSqr()
}
document.write("Hypoteneous is:" + " " + calculateHypo(perp))


// --- Ques # 9
document.write("<h2> Find Area: </h2>");
var height = 76;
var area;
function calcArea(width, height) {
    //a=w*h
    return area = width * height;

}
document.write("The Area is" + " " + calcArea(90, height) + "<br><br><br>");


// --- Ques # 10
document.write("<h2> Palindrome </h2>")
var palindrome = prompt("Enter A Palindrome letter");
var len = palindrome.length;
function palin() {
    for (var i = 0; i < len / 2; i++) {
        if (palindrome[i] != palindrome[len - 1 - i]) {
            document.write("its not a palindrom")
            break
        }
        else if (palindrome[i] == palindrome[len - 1 - i]) {
            document.write('Its a Palindrome <br><br><br>')
            break
        }
    }
}
palin()


// --- Ques # 11
document.write("<h2>To Upper Case String</h2>");
function titleCase(str) {
    var arr = str.split(" ");
    var result = arr.map(
        function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
        }
    )
    return result;
}

var string = titleCase("the quick brown fox").join(" ");
document.write("Example Output:" + " " + "the quick brown fox" + "<br>")
document.write("Expected Output:" + " " + string + "<br><br><br>")


// --- Ques # 12
document.write("<h2>Longest String</h2>");
function longestString(str) {
    var arr = str.split(" ");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var currenItem = arr[i];
        if (currenItem.length > result.length) {
            result = arr[i]
        }
    }
    return result;
}
var string1 = longestString('Web Development Tutorial');
document.write("Example String:" + " " + "Web Development Tutorial" + "<br>")
document.write("Expected Output:" + " " + string1 + "<br><br><br>")


// --- Ques # 13
// function charCount(str1, str2) {
//     document.write(str1, str2);
//     var letter = str1 +  str2;
//     var letterCount = 0;
//     for (var i = 0 ; i<letter.length ; i++){
//         if(letter.charAt(i) == letter){
//             letterCount = +1
//         }
//     }
//     return letterCount;
//     console.log(letterCount)
// }
// charCount('JSResourceS.com', 'o');


// --- Ques # 14
document.write("<h2>Circumferences And Area</h2>");
var radius = +prompt("Enter The Radius")
function calcCircum(radius) {
    var circum = 2 * 3.14 * radius;
    return circum;
}
var cirCumference = calcCircum(radius)
document.write("The Circumferences is:" +" "+cirCumference+"<br>")

var radius = +prompt("Enter The Radius")
function calcArea(radius) {
    var a = 3.14 * radius*radius;
    return a;
}
var areaa = calcArea(radius)
document.write("The Area is:" +" "+areaa+"<br>")
