
function Num(val) {
    document.querySelector("#result").value += val;
}

function equal() {
    let Input = document.querySelector("#result").value;
    let Output = eval(Input);
    document.querySelector("#result").value = Output;
}

function clr() {
    document.querySelector("#result").value = "";
}