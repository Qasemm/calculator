function delIN() {
    document.getElementById("resulte").value = " ";
};

function isertValue() {
    let numder = document.getElementsByClassName("button").value;
    console.log(numder);
}

function insert(num) {
    var myString = document.getElementById("resulte").value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.getElementById("resulte").value = myString + num;
        } else if (num != lastChar) {
            document.form.textview.value = myString.replace(lastChar, num);
        }
    }
}

function equal() {
    var sum = document.getElementById("resulte").value;
    if (sum) {
        document.getElementById("resulte").value = eval(sum);
    }
}