const tog = document.getElementById('toggle')
const togMoon = document.getElementById('toggle-moon')
const body = document.getElementsByTagName('body')
const main = document.getElementsByTagName('main')
const parentTog = document.getElementById('parent-tog')
const btn1 = document.getElementById('btn1')
const _location = document.getElementById('location')
const circleBig = document.getElementById('circleBig')
const circle = document.getElementById('circle')
const parentTime = document.getElementById('parentTime')
const sec = document.getElementById('sec')
const pWead = document.getElementById('parentWeath')
const ctName = document.getElementById('cityName')
let _date = document.getElementById('_date')
let pTime = document.getElementById('pTime')
let _deg = document.getElementById('_deg')
let pMain = document.getElementById('pMain')
let _wind = document.getElementById('_wind')
let iLoc = document.querySelector('#btn1>i')
// let btn1 = document.getElementById('btn1')
let _iconWeather = document.querySelectorAll('#_iconWeather>div')
let flagTog = 0
parentTog.addEventListener('click', () => {
    if ((flagTog % 2 == 0)) {
        //one click//
        oneClick()
    } else {
        twoClick()
    }
})



function oneClick() {
    // togMoon.style.display = 'flex'
    togMoon.style.display = 'flex'
    tog.style.display = 'none'
    // body[0].style.background = 'rgb(51, 51, 51)'
    main[0].setAttribute('class', 'w-4/5 sm:w-3/5 md:w-3/5 lg:w-96 flex bg-[#181818] flex-col shadoww rounded-[40px]   -red-600 ')
    parentTog.setAttribute('class', 'w-6/12   rounded-[40px] btndark  -black bg-yellow-200 flex justify-end text-2xl py-1 cursor-pointer')
    parentTog.style.background = 'rgb(30 58 138)'
    btn1.setAttribute('class', 'w-3/12 btndark text-4xl flex justify-center items-center py-1 rounded-[15px] bg-[#121212] text-[#f2f3f7]')
    _location.style.color = '#fff'
    circleBig.setAttribute('class', 'w-[220px] md:w-1/2 lg:w-2/3  rounded-[50%] bg-dark-bg-color btndark relative')
    // circleBig.setAttribute('class' , 'w-[175px] py-9 sm:py-10  flex flex-wrap justify-center items-center btn2 bg-bg-color rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] *: *:-black')
    circle.style.background = '#121212'
    circle.style.boxShadow = '-2px -2px 4px rgba(255, 255, 255, 0.05),0 0 10px 10px rgba(255, 255, 255, 0.005),2px 2px 8px rgba(60, 60, 60, 0.1)'
    parentTime.setAttribute('class', 'w-1/2 flex flex-wrap h-full justify-center *:text-dark-f-color *:-blue-900')
    sec.setAttribute('class', 'w-11/12 mx-auto btndark flex pt-1 rounded-[20px] justify-center items-center ms-5 mt-1 mb-6  -red-600 *: *:-black')
    pWead.setAttribute('class', 'w-full flex flex-wrap justify-center *: *:-red-600  *:text-dark-f-color')
    flagTog++

}
function twoClick() {
    // tog.style.transform = 'translateX(0px)'
    tog.style.display = 'flex'
    togMoon.style.display = 'none'
    // body[0].style.background = '#f2f2f2'
    main[0].setAttribute('class', 'w-4/5 sm:w-3/5 md:w-3/5 lg:w-96 flex bg-bg-color flex-col shadoww rounded-[40px]   -red-600 ')
    parentTog.setAttribute('class', 'w-6/12   rounded-[40px] btn1 -black bg-yellow-200 flex justify-start text-2xl py-1 cursor-pointer')
    parentTog.style.background = 'rgb(254 240 138)'
    btn1.setAttribute('class', 'w-3/12 btn1 text-4xl flex justify-center items-center py-1 rounded-[15px] bg-[#f2f3f7] text-f-color')
    _location.style.color = 'rgb(34 34 34)'
    circleBig.setAttribute('class', 'w-[220px] md:w-1/2 lg:w-2/3  rounded-[50%] bg-bg-color btn1 relative')
    // circle.setAttribute('class' , 'w-[175px] py-9 sm:py-10  flex flex-wrap justify-center items-center btn2 bg-bg-color rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]')
    circle.style.background = '#f2f3f7'
    circle.style.boxShadow = '5px 5px 8px rgba(0, 0, 0, 0.07)'
    parentTime.setAttribute('class', 'w-1/2 flex flex-wrap h-full justify-center *:text-f-color *:-blue-900')
    sec.setAttribute('class', 'w-11/12 mx-auto btn1 flex pt-1 rounded-[20px] justify-center items-center ms-5 mt-1 mb-6  -red-600 *: *:-black')
    pWead.setAttribute('class', 'w-full flex flex-wrap justify-center *: *:-red-600  *:text-f-color')
    flagTog++

}


//end step toggle//

myApi()


