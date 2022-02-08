let vegs = [
    {name: "broccoli", left:80, top:110},
    {name: "carrot", left:30, top:150},
    {name: "tomato", left:15, top:210},
    {name: "celery", left:65, top:240},
    {name: "onion", left:10, top:300},
    {name: "cucumber", left:80, top:310},
    {name: "tomato", left:55, top:360},
    {name: "parsley", left:20, top:400},
]

//add vegetables to the page
for (i of vegs) {
    let veg = document.createElement("div")
    veg.classList.add("vegetable")
    veg.style.left = "" + i.left + "%"
    veg.style.top = "" + i.top + "%"
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