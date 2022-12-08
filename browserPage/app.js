const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeDisplay').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


function holidayCounter(){
    let dateFuture=new Date(2023, 5, 23 )
    let dateNow=new Date()
    let difference= dateFuture.getTime() - dateNow.getTime()
    let seconds = Math.floor(difference/1000)
    let minutes = Math.floor(seconds/60)
    let hours = Math.floor(minutes/60)
    let days = Math.floor(hours/24)
    let weeks = Math.floor(days/7)
    document.getElementById("weeksCounter").innerHTML=weeks + " tygodni "
    document.getElementById("daysCounter").innerHTML =  days + " dni "
    document.getElementById("hoursCounter").innerHTML = hours + " godzin "
    document.getElementById("minutesCounter").innerHTML = minutes + " minut "
    document.getElementById("secondsCounter").innerHTML = seconds + " sekund"
    setTimeout(holidayCounter, 1000)
  }


let enlarger = document.getElementById("apodEnlarger")
    enlarger.addEventListener("click", () =>{
      document.getElementById("imageItself").style.width="100vw"
      document.getElementById("imageItself").style.height="100vh"
      document.getElementById("imageItself").style.zIndex="20"
      document.getElementById("imageItself").style.position="fixed"
      document.getElementById("imageItself").style.right="0.1vw"
      document.getElementById("imageItself").style.top="0.1vw"
      document.getElementById("apodClosing").style.display="block"
    })
    




 
let closer = document.getElementById("apodClosing")
    closer.addEventListener("click", () =>{
      document.getElementById("apodClosing").style.display="none"
      document.getElementById("imageItself").style.width="35vw"
      document.getElementById("imageItself").style.height="fit-content"
      document.getElementById("imageItself").style.zIndex="0"
      document.getElementById("imageItself").style.position="unset"
      document.getElementById("imageItself").style.right="0"
      document.getElementById("imageItself").style.top="0"
    })
    
document.getElementById("apodCaller").addEventListener("click", apodAPI())

function apodAPI(){
    var url = "https://api.nasa.gov/planetary/apod?api_key=70Eg6Uf0bsaCKOzWdwZwbbmZseEGx1i3GWq4CW7a"
    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(data.hdurl)
          document.getElementById("apodTitle").innerText = data.title
          document.getElementById("APODimage").src = data.hdurl
          document.getElementById("apodExplanation").innerText = data.explanation
          document.getElementById("apodEnlarger").style
        })
}

      



      
  