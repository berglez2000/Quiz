// All questions
let AllQuestions = [

    [
        "How old is Cristiano Ronaldo?", 
        "30",
        "32",
        "35",
        "35"
    ],

    [
        "Cristiano Ronaldo was Manchester United's first Ballon D'or recipient since when?",
        "1968",
        "1970",
        "1972",
        "1968"
    ],

    [
        "Which club was Ronaldo playing with before he joined Manchester United?",
        "Porto",
        "Madeira",
        "Sporting",
        "Sporting"
    ],

    [
        "In which year was Ronaldo born?",
        "1984",
        "1985",
        "1986",
        "1985"
    ],

    [
        "Ronaldo was recently beaten to the 2007 Ballon D'or by which player?",
        "Kaka",
        "Ronaldinho",
        "Zidane",
        "Kaka"
    ],

    [
        "When Cristiano Ronaldo joined Manchester United, he did not want the number '7' shirt. Who told him that number 7 fits him most?",
        "Rio Ferdinand",
        "Sir Alex Ferguson",
        "Cantona",
        "Sir Alex Ferguson"
    ],

    [
        "What was the last shirt number that Ronaldo wore when he played for Sporting Lisbon?",
        "7",
        "17",
        "28",
        "28"
    ],

    [
        "Ronaldo made his debut for Manchester United in a 4-0 win against which club?",
        "Bolton Wanderers",
        "Liverpool",
        "WBA",
        "Bolton Wanderers"
    ],

    [
        "Who did Ronaldo score his first Manchester United goal against?",
        "WBA",
        "Bolton Wanderers",
        "Portsmouth",
        "Portsmouth"
    ],

    [
        "How did Ronaldo score his first Manchester United goal?",
        "freekick",
        "header",
        "tap in",
        "freekick"
    ],

    [
        "In 2006, Ronaldo was said to have some disagreements with which player about roles in Manchester United?",
        "Ruud Van Nistelrooy",
        "Wayne Rooney",
        "Dimitri Berbatov",
        "Ruud Van Nistelrooy"
    ],

    [
        "Cristiano Ronaldo was ranked at which position in the 2007 FIFA World Player of the Year Award voting?",
        "1st",
        "2nd",
        "3rd",
        "3rd"
    ],

    [
        "Against whom did Cristiano Ronaldo score his first World Cup goal against?",
        "Iran",
        "Brazil",
        "France",
        "Iran"
    ]

];

// Variables
const nextBtn = document.querySelector(".next-btn");
const questionNumber = document.querySelector("header ul");
const question = document.querySelector(".question");
const form = document.querySelector(".main-form");
const score = document.querySelector(".score");

// Numbers
let currentQuestion = 1;
let correctAnswer = 0;


//generate random question
random = Math.floor(Math.random() * AllQuestions.length);
x = 1;
question.textContent = AllQuestions[random][0];
for (let i = 2; i <= 8; i += 3){
    form.children[i].value = AllQuestions[random][x];
    form.children[i + 1].textContent = AllQuestions[random][x];
    x++;
}

nextBtn.addEventListener("click", main);


function main(){
    //check if correct
    for (let i = 2; i <= 8; i += 3){
        if (form.children[i].checked){
            if (form.children[i].value === AllQuestions[random][4]){
                console.log("Correct");
                correctAnswer++;
            } else {
                console.log("Wrong");
            }
        }
    }

    if (form.children[2].checked === false && form.children[5].checked === false && form.children[8].checked === false){
        alert("You forgot to answer. -1 point");
        correctAnswer--;
    }


    //Delete question from list
    AllQuestions.splice(random, 1);

    //Change numbers
    if (currentQuestion === 10){
        alert("You finished the quiz");
        const h1 = document.createElement("h1");
        h1.classList.add("result");
        h1.textContent = `SCORE: ${correctAnswer}/10`;
        if (correctAnswer > 5){
            h1.style.color = "green";
        } else{
            h1.style.color = "red";
        }
        //Add play again button
        const btn = document.createElement("button");
        btn.textContent = "Play Again?";
        score.appendChild(h1);
        score.appendChild(btn);

        btn.addEventListener("click", () => {
            location.reload();
        });
    }

    questionNumber.children[currentQuestion - 1].classList.remove("current-question");
    questionNumber.children[currentQuestion].classList.add("current-question");
    currentQuestion++;

    //Next question
    random = Math.floor(Math.random() * AllQuestions.length);
    x = 1;
    question.textContent = AllQuestions[random][0];
    for (let i = 2; i <= 8; i += 3){
        form.children[i].value = AllQuestions[random][x];
        form.children[i + 1].textContent = AllQuestions[random][x];
        x++;
    }

    for (let i = 2; i <= 8; i += 3){
        if (form.children[i].checked === true){
            form.children[i].checked = false;
        }
    }
}