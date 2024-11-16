// change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Hello';
}

// fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="50px";
}

// color change
function color(){
    document.getElementById("color").style.color="green";
}


// light off & on
function onLight(){
    document.getElementById("light").src="images/on.gif";
}
function offLight(){
    document.getElementById("light").src="images/off.gif";
}

// alert
function myAlert(){
    alert("hello!");
}

// alert function
function alertShow(){
    alert("hi! welcome");
}

// display hide and block
function displayHide(){
    document.getElementById("tHide").style.display="none";
}
function displayShow(){
    document.getElementById("tHide").style.display="block";
}

// show date
function showDate(){
    document.getElementById("s_date").innerHTML = Date();
}

// switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function mySwitch(){
    document.getElementById("c").innerHTML = "today is "+ day;
}

// array
let names = ["Fahim","Arif",];
function allNames(){
    document.getElementById("a").innerHTML = names;
}

// show and hide
function tHide(){
    document.getElementById("t").style.display="none";
}
function tShow(){
    document.getElementById("t").style.display="block";
}
 
// border bottom
function bBottom(){
    document.getElementById("border-bottom").style.borderBottom="2px solid green";
}

// width & height
function myDiv(){
    document.getElementById("div1").style.transition="1s";
    document.getElementById("div1").style.width="40px";
    document.getElementById("div1").style.height="40px";
    document.getElementById("div1").style.backgroundColor="green";
}

// variable
var firstName = "Ariful";
var lastName = "islam";
var fullName = firstName + " "+ lastName;
function myVariable(){
    document.getElementById("var").innerHTML = fullName;
}

// repeat
function myRepeat(){
    var store1 = "hello, ";
    document.getElementById("repeat").innerHTML = store1.repeat(5);
}

// total result
function result(){
    document.getElementById("result").innerHTML = 32 + 17;
}

// Addition
var x = 15;
var y = 26;
var z = x + y;
function myAddition(){
    document.getElementById("var_addi").innerHTML = z;
}

// Multiplication
var a = 5;
var b = 7;
var c = a * b;
function myMultiplication(){
    document.getElementById("var_multi").innerHTML = c;
}

// division
var f = 63;
var g = 7;
var h = f / g;
function division(){
    document.getElementById("division").innerHTML = h;
}

// remainder
var i = 70;
var j = 12;
var r = i % 12;
function remainder(){
    document.getElementById("remainder").innerHTML = r;
}

// exponentiation
var d = 6;
var e = d**6;
function exponentiation(){
    document.getElementById("exponentiation").innerHTML = e;
}

// pre increment
var aa = 5;
var bb = ++aa;
function increment(){
    document.getElementById("increment").innerHTML = bb;
}

// Post increment ++
var cc = 7;
var dd = cc++;
function pIncrement(){
    document.getElementById("pIncrement").innerHTML = cc;
}

// Pre decrement
var decrement1 = 15;
var decrement2 = --decrement1;
function preDecrement(){
    document.getElementById("pre_decrement").innerHTML = decrement2;
}

// Post decrement
var decrement3 = 15;
var decrement4 = decrement1--;
function postDecrement(){
    document.getElementById("post_decrement").innerHTML = decrement4;
}

// increment +
let number1 = 15;
    number1 += 5;
function mydemo1(){
    document.getElementById("demo1").innerHTML = number1;
}

// Decrement -
let number2 = 15;
    number2 -= 5;
function mydemo2(){
    document.getElementById("demo2").innerHTML = number2;
}


// Multiplication *
let number3 = 15;
    number3 *= 5;
function mydemo3(){
    document.getElementById("demo3").innerHTML = number3;
}


// Division /
let number4 = 15;
    number4 /= 5;
function mydemo5(){
    document.getElementById("demo5").innerHTML = number4;
}

// Modulus *
let number5 = 15;
    number5 %= 5;
function mydemo4(){
    document.getElementById("demo4").innerHTML = number5;
}