let first = 0;
let second = 0;
let sec = false;
let op = "";

const operate = () => {
    switch (op) {
        case "add":
            first = first + second;
            break;
        case "sub":
            first = first - second;
            break;
        case "multi":
            first = first * second;;
            break;
        case "divide":
            if (first == 0 || second == 0) {
                return 0;
            } else {
                first = first / second;
            }
            break;
    }
    sec = false;
    update()
}

const update = () => {

    let display = document.querySelector('#display')
    if (sec) {
        display.innerHTML = second
        console.log(second)
    } else {
        display.innerHTML = first
        console.log(first)
    }
}

window.onload = () => {
    for (i = 0; i <= 9; i++) {
        let temp = i; //Instance variable is required so query selector access correct Id's
        document.getElementById(temp.toString()).onclick = () => {
            if (sec) {
                second = temp;
            } else {
                first = temp;
            }
            update();
        }
    }
    let buttons = ["add", "sub", 'multi', 'div']
    buttons.forEach(element => {
        document.querySelector('#' + element).onclick = () => {
            op = element;
            sec = true
        }
    });
    document.querySelector('#eq').onclick = () => {
        operate();
    }
}