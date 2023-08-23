import { cityData } from './city.js';
const searchParams = new URLSearchParams(window.location.search);
const searchResult = searchParams.get("q").split(",");
let category = searchResult[0];
let city = searchResult[1];
let section = document.querySelector('.section');
let title = document.querySelector('.title');
function findName(engName){
    const findCity = cityData.find(city => city.engName === engName);
    title.innerHTML = `<p>${findCity.Name}</p>`;
}
findName(city);
if(category == 'ScenicSpot'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${city}?%24top=12&%24format=JSON`)
        .then(res=>res.json())
        .then(data=>{
            data.forEach((e,i) => {
                section.innerHTML +=
                `
                    <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                        <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                        <div class="text">
                            <p class="name">${e.ScenicSpotName}</p>
                            <p class="phone">${e.Phone}</p>
                        </div>
                    </div>
                `
            });
        })
}else if(category == 'Restaurant'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${city}?%24top=12&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((e,i) => {
            section.innerHTML +=
                `
                    <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                        <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                        <div class="text">
                            <p class="name">${e.RestaurantName}</p>
                            <p class="time">${e.OpenTime}</p>
                        </div>
                    </div>
                `
        });
    })
}else if(category == 'Hotel'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${city}?%24top=12&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((e,i) => {
            section.innerHTML +=
                `
                    <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                        <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                        <div class="text">
                            <p class="name">${e.HotelName}</p>
                            <p class="address">${e.Address}</p>
                        </div>
                    </div>
                `
        });
    })
}else if(category == 'Activity'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${city}?%24top=12&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((e,i) => {
            section.innerHTML +=
                `
                    <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                        <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                        <div class="text">
                            <p class="name">${e.ActivityName}</p>
                            <p class="address">${e.Address}</p>
                        </div>
                    </div>
                `
        });
    })
}