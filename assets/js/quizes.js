const quizData = [
    {
        question: "Cili ishte libri i pare shqip?",
        a: "Ansnjeri",
        b: "Tregime shqiptare",
        c: "Filan Fisteku",
        d: "Meshari",
        correct: "d",
    },
    {
        question: "Shkolla e pare shqipe?",
        a: "Nuk e di",
        b: "Mësonjëtorja e Korçës",
        c: "Mesonjetorja e Vlores",
        d: "asnjeri",
        correct: "b",
    },
    {
        question: "Sa libra ka ne bote",
        a: "Në botë ka më shumë se 129 milionë libra.",
        b: "Në botë ka më shumë se 110 milionë libra.",
        c: "Në botë ka më shumë se 90 milionë libra.",
        d: "Në botë ka më shumë se 50 milionë libra.",
        correct: "a",
    },
    {
        question: "Libri më i shtrenjtë ka kushtuar ?",
        a:"Libri më i shtrenjtë ka kushtuar 1 milionë dollarë",
        b: "Libri më i shtrenjtë ka kushtuar 30,8 milionë dollarë",
        c: "Libri më i shtrenjtë ka kushtuar 30 milionë dollarë",
        d: "Libri më i shtrenjtë ka kushtuar 15 milionë dollarë",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0


// Ky funksion është përgjegjës për ngarkimin e një pyetjeje të vetme bazuar në gjendjen aktuale të Indeksit. 
//Pra, së pari merr indeksin aktual i cili është një vlerë e plotë.
loadQuiz()


function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           <button><a href="./index.html">Back to home</a></li></button>
           `
       }
    }
})