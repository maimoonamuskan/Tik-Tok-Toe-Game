let boxes =document.querySelectorAll(".box")
let resetBtn =document.querySelector("#reset-btn")
let newBtn =document.querySelector("#new-btn")
let msgContainer =document.querySelector(".msg-container")
let msg =document.querySelector("#msg")
let turnText =document.querySelector("#turn")
let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const enableBoxes =()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("win");
});
count = 0;
}
const disableBoxes = ()=>{
    boxes.forEach((box)=>{
box.disabled = true;
})
}
const showWinner = (winner, pattern)=>{
    pattern.forEach((index)=>{
        boxes[index].classList.add("win");
    })
    msg.innerText = `Congratulations!\n${winner} Wins`;
    msgContainer.classList.remove("hide")
    disableBoxes();
};
const showDraw =()=>{
    msg.innerText = "Match Draw!";
    msgContainer.classList.remove("hide");
};
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1, pattern)
    return true;
    }
    }
    }
    return false;
}




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            turnText.innerText="Current Turn : X";
        }else
            {
            box.innerText="X";
            turnO=true;
            turnText.innerText="Current Turn : O";
        }
        box.disabled=true;
        count++;
        let winner = checkWinner();
        if(count===9 && !winner){
    showDraw();
        }

});
})



const resetGame = ()=>{
turnO =true;
count =0;
turnText.innerText="Current Turn : O";
enableBoxes();
msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);