var firstAnswers = document.querySelectorAll("button.first")
var secondAnswers = document.querySelectorAll("button.second")
var thirdAnswers = document.querySelectorAll("button.third")
var firstQuiz = document.getElementById("first-wrapper")
var secondQuiz = document.getElementById("second-wrapper")
var thirdQuiz = document.getElementById("third-wrapper")
var scoreOfQuiz = document.getElementById("score-wrapper")
var counter = 0;

for (var i = 0; i < firstAnswers.length; i++) {
    firstAnswers[i].addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            counter++
        }
        firstQuiz.style.zIndex = "1"
        secondQuiz.style.zIndex = "3"
        thirdQuiz.style.zIndex = "1"
        firstQuiz.style.opacity = "0"
        secondQuiz.style.opacity = "1"


    })
}
for (var i = 0; i < secondAnswers.length; i++) {
    secondAnswers[i].addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            counter++
        }
        secondQuiz.style.zIndex = "2"
        thirdQuiz.style.zIndex = "3"
        secondQuiz.style.opacity = "0"
        thirdQuiz.style.opacity = "1"
    })
}
for (var i = 0; i < thirdAnswers.length; i++) {
    thirdAnswers[i].addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            counter++
        }
        thirdQuiz.style.zIndex = "2"
        thirdQuiz.style.opacity = "0"
        scoreOfQuiz.style.zIndex = "3"
        scoreOfQuiz.style.opacity = "1"
        document.querySelector("#score-wrapper h1").innerText = `Your Score is ${counter}`

    })
}