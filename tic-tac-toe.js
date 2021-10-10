
var x = true;
var status = document.getElementById("status");
var board= document.getElementById("board");
var boardList = gameBoard.querySelectorAll("div");
var button = document.querySelector("button");

/*boardList.forEach(element => {
    element.setAttribute("class","square");
    element.setAttribute("id",id);
    id++;
    //Test
    console.log(boardlist.indexOf(element));*/

var slot = document.getElementById('board').childNodes;
slot.forEach(slotCell =>{
    console.log(slotCell);
    slotCell.setAttribute('class','square');
})
