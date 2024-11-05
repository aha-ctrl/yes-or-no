const no =  document.getElementById("btn1")
const yes =  document.getElementById("btn2")
   yes.onclick= () => {
    text.innerHTML = "Кому должен,тому и прощаю!"
    yes.onclick = () => {
    text.innerText = "Все давай гуляй"
    yes.style.display = "none"
    no.style.display = "none"
}


no.onclick= () => {
    no.onclick = () => {
    text.innerText = ""
    no.style.display = "none"
    yes.style.display = "none"
 }
}
   }
no.onclick = () => {
        text.innerHTML = "Держи миллион долларов!"
        b1.style.display = "none"
        b2.style.display = "none"
    }