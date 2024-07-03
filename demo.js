var inp = alert("Hello JavaSript");
console.log(inp);

var out = prompt("Enter your name");
var disp = alert(out);
console.log(disp);

var use = prompt("Enter the number 1,2 or 3");
switch(use){
    case 1:
        alert("You entered 1");
        break;
    case 2:
        alert("You entered 2");
        break;
    case 3:
        alert("You entered 3");
        break;
    default:
        alert("Invalid Option");
        break;
}

let getInp = () =>{
    let inp = document.getElementById('user').value;
    alert(inp);
}

let useInp = () =>{
    let inp1 = document.getElementById('num1').value;
    let inp2 = document.getElementById('num2').value;
    if (inp1 === inp2) {
        alert("Data's are equal");
    }
}

function validateInp() {
    var input1 = document.getElementById('in1').value.trim();
    var input2 = document.getElementById('in2').value.trim();

    if (input1 === "" || input2 === "") {
        alert("One of your data is empty, kindly fill it and try again :)");
    } else {
        alert("Both inputs are filled.");
    }
}


const arithmetic = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const addNum = num1 + num2;
    const subNum = num1 - num2;
    const mulNum = num1 * num2;
    const divNum = num1 / num2;
    document.getElementById('add').innerHTML = `Addition: ${num1} + ${num2} = ${addNum}`;
    document.getElementById('subtract').innerHTML = `Subtraction: ${num1} - ${num2} = ${subNum}`;
    document.getElementById('multiply').innerHTML = `Multiplication: ${num1} * ${num2} = ${mulNum}`;
    document.getElementById('divide').innerHTML = `Division: ${num1} / ${num2} = ${divNum}`;
}



function select() {
    var inputElement = document.getElementById('inputNumber');
    var number = parseInt(inputElement.value);
    var selectBox = document.getElementById('numberSelect');

    if (isNaN(number)) {
        alert("Please enter a valid integer.");
        return;
    }

    var option = document.createElement('option');
    option.text = number;
    selectBox.add(option);

    inputElement.value = ""; 
    inputElement.focus();    
}



var values = [];

    function addToDropdown() {
        var inputElement = document.getElementById('inputValue');
        var value = inputElement.value.trim();

            if (value === "") {
                alert("Please enter a valid value.");
                return;
            }

        values.push(value);

        var selectBox = document.getElementById('dropdown');
        var option = document.createElement('option');
        option.text = value;
        option.value = value;
        selectBox.add(option);

        inputElement.value = ""; // Clear the input box
        inputElement.focus();    // Focus back on the input box
        }

        function listPreviousValues() {
            var selectBox = document.getElementById('dropdown');
            var selectedValue = selectBox.value;
            var previousValuesDiv = document.getElementById('previousValues');

            if (selectedValue !== "") {
                var index = values.indexOf(selectedValue);
                var previousValues = values.slice(0, index);
                previousValuesDiv.innerHTML = "<h3>Previous Values:</h3>";
                previousValuesDiv.innerHTML += previousValues.join("<br>");
            }
        }


    let pass = () =>{
        let userName = document.getElementById('name').value;
        let dob = document.getElementById('dob').value;
        let str = userName.slice(0,4);
        let str1 = dob.slice(0,4);
        let output = str.concat(str1);
        document.getElementById('result').innerHTML=output;
    }



    function calculateDates() {
        var inputDate = document.getElementById('inputDate').value;
        if (inputDate === "") {
            alert("Please enter a valid date.");
            return;
        }

        var date = new Date(inputDate);

        var minusFiveDays = new Date(date);
        minusFiveDays.setDate(date.getDate() - 5);

        var plusFiveDays = new Date(date);
        plusFiveDays.setDate(date.getDate() + 5);

        document.getElementById('minusFiveDays').value = formatDate(minusFiveDays);
        document.getElementById('plusFiveDays').value = formatDate(plusFiveDays);
    }

    function formatDate(date) {
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        return year + "-" + month + "-" + day;
    }






