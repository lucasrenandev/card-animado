
const image1 = document.getElementById("tenis-1")
const image2 = document.getElementById("tenis-2")

const next = document.getElementById("right")
const before = document.getElementById("left")

next.addEventListener("click", () => {
    image1.style.left = "500px"
    image2.style.left = "-30px"
})

before.addEventListener("click", () => {
    image1.style.left = "-40px"
    image2.style.left = "-550px"
})