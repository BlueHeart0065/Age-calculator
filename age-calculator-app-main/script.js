var submit = document.getElementById("submit");
var validState = true;

function invalidDay() {
    var dayInput = document.getElementById("day-input");
    var dayHeading = document.getElementById("day-heading");
    var dayError = document.getElementById("day-error");
    dayError.innerText = "Must be a valid day";
    dayError.style.display = "flex";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function requiredDay() {
    var dayError = document.getElementById("day-error");
    var dayInput = document.getElementById("day-input");
    var dayHeading = document.getElementById("day-heading");
    dayError.innerText = "This field is required";
    dayError.style.display = "flex";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function validDay() {
    var dayError = document.getElementById("day-error");
    var dayInput = document.getElementById("day-input");
    var dayHeading = document.getElementById("day-heading");
    dayError.style.display = "none";
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    dayHeading.style.color = "hsl(0, 1%, 44%)";
    validState = true;

}

function requiredMonth() {
    var monthError = document.getElementById("month-error");
    var monthInput = document.getElementById("month-input");
    var monthHeading = document.getElementById("month-heading");
    monthError.innerText = "This field is required";
    monthError.style.display = "flex";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function invalidMonth() {
    var monthError = document.getElementById("month-error");
    var monthInput = document.getElementById("month-input");
    var monthHeading = document.getElementById("month-heading");
    monthError.innerText = "Must be a valid month";
    monthError.style.display = "flex";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function validMonth() {
    var monthError = document.getElementById("month-error");
    var monthInput = document.getElementById("month-input");
    var monthHeading = document.getElementById("month-heading");
    monthError.style.display = "none";
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    monthHeading.style.color = "hsl(0, 1%, 44%)";
    validState = true;

}

function requiredYear() {
    var yearError = document.getElementById("year-error");
    var yearInput = document.getElementById("year-input");
    var yearHeading = document.getElementById("year-heading");
    yearError.innerText = "This field is required";
    yearError.style.display = "flex";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function invalidYear() {
    var yearError = document.getElementById("year-error");
    var yearInput = document.getElementById("year-input");
    var yearHeading = document.getElementById("year-heading");
    yearError.innerText = "Must be a valid year";
    yearError.style.display = "flex";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearHeading.style.color = "hsl(0, 100%, 67%)";
    validState = false;

}

function validYear() {
    var yearError = document.getElementById("year-error");
    var yearInput = document.getElementById("year-input");
    var yearHeading = document.getElementById("year-heading");
    yearError.style.display = "none";
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";
    yearHeading.style.color = "hsl(0, 1%, 44%)";
    validState = true;

}



submit.onclick = function () {
    var day = document.getElementById("day-input");
    var month = document.getElementById("month-input");
    var year = document.getElementById("year-input");
    const currentYear = new Date().getFullYear();

    //For day
    if (day.value == "") {
        requiredDay();
    }
    else if ((day.value < 1) || !Number.isInteger(parseFloat(day.value))) {
        invalidDay();
    }
    else if (month.value == 2) {
        if (((year.value % 4 == 0) && (year.value % 100 != 0)) || (year.value % 400 == 0)) {
            if (day.value > 29) {
                invalidDay();
            }
            else {
                validDay();
            }
        }
        else if (day.value > 28) {
            invalidDay();
        }
        else {
            validDay();
        }
    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        if (day.value > 31) {
            invalidDay();
        }
        else {
            validDay();
        }
    }
    else if (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
        if (day.value > 30) {
            invalidDay();
        }
        else {
            validDay();
        }
    }
    else if (day.value > 31) {
        invalidDay();
    }
    else {
        validDay();
    }


    //For month
    if (month.value == "") {
        requiredMonth();
    }
    else if (month.value > 12 || month.value < 1 || !Number.isInteger(parseFloat(month.value))) {
        invalidMonth();
    }
    else {
        validMonth();
    }


    //For year
    if (year.value == "") {
        requiredYear();
    }
    else if (year.value < 1 || !Number.isInteger(parseFloat(year.value))) {
        invalidYear();
    }
    else if (year.value > currentYear) {
        invalidYear();
        var yearError = document.getElementById("year-error");
        yearError.innerText = "Must be in the past";
    }
    else {
        validYear();
    }

    if (validState) {
        getAge();
    }
}

function getAge(){
    var day = document.getElementById("day-input");
    var month = document.getElementById("month-input");
    var year = document.getElementById("year-input");
    var totalDays = document.getElementById("days");
    var totalMonths = document.getElementById("months");
    var totalYears = document.getElementById("years");
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth() + 1;
    var currentDay = new Date().getDate();


    var resultYears = currentYear - year.value;
    var resultMonths = 0;
    var resultDays = 0;

    if(month.value < currentMonth){
        resultMonths = currentMonth - month.value;
    }
    else{
        resultMonths = 12 - (month.value - currentMonth);
        resultYears -= 1; 
    }

    if(day.value <= currentDay){
        resultDays = currentDay - day.value;
    }


    totalMonths.innerText = resultMonths;
    totalYears.innerText = resultYears;
    totalDays.innerText = resultDays;

}

