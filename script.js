
let setA = [
    {
        id: "1",
        topic: "Basic's of  JavaScript",
        ques: "javascript is a _____ language",
        "opt1": "object Oriented ",
        "opt2": " single threaded ",
        "opt3": "both A and B",
        "opt4": " none of the above",
        ans: "both A and B",
    },
    {
        id: "2",
        topic: "data type",
        ques: "which of the following is not a datatype in javaScript ?",
        "opt1": "string ",
        "opt2": "number",
        "opt3": "boolean",
        "opt4": "int",
        ans: "int",
    },{
        id: "3",
        topic: "conditional ",
        ques: "How many Loops in javaScript ? ",
        "opt1": "2 ",
        "opt2": "5",
        "opt3": "8",
        "opt4": "6",
        ans: "5",
    }
    ,{
        id: "4",
        topic: "string ",
        ques: "which method is used to create Array from String ?  ",
        "opt1": "slice ",
        "opt2": "splice",
        "opt3": "split",
        "opt4": "join",
        ans: "split",
    },{
        id: "5",
        topic: "string ",
        ques: "Which Operator is called us Nullish Operator ? ",
        "opt1": "??",
        "opt2": "&&",
        "opt3": "||",
        "opt4": "none of the above",
        ans: "??",
    }
    ,{
        id: "6",
        topic: "Basic's of  JavaScript",
        ques: "javascript is a _____ language",
        "opt1": "script",
        "opt2": "scripting multithreaded",
        "opt3": "javascript",
        "opt4": "js",
        ans: "script",
    },

    {
        id: "7",
        topic: "Basic's of  JavaScript",
        ques: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "opt1": '#demo.innerHTML = "Hello World!";',
        "opt2": 'document.getElementById("demo").innerHTML = "Hello World!"; ',
        "opt3": 'document.getElementByName("p").innerHTML = "Hello World!";',
        "opt4": 'document.getElement("p").innerHTML = "Hello World!";',
        ans: 'document.getElementById("demo").innerHTML = "Hello World!"; ',
    },
    {
        id: "8",
        topic: "Basic's of  JavaScript",
        ques: "Where is the correct place to insert a JavaScript?",
        "opt1": 'The body section ',
        "opt2": 'Both the head section and the body section are correct ',
        "opt3": 'The head section',
        "opt4": 'none of above',
        ans: 'Both the head section and the body section are correct ',
    },
    {
        id: "9",
        topic: "Basic's of  JavaScript",
        ques: 'What is the correct syntax for referring to an external script called "x.js"?',
        "opt1": 'script src="x.js"',
        "opt2": 'script name="x.js"',
        "opt3": 'script href="x.js"',
        "opt4": 'link src="x.js"',
        ans: 'script src="x.js"',
    },
    {
        id: "10",
        topic: "Basic's of  JavaScript",
        ques: 'The external JavaScript file must contain the <script> tag.',
        "opt1": 'False',
        "opt2": 'true',
        "opt3": 'null',
        "opt4": 'undifiend',
        ans: 'False',
    },
];

