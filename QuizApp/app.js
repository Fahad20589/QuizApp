const questions = [
    {
        "que": "Which of the following is the markup language",
        "a": "HTML",
        "b": "CSS",
        "c": "Javascript",
        "d": "PHP",
        "correct": 'a'
    },
    {
        "que": "Which Year Javascript was launched",
        "a": "1996",
        "b": "1994",
        "c": "1993",
        "d": "1995",
        "correct": 'd'
    },
    {
        "que": "What does CSS stand for",
        "a": "Cascading short sheet",
        "b": "cascading style short ",
        "c": "cascading style sheet",
        "d": "cascading sheet style",
        "correct": 'c'
    }
]



let index = 0;
let total = questions.length
let Right = 0;
let wrong = 0;
const quesBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestions = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1} ${data.que}`;
    console.log(optionInputs)
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}



const submitQuiz = () => {
    const data = questions[index]
    const ans = getAns();
    if (ans === data.correct) {
        Right++
    }
    else {
        wrong++
    }
    index++
    loadQuestions();
    return
}



const getAns = () => {
    let Answer
    optionInputs.forEach((item) => {
        if (item.checked) {
            console.log(item.value);
            Answer = item.value
        }

    })
    return Answer
}



const reset = () => {
    optionInputs.forEach((item) => {
        item.checked = false;
    })
}



const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3>Thank you for playing the Quiz </h3>
<h2>${Right}/${total}  are correct</h2>`
}



loadQuestions();