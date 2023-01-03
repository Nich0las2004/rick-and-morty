let url = "https://rickandmortyapi.com/api/character/108" //url

let playMusic = () => { //function that plays the sound
    let audio = new Audio("audio.mp3")
    audio.play()
}

let button = document.getElementById("myBtn")

button.addEventListener('click', playMusic)

let rickAndMorty = async() => { //asynchronous function
    let res = await fetch(url)  //"res" is a varible that fetches url
    let data = await res.json() //variable "data" convert res to an object that can be accessed
    
    let imageURL = data.image

    let image = document.querySelector("#image")
    
    fetch(imageURL).then(() => {
        return image.src = imageURL
    })
    
    let {gender, name, species, status, type, location} = data //destructuring
    let realLoc = location.name
    document.querySelector("#sex").textContent = gender
    document.querySelector("#name").textContent = name
    document.querySelector("#species").textContent = species
    document.querySelector("#status").textContent = status
    document.querySelector("#type").textContent = type
    document.querySelector("#location").textContent = realLoc
}

setTimeout(rickAndMorty, 1000)