let setB = [
    {
        id: "1",
        topic: "Basic's of  JavaScript",
        ques: 'How do you write "Hello World" in an alert box?',
        "opt1": 'alert("Hello World");',
        "opt2": 'msgBox("Hello World");',
        "opt3": 'msg("Hello World");',
        "opt4": 'alertBox("Hello World");',
        ans: 'alert("Hello World");',
    },
    {
        id: "2",
        topic: "Basic's of  JavaScript",
        ques: 'How do you create a function in JavaScript?',
        "opt1": 'function myFunction()',
        "opt2": 'function:myFunction()',
        "opt3": 'function = myFunction()',
        "opt4": 'function + myFunction()',
        ans: 'function myFunction()',
    },
    {
        id: "3",
        topic: "Basic's of  JavaScript",
        ques: 'How do you call a function named "myFunction"?',
        "opt1": "myFunction()",
        "opt2": "call function myFunction()",
        "opt3": "call  myFunction()",
        "opt4": " myFunction call",
        ans: "myFunction()",
    },
    {
        id: "4",
        topic: "Basic's of  JavaScript",
        ques: 'How to write an IF statement in JavaScript?',
        "opt1": 'if (i == 5)',
        "opt2": 'if i = 5',
        "opt3": 'if i = 5 then',
        "opt4": 'if i == 5 then',
        ans: 'if (i == 5)',
    },{
        id: "5",
        topic: "Basic's of  JavaScript",
        ques: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        "opt1": 'if (i != 5)',
        "opt2": 'if (i <> 5)',
        "opt3": 'if i <> 5',
        "opt4": 'if i =! 5 then',
        ans: 'if (i != 5)',
    },{
        id: "6",
        topic: "Basic's of  JavaScript",
        ques: 'How does a WHILE loop start?',
        "opt1": 'while(condition){}"',
        "opt2": 'while(i <= 10; i++)',
        "opt3": 'while(let i=0; i <= 10; i++)',
        "opt4": 'while i = 1 to 10',
        ans: 'while(condition){}"',
    },
    {
        id: "7",
        topic: "Basic's of  JavaScript",
        ques: "How does a FOR loop start?",
        "opt1": 'for(condition)',
        "opt2": 'for (i = 0; i <= 5)',
        "opt3": 'for (i <= 5; i++)',
        "opt4": 'for i = 1 to 5',
        ans: 'for(condition)',
    },
    {
        id: "8",
        topic: "Basic's of  JavaScript",
        ques: "How can you add a comment in a JavaScript?",
        "opt1": '//This is a comment',
        "opt2": '!--This is a comment--',
        "opt3": '!-This is a comment-',
        "opt4": '"This is a comment',
        ans: '//This is a comment',
    },
    {
        id: "9",
        topic: "Basic's of  JavaScript",
        ques: 'How to insert a comment that has more than one line?',
        "opt1": '/*This comment has more than one line*/',
        "opt2": '//This comment has more than one line//',
        "opt3": '<--This comment has more than one line-->',
        "opt4": '/This comment has more than one line/',
        ans: '/*This comment has more than one line*/',
    },
    {
        id: "10",
        topic: "Basic's of  JavaScript",
        ques: 'What is the correct way to write a JavaScript array?',
        "opt1": 'var colors = ["red", "green", "blue"]',
        "opt2": 'var colors = (1:"red", 2:"green", 3:"blue")',
        "opt3": 'var colors = "red", "green", "blue"',
        "opt4": 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        ans: 'var colors = ["red", "green", "blue"]',
    },
];
const setC = [
    {
        id: 1,
        ques: "What does HTML stand for?",
        opt1: "Hyper Text Markup Language",
        opt2: "Highly Typed Modular Language",
        opt3: "Home Tool Markup Language",
        opt4: "Hyperlink and Text Markup Language",
        ans: "Hyper Text Markup Language",
    },
    {
        id: 2,
        ques: "What is the correct way to create a hyperlink in HTML?",
        opt1: "&lt;link&gt;www.example.com&lt;/link>",
        opt2: '&lt;a href="www.example.com"&gt;Click here&lt;/a&gt;',
        opt3: '&lt;href="www.example.com"&gt;Click here&lt;/a&gt;',
        opt4: "&lt;a link='www.example.com'&gt;Click here&lt;/a&gt;",
        ans: '&lt;a href="www.example.com"&gt;Click here&lt;/a&gt;',
    },
    {
        id: 3,
        ques: "Which HTML element is used for creating an ordered list?",
        opt1: "ul",
        opt2: "li",
        opt3: "ol",
        opt4: "dl",
        ans: "ol",
    },
    {
        id: 4,
        ques: "Which HTML tag is used for creating a line break?",
        opt1: "nlb",
        opt2: "break",
        opt3: "lb",
        opt4: "br",
        ans: "br",
    },
    {
        id: 5,
        ques: "Which HTML tag is used for creating a table?",
        opt1: "tab",
        opt2: "tr",
        opt3: "table",
        opt4: "tb",
        ans: "table",
    },
    {
        id: 6,
        ques: "What does the 'DOCTYPE' declaration in HTML5 define?",
        opt1: "The Document Object Type",
        opt2: "The Document Type Definition",
        opt3: "The Document Object Model",
        opt4: "The Document Type",
        ans: "The Document Type Definition",
    },
    {
        id: 7,
        ques: "What is the purpose of the HTML 'meta' tag?",
        opt1: "To define a metadata section for the document.",
        opt2: "To create a link to an external style sheet.",
        opt3: "To define a paragraph of text.",
        opt4: "To create an ordered list.",
        ans: "To define a metadata section for the document.",
    },
    {
        id: 8,
        ques: "Which HTML element is used for defining the structure of an HTML document?",
        opt1: "head",
        opt2: "html",
        opt3: "body",
        opt4: "structure",
        ans: "html",
    },
    {
        id: 9,
        ques: "What is the purpose of the 'alt' attribute in an HTML 'img' tag?",
        opt1: "To define the image source.",
        opt2: "To specify the image width.",
        opt3: "To provide alternative text for the image.",
        opt4: "To set the image alignment.",
        ans: "To provide alternative text for the image.",
    },
    {
        id: 10,
        ques: "What is the correct way to comment out multiple lines of HTML code?",
        opt1: "!-- This is a comment --",
        opt2: "/* This is a comment */",
        opt3: "// This is a comment",
        opt4: "! This is a comment !",
        ans: "!-- This is a comment --",
    },
];


