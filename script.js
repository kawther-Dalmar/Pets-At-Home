const pets =["bird", "cat", "jiir", "rooster"]
const containerEl = document.querySelector(".container")

pets.forEach((pet)=>{
    const btnEl = document.createElement("button")

    btnEl.classList.add("btn")

    btnEl.innerText = pet

    containerEl.appendChild(btnEl)

    const audioEl = document.createElement("audio")

    audioEl.src = "audo/" +pet + ".mp3"

    btnEl.style.backgroundImage = "url(img/" +pet + ".jpg)"
    
    btnEl.addEventListener("click",()=>{
        audioEl.play()
    })

    window.addEventListener("keydown",(event)=>{
        
        if(event.key === pet.slice(0, 1)){
            btnEl.style.transform = "scale(.9)"
            audioEl.play()
        }
        setTimeout(()=>{
            btnEl.style.transform = "scale(1)"

        },1000)
    })
    
    containerEl.appendChild(audioEl)

})


