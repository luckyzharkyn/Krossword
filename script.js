let check = document.querySelector(".check");
let next = document.querySelector(".next");
let img = document.querySelector(".img");
let input = document.getElementById("input");
let warning = document.querySelector(".main__form__warning");
let question = document.createElement("p");
let header = document.querySelector(".header")
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");
let start = document.querySelector(".start");
let start__again = document.querySelector(".start__again");

let count = 1;
let correct_answer = 0;
let incorrect_answer = 0;

let answer = {
    1: "rightAnswer",
    2: "right",
    3: "correct"
}

let questions = {
    1: "Что такое стекло? Что такое стекло? Что такое стекло? Что такое стекло?" ,
    2: "question2",
    3: "question3",
}

start.addEventListener("click", Start);
function Start() {
    count = 1;
    correct_answer = 0;
    incorrect_answer = 0;

    header.style.display = "none";
    footer.style.display = "none";
    main.style.display = "flex";
    img.src = "./img/1.jpg";

    let main__form__question = document.querySelector(".main__form__question");
    question.innerHTML = `${count}. ` + questions[count];
    main__form__question.appendChild(question);
}

check.addEventListener("click", function() {
    if(input.value == answer[count]) {
        warning.style.color = "green";
        warning.innerHTML = "Ответ правильный";
        count++;
        correct_answer++;
        img.src = `./img/${count}.jpg`;
        setTimeout(() => {
            EndTest();
            question.innerHTML = `${count}. ` + questions[count];
            input.value = "";
            warning.innerHTML = "";
            warning.style.color = "red";
        }, 1000);
    } else {
        if(input.value == "") {
            warning.innerHTML = "Введите ответ";
        } else {
            warning.innerHTML = "Ответ неправильный";
        }
    }
    
})

next.addEventListener("click", function() {
    if(confirm("Вы уверены?")) {
        count++;
        EndTest();
        incorrect_answer++;
        img.src = `./img/${count}.jpg`;
        input.value = "";
        warning.innerHTML = " ";
        question.innerHTML = questions[count];
    } else {

    }
    
})

input.addEventListener("focus", function() {
    warning.innerHTML = " ";
    input.value = "";
})

function EndTest() {
    if(count > Object.keys(questions).length) {
        main.style.display = "none";
        footer.style.display = "flex";
    }
}

start__again.addEventListener("click", Start);