function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}
function shuffleOption(array) {
    for(let k = array.length - 1; k >= 0; k--) {

        for(let i = 4; i > 0; i--) {
            const j = Math.floor(Math.random() * (i));
            if(j != 0) {
                [array[k][`opt${i}`],array[k][`opt${j}`]] = [array[k][`opt${j}`],array[k][`opt${i}`]];
            }
        }
    }
    return array;
}
let shuffleSetA = shuffleOption(shuffle(setA));
let shuffleSetB = shuffleOption(shuffle(setB));
let shuffleSetC = shuffleOption(shuffle(setC));
let questionData = [];


//   require things
const userAnswere = new Array(10);
// fill empty object
for(let index = 0; index < userAnswere.length; index++) {
    userAnswere[index] = {id: index,setAsReview: false,ans: null};
    console.log(index,userAnswere)

}


let countQues = 0;
let unAttempt = 0;
let score = 0;
let username = "";
// require elements
let userbox = document.getElementById('user-box');
let next = document.getElementById('user-next');
let inputbox = document.getElementById('user-input');
let setsBox = document.getElementById('sets-box');
// sets box next button 
let setsBtn = document.getElementById('sets-btn');
// progress bar

let progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    const progress = ((countQues + 1) / questionData.length) * 100;
    progressBar.style.width = progress + "%";
}

// question box utilities

let quesBox = document.getElementById('question-box');
let questext = document.getElementById('ques-text');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let review = document.getElementById('review');
// previous question
let previousquestion = document.getElementById('previous-btn');
let quesBtn = document.getElementById('ques-btn');
let optionItem = Array.from(document.getElementsByClassName('option-item'));
// question box submit btn
let submit = document.getElementById('Submit-btn');
submit.addEventListener("click",() => {
    storeDataInArray(countQues);
    if(!REVIEWMODE) {
        showReviewPopup();
    } else {
        REVIEWMODE = false;
        showScore();
        quesIndexBtns.forEach(element => {
            element.style.display = "inline-block";
        })
    }
    quesBox.style.display = 'none';
})
// previous question event
previousquestion.addEventListener("click",() => {
    if(!VIEWMODE) {storeDataInArray(countQues);}
    (countQues > 0) ? loadQuestion(--countQues) : null;
    setCheckedAnswere();
});
function setPreviousQuestButtonDisplay() {
    (countQues > 0) ?
        previousquestion.style.display = 'block' : previousquestion.style.display = 'none';
}
// next question
quesBtn.addEventListener("click",() => {
    if(countQues < questionData.length - 1) {
        if(!VIEWMODE) {storeDataInArray(countQues);}
        loadQuestion(++countQues);
        setCheckedAnswere();
    }
    (countQues == questionData.length - 1) ?
        quesBtn.style.display = 'none' : "null";
});
// user box next button
next.addEventListener('click',() => {
    if(inputbox.value == "") {
        alert(" please enter name ! ");
        return;
    } else {
        username = inputbox.value;
    }
    userbox.style.display = 'none';
    setSetsBoxDisplay(true);
});
// set display none and block
function setSetsBoxDisplay(flag) {
    (flag) ? setsBox.style.display = 'block' : setsBox.style.display = 'none';
}
// event listioner of sets button next
setsBtn.addEventListener('click',() => {
    let setsArray = Array.from(document.getElementsByClassName('set-item'));
    let selectedSet = null;
    setsArray.forEach((element) => {
        if(element.checked == true) {
            selectedSet = element.id;
        }
    });
    if(selectedSet == 'set-a') {
        questionData = shuffleSetA;
        displayQuestion();
    } else if(selectedSet == 'set-b') {
        questionData = shuffleSetB;
        displayQuestion();
    } else if(selectedSet == 'set-c') {
        // alert("selected set is c item display in 21-30");
        questionData = shuffleSetC;
        displayQuestion();
    } else {
        setSetsBoxDisplay(true);
        return;
    }
    setSetsBoxDisplay(false);
});

