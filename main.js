let SH = 1.3 * document.documentElement.scrollHeight

let vegs = [
    {name: "broccoli", left:75, top:0.25 * SH},
    {name: "carrot", left:30, top:0.37 * SH},
    {name: "tomato", left:15, top:0.52 * SH},
    {name: "celery", left:65, top:0.6 * SH},
    {name: "onion", left:10, top:0.75 * SH},
    {name: "cucumber", left:70, top:0.85 * SH},
    {name: "tomato", left:40, top:0.9 * SH},
    {name: "parsley", left:20, top: SH},
]

//add vegetables to the page
for (i of vegs) {
    let veg = document.createElement("div")
    veg.classList.add("vegetable")
    veg.style.left = "" + i.left + "%"
    veg.style.top = "" + i.top + "px"
    veg.style.width = veg.style.height ="" + (Math.random()*50 + 150) + "px"
    document.querySelector("#vegetables").appendChild(veg)

    let img = document.createElement('img')
    img.src = "img/vegs/" + i.name +".png"
    veg.appendChild(img)

    i.rot = (Math.random() + 1) / 2
    console.log(vegs)

}

for (veg of document.querySelectorAll(".vegetable")) {
    veg.style.transform = "translateY(" + -window.scrollY*0.5 + "px) rotate(" + window.scrollY*0.4*i.rot + "deg)"
}

document.body.onscroll = () => {
    for (veg of document.querySelectorAll(".vegetable")) {
        veg.style.transform = "translateY(" + -window.scrollY*0.5 + "px) rotate(" + window.scrollY*0.4*i.rot + "deg)"
    }
}