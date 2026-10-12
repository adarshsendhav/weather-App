let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')
let img = document.querySelector('img')
let input = document.querySelector('input')
let form = document.querySelector('form')
let card = document.querySelector('#card')


const fetchWeather = async (e) => {

    e.preventDefault()

    try {
        let city = input.value
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=91f3f6e8ec4c49319d670527260810&q=${city}&aqi=yes`)
        const data = await response.json()
        h1.innerText = data.current.temp_c + "°C"

        if (data.current.temp_c < 20) {
            document.querySelector("body > div").classList.remove("bg-teal-500");
            document.querySelector("body > div").style.backgroundColor = "#F87171";
        } else {
            document.querySelector("body > div").classList.add("bg-teal-500");
            document.querySelector("body > div").style.backgroundColor = "";
        }


        h2.innerText = data.location.name
        p.innerText = data.current.condition.text
        img.setAttribute("src", data.current.condition.icon)
        card.className = "p-8 rounded-lg bg-white flex items-center justify-between w-full md:w-1/2"
    } catch (error) {
        window.alert("please enter valid city name")
    }

    form.reset()
}


form.addEventListener("submit", fetchWeather)
