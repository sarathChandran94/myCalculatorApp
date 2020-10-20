let inputbox1 = document.getElementById('ipBox1');
let result = document.getElementById('equals');
let reset = document.getElementById('reset');
let numBtn = document.getElementsByClassName('num');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let div = document.getElementById('div');



(function input() {
    for (elem of numBtn) {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(e.target.value);
            inputbox1.value += e.target.value;
            console.log(inputbox1.value)
        });
    }
})();


(function calc() {
    add.addEventListener('click', (e) => {
        e.preventDefault();
        inputbox1.value += e.target.value
    });
    sub.addEventListener('click', (e) => {
        e.preventDefault();
        inputbox1.value += e.target.value
    });
    mul.addEventListener('click', (e) => {
        e.preventDefault();
        inputbox1.value += e.target.value
    });
    div.addEventListener('click', (e) => {
        e.preventDefault();
        inputbox1.value += e.target.value
    });
})();


result.addEventListener('click', e => {
    e.preventDefault()
    toEval = inputbox1.value
    res = eval(toEval)
    if (toEval == "") {
        inputbox1.value = "Empty!"
        inputbox1.style.borderColor = "red"
    }
    else {
        inputbox1.value = res
        inputbox1.style.borderColor = "green"
    }
    console.log(res)
})

reset.addEventListener('click', e => {
    e.preventDefault()
    inputbox1.style.border = ""
    inputbox1.value = ""
})
