let SH = 1.3 * document.documentElement.scrollHeight

let vegs = [
    {name: "broccoli", left:75, top:0.25 * SH},
    {name: "carrot", left:30, top:0.37 * SH},
    {name: "tomato", left:15, top:0.52 * SH},
    {name: "celery", left:65, top:0.6 * SH},
    {name: "onion", left:10, top:0.75 * SH},
    {name: "cucumber", left:70, top:0.85 * SH},
    {name: "tomato", left:40, top:0.9 * SH},
    {name: "parsley", left:20, top: 0.96 * SH},
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

}

for (veg of document.querySelectorAll(".vegetable")) {
    veg.style.transform = "translateY(" + -window.scrollY*0.5 + "px) rotate(" + window.scrollY*0.4*i.rot + "deg)"
}

document.body.onscroll = () => {
    for (veg of document.querySelectorAll(".vegetable")) {
        veg.style.transform = "translateY(" + -window.scrollY*0.5 + "px) rotate(" + window.scrollY*0.4*i.rot + "deg)"
    }
}

document.querySelector("#start").addEventListener("click", showRegisterMenu)

// i'mmad
// this is really dumb lmao
function constructRegMenu(regMenu) {
    let opacityCont = document.createElement("div")
    opacityCont.classList.add("opacity-container")
    regMenu.appendChild(opacityCont)

    let reg = document.createElement("div")
    reg.classList.add("reg-title")
    reg.innerText = "Sign Up"
    opacityCont.appendChild(reg)


    let inputCont = document.createElement("div")
    inputCont.style.width = "100%"
    opacityCont.appendChild(inputCont)


    let loginInputCont = document.createElement("div")
    let passwordInputCont = document.createElement("div")
    loginInputCont.classList.add("input-cont")
    passwordInputCont.classList.add("input-cont")
    inputCont.appendChild(loginInputCont)
    inputCont.appendChild(passwordInputCont)


    let loginLabel = document.createElement("label")
    loginLabel.for = "login"
    loginLabel.innerText = "Username"

    let loginInput = document.createElement("input")
    loginInput.id = "login"
    loginInput.placeholder = "Username"
    loginInput.classList.add("input")

    loginInputCont.appendChild(loginLabel)
    loginInputCont.appendChild(loginInput)


    let passwordLabel = document.createElement("label")
    passwordLabel.for = "password"
    passwordLabel.innerText = "Password"

    let passwordInput = document.createElement("input")
    passwordInput.id = "password"
    passwordInput.placeholder = "Password"
    passwordInput.classList.add("input")

    loginInputCont.appendChild(passwordLabel)
    loginInputCont.appendChild(passwordInput)


    let regButton = document.createElement("button")
    regButton.innerText = "Sign up!"
    opacityCont.appendChild(regButton)

    return [opacityCont, regButton]
}

function showRegisterMenu() {
    let main = document.querySelector("main")

    let bgScreen = document.createElement('div')
    bgScreen.classList.add("dark-bg")
    main.appendChild(bgScreen)

    let regMenu = document.createElement('div')
    regMenu.classList.add("reg-menu")
    main.appendChild(regMenu)

    showAct = new Promise(resolve => {
        setTimeout(() => {
            bgScreen.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
            regMenu.style.width = "700px"
            regMenu.style.height = "800px"

            bgScreen.addEventListener("click", () => {
                let main = document.querySelector("main")

                main.removeChild(bgScreen)
                main.removeChild(regMenu)
            })

            let [opacityCont, regButton] = constructRegMenu(regMenu)

            resolve([opacityCont, regButton])
        }, 700)
    })

    showAct.then(([container, button]) => {
        setTimeout(() => {
            container.style.opacity = "100%"

            console.log(button)
            button.addEventListener("click", () => {
                funny = document.createElement("div")
                funny.innerText = "Hehe, you thought I made a working site? Fool!"
                funny.style.position = "absolute"
                funny.style.bottom = "10%"
                    container.appendChild(funny)
            })
        }, 300)
    })
}