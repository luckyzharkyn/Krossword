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

let rightAnswer = document.querySelector(".rightAnswer");
let incorrectAnswer = document.querySelector(".incorrectAnswer");

let count = 1;
let correct_answer = 0;
let incorrect_answer = 0;

let answer = {
    1: "Шалабай",
    2: "Ораш",
    3: "Таған",
    4: "Ғалия",
    5: "Айна",
    6: "Егінбай",
    7: "Шағиман",
    8: "Фазыл",
    9: "ШАПАМ",
    10: "",
    11: "Қазан",
    12: "Ағажай",
    13: "Арай",
    14: "ВАЙРА",
    15: "Жылымық",
    16: "Айгүл",
    17: "Құлыным",
    18: "Қашыбай",
    19: "Шаған",
    20: "Жамал",
    21: "Қар қызы",
    22: "Шаған",
    23: "Зарлық",
    24: "біз, ине, тебен ине",
    25: "",
    26: "Таңатар",
    27: "Қаражан",
    28: "",
    29: "Шалабай",
    30: "Ләйла",
    31: "",
    32: "Ардақ",
    33: "",
    34: "Ерік",
    35: "",
    36: "Нұржан, аманжан, бақытжан, ақай",
    37: "Анар",
    38: "Алтай",
    39: "Мақажан",
    40: "Қаратан",
    

}

let questions = {
    1: "«Ардақ» әңгімесіндегі Алмастың әкесі." ,
    2: "«Биғаң» әңгімесіндегі оқушы.",
    3: "«Атау кере» (қауіпті будан) повесінің басты кейіпкері.",
    4: "«Шұғыла» әңгімесіндегі қыз.",
    5: "«Атау кере» повесіндегі кейіпкер әйел.",
    6: "«Құм мінезі» повесіндегі шопан.",
    7: "«Сарыарқаның жаңбыры» әңгімесіндегі  С. Торайғыровқа астындағы атын сыйлаған қарт.",
    8: "«Шұғыла» әңгімесіндегі кейіпкер.",
    9: "«Үркер» повесіндегі қарт. ",
    10: "«Үркер» повесіндегі келіншек.",
    11: "«Мезгіл әуендері» әңгімесіндегі бөлім.",
    12: "«Елең-алаң» повесіндегі  қария.",
    13: "«Қасқыр ұлыған түнде» повесіндегі қыз.",
    14: "«Мен сізден қорқамын» пьесасындағы латыш қызы.",
    15: "Оралханның: «Жолаушы атың семіз желетұғын, Көз бар ма мен байғұсты көретұғын», - деген халық әнімен басталатын әңгімесі.",
    16: "«Текетірес» әңгімесіндегі қыз.",
    17: "Оралханның екі бөлімді драмасы.",
    18: "«Апамның астауы» әңгімесіндегі бекетші.",
    19: "«Маңдайдан бағың шайқалса» әңгімесіндегі жігіт.",
    20: "«Жау тылындағы бала» драмасындағы кейіпкер әйел.",
    21: "Оралханның қыз есімімен аталатын пьесасы.",
    22: "«Маңдайдан бағың тайса» әңгімесінің кейіпкері.",
    23: "«Елең-алаң» повесіндегі оқушы.",
    24: "Тігінші құралы.",
    25: "«Үркер» повесінің кейіпкері.",
    26: "«Зымырайды поездар» драмасындағы Дарханның әкесі.",
    27: "«Құлыным менің» пьесасындағы (элегия) мал шаруашылығын басқарушы.",
    28: "Ер адамның есімі.",
    29: "«Ардақ» әңгімесіндегі Қожаның туысы.",
    30: "«Аспанда ұшқан алты қаз» әңгімесіндегі қыз.",
    31: "Оралханның аттас әңгімесі.",
    32: "Оралханның қыз есімімен аталатын шығармасы.",
    33: "Былғарыдан, қайыстан өріп, тігіп, күмістен жасалған ер тұрман.",
    34: "«Атау-кере» повесіндегі омарташы.",
    35: "«Өлімге бақыт керек пе?» драмасындағы аспирант. – ",
    36: "«Қар қызы» повесіндегі жігіт.",
    37: "«Құлыным менің» элегиясындағы (пьеса) қыз.",
    38: "«Мен сізден қорқамын» пьесасындағы Тасжанның досы.",
    39: "«Атау-кере» повесіндегі Тағанның әкесі-өлеңші.",
    40: "«Текетірес» драмасындағы жол-құрылыс маманы.",
}

let skip = [2, 6, 10, 12, 21, 23, 24, 25, 28, 31, 33, 34, 35, 36];

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
    question.innerHTML = questions[count];
    main__form__question.appendChild(question);
}

function checkSkip() {
    for(let elem of skip) {
        if(count == elem) {
            count++;
            checkSkip();
        }
    }
}

check.addEventListener("click", checkAnswer);

function checkAnswer() {
    if(input.value.toLowerCase() == answer[count].toLowerCase()) {
        warning.style.display = "block";
        warning.style.color = "green";
        warning.innerHTML = "Ответ правильный";
        count++;
        correct_answer++;
        checkSkip();
        img.src = `./img/${count}.jpg`;
        setTimeout(() => {
            EndTest();
            question.innerHTML = questions[count];
            input.value = "";
            warning.innerHTML = "";
            warning.style.color = "red";
            warning.style.display = "none";
        }, 2000);
    } else {
        if(input.value == "") {
            warning.style.display = "block";
            warning.innerHTML = "Введите ответ";
        } else {
            warning.innerHTML = "Ответ неправильный";
        }
    }
}

next.addEventListener("click", function() {
    if(confirm("Вы уверены?")) {
        count++;
        incorrect_answer++;
        EndTest();
        checkSkip();
        img.src = `./img/${count}.jpg`;
        input.value = "";
        warning.innerHTML = " ";
        question.innerHTML = questions[count];
    } else {

    }
    
})

input.addEventListener("focus", function() {
    warning.style.display = "none";
    warning.innerHTML = " ";
    input.value = "";
})

function EndTest() {
    if(count > Object.keys(questions).length) {
        rightAnswer.innerHTML = correct_answer;
        incorrectAnswer.innerHTML = incorrect_answer;
        main.style.display = "none";
        footer.style.display = "flex";
    }
}

start__again.addEventListener("click", Start);