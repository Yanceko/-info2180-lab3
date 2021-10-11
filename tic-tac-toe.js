
window.onload=function(){
    //var x = true;
    //var status = document.getElementById("status");
    var board= document.getElementById("board");
    var boardList = board.querySelectorAll("div");
    var currPlayer ='X'
    //var button = document.querySelector("button");
    
    



    //var slot = document.getElementById('board').childNodes;
    boardList.forEach(slotCell => {
    slotCell.setAttribute('class','square');
    console.log(boardList);

    slotCell.addEventListener("click",clicked=>{
        if (currPlayer =="O" && !slotCell.classList.contains("O") && !slotCell.classList.contains("X") ){
            slotCell.textContent="O";
            slotCell.classList.add("O");
            currPlayer = "X";
        }
        if (currPlayer =="X" && !slotCell.classList.contains("O") && !slotCell.classList.contains("X") ){
            slotCell.textContent="X";
            slotCell.classList.add("X");
            currPlayer = "O";
        }
        

    })

    slotCell.addEventListener('mouseover', function(e) {
        e.target.classList.add('hover');
      });

    slotCell.addEventListener('mouseout', function(e) {
        e.target.classList.remove('hover');
      });
      

    

});
    //let boxes = document.querySelectorAll('.box');

    

}
