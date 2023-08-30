const searchParams = new URLSearchParams(window.location.search);
const searchResult = searchParams.get("q").split(",");
import { cityData } from "./city.js";
import { categoryData } from "./category.js";

console.log(searchResult);
let category = searchResult[0];
let id = searchResult[1];
let city = searchResult[2];
let chinessCity;
let chinessCategory;

let guide = document.querySelector('.guide');
let title = document.querySelector('.title');
let pic = document.querySelector('.pic');
let introduce = document.querySelector('.introduce');
let location = document.querySelector('.location');

function findCityName(engCity){
    chinessCity = cityData.find((e)=>e.engName === engCity).Name;
    console.log(chinessCity);
}
findCityName(city);
function findCategoryName(engCategory){
    chinessCategory = categoryData.find((e)=>e.engCategory === engCategory).Category;
    console.log(chinessCategory);
}
findCategoryName(category);

guide.innerHTML =`<p>${chinessCategory}<span>&emsp;>&emsp;</span>${chinessCity}</p>`;

if(city === 'all'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${category}?%24filter=contains%28${category}ID%2C%27${id}%27%29&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>data.forEach(e => {
        console.log(e.Address);
        pic.innerHTML = `<img src="${e.Picture.PictureUrl1}" alt="">`;
        if(category === 'ScenicSpot'){
            title.innerHTML =`<h1>${e.ScenicSpotName}</h1>`;
            introduce.innerHTML = `<h2>景點介紹</h2>
            <p>${e.DescriptionDetail}</p>`;
            location.innerHTML = `<h2>開放時間</h2>
            <p>${e.OpenTime}</p>`;
        }else if(category === 'Activity'){
            title.innerHTML =`<h1>${e.ActivityName}</h1>`;
            introduce.innerHTML = `<h2>活動介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>活動地點</h2>
            <p>${e.Address}</p>`;
        }else if(category === 'Hotel'){
            title.innerHTML =`<h1>${e.HotelName}</h1>`;
            introduce.innerHTML = `<h2>住宿介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>住宿位置</h2>
            <p>${e.Address}</p>`;
        }else if(category === 'Restaurant'){
            title.innerHTML =`<h1>${e.RestaurantName}</h1>`;
            introduce.innerHTML = `<h2>美食介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>美食地址</h2>
            <p>${e.Address}</p>`;
        }
    }))
}else{
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${category}/${city}?%24filter=contains%28${category}ID%2C%27${id}%27%29&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>data.forEach(e => {
        pic.innerHTML = `<img src="${e.Picture.PictureUrl1}" alt="">`;
        if(category === 'ScenicSpot'){
            title.innerHTML =`<h1>${e.ScenicSpotName}</h1>`;
            introduce.innerHTML = `<h2>景點介紹</h2>
            <p>${e.DescriptionDetail}</p>`;
            location.innerHTML = `<h2>開放時間</h2>
            <p>${e.OpenTime}</p>`;
        }else if(category === 'Activity'){
            title.innerHTML =`<h1>${e.ActivityName}</h1>`;
            introduce.innerHTML = `<h2>活動介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>活動地點</h2>
            <p>${e.Address}</p>`;
        }else if(category === 'Hotel'){
            title.innerHTML =`<h1>${e.HotelName}</h1>`;
            introduce.innerHTML = `<h2>住宿介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>住宿位置</h2>
            <p>${e.Address}</p>`;
        }else if(category === 'Restaurant'){
            title.innerHTML =`<h1>${e.RestaurantName}</h1>`;
            introduce.innerHTML = `<h2>美食介紹</h2>
            <p>${e.Description}</p>`;
            location.innerHTML = `<h2>美食地址</h2>
            <p>${e.Address}</p>`;
        }
    }))
}