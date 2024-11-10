const quizData=[
    {
        question:"what is the capital of India",
        options:["Delhi","Jabalpur","Bhopal","Mumbai"],
        correct:0
        
    },
    {
        question:"what is the markup language",
        options:["C++","C","JAVA","HTML"],
        correct:3
        
    },
    {
        question:"what is the scripting language",
        options:["PHP","C","JAVA","Python"],
        correct:3
        
    },
    {
        question:"what is procedure language",
        options:["PHP","C","JAVA ADVANCE","JAVA"],
        correct:1
        
    }
]
const question=document.getElementById("question");
const aOption=document.getElementById("aOption");
const bOption=document.getElementById("bOption");
const cOption=document.getElementById("cOption");
const dOption=document.getElementById("dOption");

const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const submitBtn=document.getElementById("submitBtn");
let currentQues=0;

function loadQuiz(){
    question.innerHTML=quizData[currentQues].question
    aOption.innerHTML=quizData[currentQues].options[0]
    bOption.innerHTML=quizData[currentQues].options[1]
    cOption.innerHTML=quizData[currentQues].options[2]
    dOption.innerHTML=quizData[currentQues].options[3]


    a.value="0"
    b.value="1"
    c.value="2"
    d.value="3"
    
    

}

loadQuiz();
submitBtn.addEventListener("click",()=>{
    submitBtn.disabled=false
    const answersT=document.querySelectorAll(".answers")
    //console.log(answers)
    var cnt1=0
    answersT.forEach((answer)=>{
        
        if(!answer.checked){
            console.log(answer.checked)
            cnt1++
        }
    })
    if(cnt1==4){
        
    }else{














    getSelected()
    currentQues++;
    if(currentQues<quizData.length){
        deselectAll();
    loadQuiz();
    }else{
        alert(score)
    }}
})

function deselectAll(){
    const answers=document.querySelectorAll(".answers");
    answers.forEach((answerRadio=>{
        answerRadio.checked=false
    }))
}
var score=0
function getSelected(){
    
    const answers=document.querySelectorAll(".answers")
    //console.log(answers)
    var cnt=0
    answers.forEach((answer)=>{
        
        if(answer.checked){
            var Correctans=quizData[currentQues].correct
            console.log(Correctans,currentQues)
            if(answer.value==Correctans){
                console.log("correct")
                score++;
            }else{
                console.log("wrong")
            }
        }
        
    })
    
}