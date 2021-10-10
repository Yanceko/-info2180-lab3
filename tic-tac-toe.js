


window.onload=function(){
    var x = true;
    var status = document.getElementById("status");
    var board= document.getElementById("board");
    var boardList = board.querySelectorAll("div");
    var button = document.querySelector("button");
    /*let sq= document.getElementById('board');
    console.log(sq);
    console.log(sq.children);
    console.log(sq.firstChild);*/
    



/*boardList.forEach(element => {
    element.setAttribute("class","square");
    element.setAttribute("id",id);
    id++;
    //Test
    console.log(boardlist.indexOf(element));*/

    //var slot = document.getElementById('board').childNodes;
    boardList.forEach(slotCell => {
    slotCell.setAttribute('class','square');
    console.log(boardList);
});
}
