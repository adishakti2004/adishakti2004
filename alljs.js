function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();

function addChar(input, character) {
if(input.value == null || input.value == "0")
input.value = character
else
input.value += character
}
function cos(form) {
form.display.value = Math.cos(form.display.value);
}
function sin(form) {
form.display.value = Math.sin(form.display.value);
}
function tan(form) {
form.display.value = Math.tan(form.display.value);
}
function sqrt(form) {
form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
form.display.value = Math.log(form.display.value);
}
function exp(form) {
form.display.value = Math.exp(form.display.value);
}
function deleteChar(input) {
input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
val = input.value;
input.value = input.value + "%";
}
function changeSign(input) {
if(input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}
function compute(form) {
form.display.value = eval(form.display.value);
}
function square(form) {
form.display.value = eval(form.display.value) * eval(form.display.value)
}
function checkNum(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.charAt(i);
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
&& ch != "(" && ch!= ")" && ch != "%") {
alert("invalid entry!")
return false
}
}
}
return true
}


function myfunction() {
    let date = document.getElementById("date");
    let hours = document.getElementById("hrs");
    let minutes = document.getElementById("mins");
    let seconds = document.getElementById("secs");
    let ampm = document.getElementById("ampm");

    var v = new Date();
    var dt = v.getDate();
    var mth = v.getMonth();
    var year = v.getFullYear();
    var h = v.getHours();
    var m = v.getMinutes();
    var s = v.getSeconds();
    var dey = v.getDay();

    var kbc = mth + 1;

    let day = dey;
    switch (day) {
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
        case 6:
            day = "Saturday";
    }
    date.innerHTML = day + ', ' + dt + '-' + kbc + '-' + year;

    if (h < 10) {
        console.log(h);
        var k = "0" + h;
        hours.innerHTML = k;
    } else
        hours.innerHTML = h;
    if (m < 10) {
        console.log(m);
        var b = "0" + m;
        minutes.innerHTML = b;
    } else
        minutes.innerHTML = m;
    if (s < 10) {
        console.log(s);
        var t = "0" + s;
        seconds.innerHTML = t;
    } else
        seconds.innerHTML = s;
    var am = 'AM';

    if (h > 12) {
        h = h - 12;
    }
    if (h >= 12) {
        var am = 'PM';
    }
    ampm.innerHTML = am;
}
var interval = setInterval(myfunction, 1000);