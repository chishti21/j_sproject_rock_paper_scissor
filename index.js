let userscore=0
let compscore=0
let choice=document.querySelectorAll('.choice')

let u_score=document.querySelector("#user-score")
let c_score=document.querySelector("#comp-score")
let message=document.querySelector("#msg")

const winner=(result)=>{
    u_score.innerHTML=userscore
    c_score.innerHTML=compscore
    if(result){
        console.log("user win ")
        userscore++
        message.innerHTML="you win the match"
        message.style.backgroundColor = "green";


    }
    else{
        console.log("computer win")
        compscore++;
        message.innerHTML="computer win the match! try again"
        message.style.backgroundColor = "red";

    }

}
const playGame=(user_choice)=>{
    select_arr=["rock","paper","scissor"]
    let index=Math.floor((Math.random())*3)
    console.log(index)
    let comp_choice=select_arr[index]
    let user_win=true
    if(user_choice===comp_choice){
        message.style.backgroundColor = "gray";

        console.log("game draw")
    }
    else{
       
        if(user_choice==="rock")
        {
            // paper,scissors
            user_win=comp_choice==="paper"?false:true
        }
        else if(user_choice==="paper"){
            // rock,scissors
            user_win=comp_choice==="scissor"?false:true
        }
        else{
            // rock,paper
            user_win=comp_choice==="rock"?false:true
        }
    }
    winner(user_win)
}
choice.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener('click',()=>{
        let user_choice=choice.getAttribute("id")
        console.log("choice was clicked",user_choice)
        playGame(user_choice)

    })
})