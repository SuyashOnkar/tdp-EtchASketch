

const container = document.getElementById("container");

container.setAttribute('style', 'display:flex;flex-wrap:wrap;width:500px;height:500px;padding:0;margin:0;border:2px solid black;justify-content:space-between;');

for(let i=0;i<16*16;i++){
    const sq = document.createElement("div");
    sq.setAttribute('id','box')
    sq.setAttribute('style','aspect-ratio:1;min-width:16px;margin:0;padding:0;flex:1 0 6.25%;')
    container.appendChild(sq);
}

const boxes = document.querySelectorAll('#box').forEach(item => {
    item.addEventListener("mouseover", function(e){
        e.target.style.background = "blue";
    })
})

boxes.forEach(() => {
    box.addEventListener("mouseover", function(e) {
        e.target.background = "blue";
    });
});
