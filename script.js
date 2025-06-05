const button=document.getElementById('get-weather');
const cityInput=document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime= document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');



 async function getWeather(city){
   const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=0ffd210b35f349dc947121301250506&q=${encodeURIComponent(city)}&aqi=yes`
);
return await promise.json();
} 

button.addEventListener('click',  async() =>{

    const value = cityInput.value;
   const result = await getWeather(value);
   cityName.innerText =`${result.location.name}, ${result.location.region}`;
   cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}`;
});
