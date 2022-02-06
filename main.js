let vegs = document.querySelectorAll(".vegetable")
for (i of vegs) {
    i.rot = (Math.random() + 1) / 2;
    i.style.width = i.style.height ="" + (Math.random()*50 + 150) + "px"
}

document.body.onscroll = () => {
    for (i of vegs) {
        i.style.transform = "translateY(" + -window.scrollY*0.5 + "px) rotate(" + window.scrollY*0.4*i.rot + "deg)"
    }
}