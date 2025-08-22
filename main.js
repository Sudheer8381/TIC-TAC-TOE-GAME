// alert("hello sudheer");
let boxs = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let gamebtn = document.querySelector(".game-btn");
let restart = document.querySelector(".restart");

// console.log(boxs);
let turnO = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxs.forEach((box) => {
    box.addEventListener(("click"), () =>{
                // console.log("box was clicked")
     if(turnO){
        box.innerText = "O";
        box.style.color = "red";
        turnO = false;
     }else{
        box.innerText = "X";
        box.style.color = "purple";
        turnO  = true;
     }
     box.disabled = true;

     checkwinner();
    });
    
});

const checkwinner = () =>{
    for(pattern of winPattern){
        // console.log(pattern);
        let pos1 = boxs[pattern[0]].innerText; 
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos2 !==""){
            if(pos1 === pos2 && pos2 === pos3){
             console.log("winner",pos1);
             showwinner(pos1);
            }
        }
    }
};

const showwinner = (winner) =>{
   msg.innerText = `Congratulation Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabledboxs();
};

const disabledboxs = () => {
   for(let box of boxs){
    box.disabled = true;
   }
};

const enableboxs = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetgame = () =>{
        turnO = true;
        msgcontainer.classList.add("hide");
        enableboxs();
};


gamebtn.addEventListener(("click"), resetgame);
restart.addEventListener(("click"), resetgame);