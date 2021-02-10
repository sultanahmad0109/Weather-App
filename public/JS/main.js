const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const temp = document.getElementById('temp');
const city_name = document.getElementById('city_name');
const datahide = document.querySelector('.middle_layer');
const getInfo = async (event) => {
    event.preventDefault();
    const cityVal = cityname.value;
    if (cityVal === "") {
        city_name.innerText = "Please write the city name";
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=460cc3774d7c3835c0fec08310436b7e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = `${arrData[0].main.temp}`;
            tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                    '<i class="fas fa-sun" style="color: #eccc68"></i>';
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud" style="color: #0097e6"></i>';
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>';
            } else {
                temp_status.innerHTML =
                    '<i class="fas fa-sun" style="color: darkgoldenrod"></i>';
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = "Wrong city name";
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);