var submit = document.getElementById("submit");

submit.onclick = function () {
    var day = document.getElementById("day-input");
    var month = document.getElementById("month-input");
    var year = document.getElementById("year-input");
    if (day.value == "") {
        var dayError = document.getElementById("day-error");
        var dayInput = document.getElementById("day-input");
        var dayHeading = document.getElementById("day-heading");
        dayError.innerText = "This field is required";
        dayError.style.display = "flex";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        dayHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else if(day.value > 31 || day.value < 1)
    {
        var dayError = document.getElementById("day-error");
        var dayInput = document.getElementById("day-input");
        var dayHeading = document.getElementById("day-heading");
        dayError.innerText = "Must be a valid day";
        dayError.style.display = "flex";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        dayHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else{
        var dayError = document.getElementById("day-error");
        var dayInput = document.getElementById("day-input");
        var dayHeading = document.getElementById("day-heading");
        dayError.style.display = "none";
        dayInput.style.borderColor = "hsl(0, 0%, 86%)";
        dayHeading.style.color = "hsl(0, 1%, 44%)";
    }
    if (month.value == "") {
        var monthError = document.getElementById("month-error");
        var monthInput = document.getElementById("month-input");
        var monthHeading = document.getElementById("month-heading");
        monthError.innerText = "This field is required";
        monthError.style.display = "flex";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        monthHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else if(month.value > 12 || month.value < 1 )
    {
        var monthError = document.getElementById("month-error");
        var monthInput = document.getElementById("month-input");
        var monthHeading = document.getElementById("month-heading");
        monthError.innerText = "Must be a valid month";
        monthError.style.display = "flex";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        monthHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else{
        var monthError = document.getElementById("month-error");
        var monthInput = document.getElementById("month-input");
        var monthHeading = document.getElementById("month-heading");
        monthError.style.display = "none";
        monthInput.style.borderColor = "hsl(0, 0%, 86%)";
        monthHeading.style.color = "hsl(0, 1%, 44%)";
    }
    if (year.value == "") {
        var yearError = document.getElementById("year-error");
        var yearInput = document.getElementById("year-input");
        var yearHeading = document.getElementById("year-heading");
        yearError.innerText = "This field is required";
        yearError.style.display = "flex";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        yearHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else if(year.value < 1)
    {
        var yearError = document.getElementById("year-error");
        var yearInput = document.getElementById("year-input");
        var yearHeading = document.getElementById("year-heading");
        yearError.innerText = "Must be a valid year";
        yearError.style.display = "flex";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        yearHeading.style.color = "hsl(0, 100%, 67%)";
    }
    else{
        var yearError = document.getElementById("year-error");
        var yearInput = document.getElementById("year-input");
        var yearHeading = document.getElementById("year-heading");
        yearError.style.display = "none";
        yearInput.style.borderColor = "hsl(0, 0%, 86%)";
        yearHeading.style.color = "hsl(0, 1%, 44%)";
    }
}