// display question box
function setDisplayQuestion(flag) {
    (flag) ? quesBox.style.display = 'block' : quesBox.style.display = 'none';
}
// change data of questions
function loadQuestion(index) {
    quesBtn.style.display = 'inline-block';

    questext.innerHTML = "Question " + (index + 1) + " :- " + questionData[index].ques;
    opt1.innerHTML = questionData[index].opt1;
    opt2.innerHTML = questionData[index].opt2;
    opt3.innerHTML = questionData[index].opt3;
    opt4.innerHTML = questionData[index].opt4;

    setPreviousQuestButtonDisplay();
    // progress bar
    updateProgressBar();

    if(REVIEWMODE) {
        previousquestion.style.display = 'none';
        progressBar.style.display = 'none';
        review.style.display = 'none';
        review.nextElementSibling.style.display = 'none';
        quesBtn.style.display = 'none';
        setCheckedAnswere();
    }
    // user view result 
    if(VIEWMODE) {
        optionItem.forEach(element => {
            element.style.backgroundColor = 'transparent';
            element.firstElementChild.disabled = true;
            element.style.color = 'black';
            if(userAnswere[countQues].ans != questionData[countQues].ans && (element.lastElementChild.innerHTML == userAnswere[countQues].ans)) {

                element.style.backgroundColor = "red";
                element.style.color = "white";
            }
            if(element.lastElementChild.innerHTML == questionData[countQues].ans) {
                element.style.color = "white";
                element.style.backgroundColor = "green";
            }
            if(element.lastElementChild.innerHTML == questionData[countQues].ans && userAnswere[countQues].ans == null) {
                element.style.color = "white";
                element.style.backgroundColor = "rgb(255, 162, 0)";
            }

        });
    }
    quesIndexBtns.forEach((element,index) => {
        element.style.color = 'white';
        if(userAnswere[index].setAsReview) {
            element.style.backgroundColor = 'rgb(255, 162, 0)';
        } else if(userAnswere[index].ans) {
            element.style.backgroundColor = 'green';
        }
        else {
            element.style.backgroundColor = 'transparent';
            element.style.color = 'black';
        }
    });
}
// display the question
const quesIndexBtns = Array.from(document.querySelectorAll('.question-index-btns > button'));
function displayQuestion() {
    if(countQues >= questionData.length) {
        return;
    }
    setDisplayQuestion(true);
    loadQuestion(countQues);

    console.log(quesIndexBtns);
    quesIndexBtns.forEach(element => {
        element.addEventListener("click",() => {
            if(!VIEWMODE) {storeDataInArray(countQues);}
            countQues = element.id - 1;
            loadQuestion(countQues);
            setCheckedAnswere();
            (countQues == questionData.length - 1) ? quesBtn.style.display = 'none' : null;
        });
    })
}
// if user again see quesstion then set review and answere checked 
function setCheckedAnswere() {
    optionItem.forEach((element) => {
        if(element.lastElementChild.innerHTML == userAnswere[countQues].ans) {
            console.log("answere matched user and option check it");
            element.firstElementChild.checked = true;
        }
        if(userAnswere[countQues].setAsReview) {
            review.checked = true;
        } else {
            review.checked = false;
        }
    });
}
// // user selected answere 
function getCheckedAnswere() {
    let answere = null;
    optionItem.forEach(element => {
        if(element.firstElementChild.checked) {
            element.firstElementChild.checked = false;
            answere = element.lastElementChild.innerHTML;;
        }
    });
    return answere;

}
function isSetAsReview() {

    console.log(countQues," question review",review.checked);
    if(review.checked) {
        review.checked = false;
        console.log("set as review");
        return true;
    }
    return false;
}
function storeDataInArray(index) {
    const data = {id: index,setAsReview: isSetAsReview(),ans: getCheckedAnswere()};
    console.log(data);

    userAnswere.splice(index,1,data);
    console.log("user Answere",userAnswere[index]);
    console.log("user Answeres",userAnswere);
}
// =================== Score Box =================
// shows score
let scorebox = document.getElementById('score-box');
let rightscore = document.getElementById("right-score");
let wrongscore = document.getElementById("wrong-score");
let unattemptscore = document.getElementById("unattempt-score");
let percscore = document.getElementById("perc-score");
let userNamebox = document.getElementById("user-name");
let showScoreBtn = document.getElementById('show-score-btn');
showScoreBtn.addEventListener("click",() => {
    // showScore();
    quesBox.style.display = 'none';
    scorebox.style.display = 'block';
    showScoreBtn.style.display = 'none';
    // submit.style.display = 'block';
});
function setShowScoreDisplay(flag) {
    if(flag) {
        scorebox.style.display = 'block ';
    } else {
        scorebox.style.display = 'none';
    }
}
function checkScore() {
    userAnswere.forEach((element,index) => {
        if(userAnswere[index].ans == questionData[index].ans) {
            console.log("Right answere");
            score++;
        } else if(userAnswere[index].ans == null) {
            unAttempt++;
        } else {
            console.log("Right wrong answere ");
        }
    });
}
function showScore() {

    setShowScoreDisplay(true);

    checkScore();

    userNamebox.innerHTML = username;
    rightscore.innerHTML = "  " + score;
    wrongscore.innerHTML = "  " + (questionData.length - score) - unAttempt;
    percscore.innerHTML = "  " + (score / questionData.length * 100).toFixed(2);
    unattemptscore.innerHTML = "  " + unAttempt;

}
// ============== Correct Answere ==============
let VIEWMODE = false;
let viewbtn = document.getElementById('view-btn');
viewbtn.addEventListener("click",() => {
    VIEWMODE = true;
    submit.style.display = 'none';
    showScoreBtn.style.display = 'block';
    countQues = 0;

    setShowScoreDisplay(false);
    quesBox.style.display = 'block';
    loadQuestion(countQues);
    review.parentElement.style.display = 'none';
});
let playbtn = document.getElementById('play-btn');
playbtn.addEventListener("click",() => {
    location.reload();
});
// ========review mode===============
let REVIEWMODE = false;
let reviewIndex = 0;
let reviewArr = [];
function checkReview() {
    const reviews = userAnswere.filter((object,index) => {
        quesIndexBtns[index].style.display = 'none';
        if(object.setAsReview) {
            quesIndexBtns[index].style.display = 'inline-block';
            return true;
        }
    });
    console.log(reviews);
    return reviews;
}
let reviewPopupBox = document.getElementById("review-popup");
let reviewYes = document.getElementById("review-popup-yes");
let reviewNo = document.getElementById("review-popup-no");
reviewNo.addEventListener('click',() => {
    quesIndexBtns.forEach((eleme) => {
        eleme.style.display = 'inline-block';
    });
    showScore();
    console.log("no review");
    reviewPopupBox.style.display = 'none';
});
reviewYes.addEventListener('click',() => {
    REVIEWMODE = true;
    console.log("yes review");
    reviewPopupBox.style.display = 'none';
    reviewArr = checkReview();
    quesBox.style.display = 'block';
    loadQuestion(reviewArr[reviewIndex].id);
    reviewIndex++;
});

function showReviewPopup() {
    if(checkReview().length) {
        reviewPopupBox.style.display = 'block';
    } else {
        quesIndexBtns.forEach((eleme) => {
            eleme.style.display = 'inline-block'
        });
        showScore();
    }
}