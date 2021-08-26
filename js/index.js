let BD = document.querySelector("body");
BD.addEventListener("mouseover", function(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},146 )`;
})
let stack = document.querySelector(".stack");
[...stack.children].reverse().forEach(i => stack.append(i));
stack.addEventListener('click',swap);
setInterval(swap, 1000);
function swap(){
    let cards=document.querySelector('.cards:last-child');
    // if(e.target!=cards) return;
    cards.style.animation = "swap 700ms forwards";
      setTimeout(() =>{
        cards.style.animation = "";
        stack.prepend(cards);
    }, 700);  
}