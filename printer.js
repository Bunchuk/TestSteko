//функции калькуляции и вывода в 3ю колонку результатов
function printer() {
    col3Line1.val((col1Line1).val() * (col2Line1).val());
    if (isNaN(col3Line1.val()) === true) {
        alert("Вводите только числа!");
    }
}

function printer1() {
    col3Line2.val((col1Line2).val() *
        (col2Line2).val());
    if (isNaN(col3Line2.val()) === true) {
        alert("Вводите только числа!");
    }
}

function printer2() {
    col3Line3.val((col1Line3).val() *
        (col2Line3).val());
    if (isNaN(col3Line3.val()) === true) {
        alert("Вводите только числа!");
    }
}
