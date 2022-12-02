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