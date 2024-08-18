//age calculation.
function getAge(d1, d2) {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

var age = getAge(new Date(2004, 04, 07));


document.getElementById("age").innerHTML = age;
//



