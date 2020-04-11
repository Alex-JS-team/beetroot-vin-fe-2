let city = [];

fetch('city.json')
    .then(resp => resp.json())
    .then(data => {
        city = data;
        data.forEach((el, index) => {
            fetch('http://api.openweathermap.org/data/2.5/weather?id=' + city[index].id + '&appid=70e1ed322b02acbc57d443dd91065f3e')
                .then(resp => resp.json()
                )
                .then(data =>
                    document.querySelector('ul').innerHTML +=
                    `<li class="forecast__item"> 
                <h3 class="forecast__title"> ${data.name}</h3>
                <div class="forecast__info"> 
                   <p> ${Math.round(data.main.temp - 273)} &deg;C</p>
                   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                </div>
             </li>`
                )
        })
    })

