let first = 0;
let second = 0;
let op = "";
let sec = false;

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
        case "div":
            if (first == 0 || second == 0) { //Div by 0 handler
                first = "Error"
            } else {
                first = first / second;
            }
            break;
    }
    update(first)
    second = 0
}

const update = (num) => {
    document.querySelector('#display').innerHTML = num
}

//Once the page loads add all of the functions to the buttons
window.onload = () => {
    //Setup Numbered Butttons
    for (i = 0; i <= 9; i++) {
        let temp = i; //Instance variable is required so query selector access correct Id's
        document.getElementById(temp.toString()).onclick = () => {
            if (sec) {
                if (second != 0) {
                    second = second * 10;
                }
                second = second + temp
                update(second);
            } else {
                if (first != 0) {
                    first = first * 10
                    console.log(first)
                }
                if (first == "Error") {
                    first = 0
                    second = 0
                }
                first = first + temp
                console.log(first)
                update(first)
            }

        }
    }

    //Setup Operator Buttons
    let buttons = ["add", "sub", 'multi', 'div']
    buttons.forEach(element => {
        document.querySelector('#' + element).onclick = () => {
            if (sec) {
                operate()
                op = element
            } else {
                op = element
                sec = true
            }

        }
    });
    //Setup Equals Buttons
    document.querySelector('#eq').onclick = () => {
        operate()
    }
    //Setup Clear Button
    document.querySelector('#clear').onclick = () => {
        first = 0
        second = 0
        sec = false
        op = ""
        update(first)
    }
}