function myApi() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.6892523&lon=51.3896004&appid=e404d97fbd072d8d4a444407c483b863')
        .then(res => {
            if (res.ok) return res.json()
            return Promise.reject(err)
        })
        .then(data => {
            console.log(data);
            console.log(data.weather[0].main);
            ctName.innerHTML = data.name
            _deg.innerHTML = Math.round((data.main.temp) - 273.15) + '°'
            _wind.innerHTML = data.wind.speed + '  km/h'
            // console.log(_iconWeather);
            switch(true){
                case data.weather[0].main == 'Sunny' || 'Clear' : _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear'; break;
                case data.weather[0].main == 'Clouds' && data.weather[0].description != 'few clouds' : _iconWeather[1].style.display = 'flex'; pMain.innerHTML = 'Clouds';break;
                case data.weather[0].description == 'few clouds' : _iconWeather[2].style.display = 'flex'; pMain.innerHTML = 'few clouds';break;
                case data.weather[0].main == 'Rain' || 'Drizzle' || 'Thunderstorm' : _iconWeather[3].style.display = 'flex';pMain.innerHTML = 'Rain';break;
                case data.weather[0].main == 'Snow' : _iconWeather[4].style.display = 'flex';pMain.innerHTML = 'Snow';break;
                default: _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear';

            }

        })
        .catch(err => console.log(err))
}
//end Tehran//
let _lat = 0
let _lon = 0
let flag2 = 0


btn1.addEventListener('click',()=>{
  
    if((flag2 % 2) == 0 ){
        iLoc.style.color = '#067CF8'
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            _lat = position.coords.latitude
            _lon = position.coords.longitude
    
            console.log(_lat);
            mydata2()
            flag2++
        })

    }else{
        // iLoc.style.color = '#222'
        myApi()
        flag2++
    }
})
   


  




function mydata2(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + _lat + '&lon=' + _lon + '&appid=e404d97fbd072d8d4a444407c483b863')
    .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(err)
    })
    .then(data => {
        console.log(data);
        console.log(data.weather[0].main);
        ctName.innerHTML = data.name
        _deg.innerHTML = Math.round((data.main.temp) - 273.15) + '°'
        _wind.innerHTML = data.wind.speed + '  km/h'
        // console.log(_iconWeather);
        switch(true){
            case data.weather[0].main == 'Sunny' || 'Clear' : _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear'; break;
            case data.weather[0].main == 'Clouds' && data.weather[0].description != 'few clouds' : _iconWeather[1].style.display = 'flex'; pMain.innerHTML = 'Clouds';break;
            case data.weather[0].description == 'few clouds' : _iconWeather[2].style.display = 'flex'; pMain.innerHTML = 'few clouds';break;
            case data.weather[0].main == 'Rain' || 'Drizzle' || 'Thunderstorm' : _iconWeather[3].style.display = 'flex';pMain.innerHTML = 'Rain';break;
            case data.weather[0].main == 'Snow' : _iconWeather[4].style.display = 'flex';pMain.innerHTML = 'Snow';break;
            default: _iconWeather[0].style.display = 'flex'; pMain.innerHTML = 'Clear';

        }

    })
    .catch(err => console.log(err))

}






// end Api //

let myMonth = ''
let myDay = ''

let myTime = new Date()
let numDay = myTime.getDate()
let numYear = myTime.getFullYear()




console.log(myTime);
// console.log(myTime.getDay());
switch (true) {
    case myTime.getDay() == 0: myDay = 'sunday'; break;
    case myTime.getDay() == 1: myDay = 'monday'; break;
    case myTime.getDay() == 2: myDay = 'tuesday'; break;
    case myTime.getDay() == 3: myDay = 'wednesday'; break;
    case myTime.getDay() == 4: myDay = 'thursday'; break;
    case myTime.getDay() == 5: myDay = 'friday'; break;
    case myTime.getDay() == 6: myDay = 'saturday'; break;
}
// console.log(myTime.getMonth());
switch (true) {
    case myTime.getMonth() == 0:
        myMonth = 'Jan'
        break;
    case myTime.getMonth() == 1:
        myMonth = 'Feb'
        break;
    case myTime.getMonth() == 2:
        myMonth = 'Mar'
        break;
    case myTime.getMonth() == 3:
        myMonth = 'Apr'
        break;
    case myTime.getMonth() == 4:
        myMonth = 'May'
        break;
    case myTime.getMonth() == 5:
        myMonth = 'June'
        break;
    case myTime.getMonth() == 6:
        myMonth = 'July'
        break;
    case myTime.getMonth() == 7:
        myMonth = 'Aug'
        break;
    case myTime.getMonth() == 8:
        myMonth = 'Sept'
        break;
    case myTime.getMonth() == 9:
        myMonth = 'Oct'
        break;
    case myTime.getMonth() == 10:
        myMonth = 'Nov'
        break;
    case myTime.getMonth() == 11:
        myMonth = 'Dec'
        break;

}
_date.innerHTML = myDay + ' , ' + numDay + ' ' + myMonth + ' , ' + numYear



// setInterval

function updateSeconds() {
    
    let currentDate = new Date();

    let seconds = currentDate.getSeconds();
    let numH = currentDate.getHours()
    let numM = currentDate.getMinutes()

    // Add leading zero if second is less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (numH < 10) {
        numH = "0" + numH;
    }
    if (numM < 10) {
        numM = "0" + numM;
    }

    // numS = seconds;
    pTime.innerHTML = numH + ' : ' + numM + ' : ' + seconds
}

// Call the updateSeconds function every second
setInterval(updateSeconds, 100);


