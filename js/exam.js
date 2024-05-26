switch(true) {
    case data.weather[0].main == 'Sunny' || 'Clear' : _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear'; break;
    case data.weather[0].main == 'Clouds' && data.weather[0].description != 'few clouds' : _iconWeather[1].style.display = 'flex'; pMain.innerHTML = 'Clouds';break;
    case data.weather[0].description == 'few clouds' : _iconWeather[2].style.display = 'flex'; pMain.innerHTML = 'few clouds';break;
    case data.weather[0].main == 'Rain' || 'Drizzle' || 'Thunderstorm' : _iconWeather[3].style.display = 'flex';pMain.innerHTML = 'Rain';break;
    case data.weather[0].main == 'Snow' : _iconWeather[4].style.display = 'flex';pMain.innerHTML = 'Snow';break;
    default: _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear';


}

if(data.weather[0].main == 'Sunny' || 'Clear'){
    _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear';
}else if(data.weather[0].main == 'Clouds' && data.weather[0].description != 'few clouds'){
    _iconWeather[1].style.display = 'flex'; pMain.innerHTML = 'Clouds';
}else if(data.weather[0].description == 'few clouds'){
    _iconWeather[2].style.display = 'flex'; pMain.innerHTML = 'few clouds';
}else if(data.weather[0].main == 'Rain' || 'Drizzle' || 'Thunderstorm'){
    _iconWeather[3].style.display = 'flex';pMain.innerHTML = 'Rain';
}else if(data.weather[0].main == 'Snow'){
    _iconWeather[4].style.display = 'flex';pMain.innerHTML = 'Snow';
}