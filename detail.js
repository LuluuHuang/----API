const storedData = JSON.parse(localStorage.getItem('detailData'));
const category = localStorage.getItem('category');
const city = localStorage.getItem('city');

console.log(storedData);
console.log(category);
console.log(city);
let guide = document.querySelector('.guide');
let title = document.querySelector('.title');
let pic = document.querySelector('.pic');
let introduce = document.querySelector('.introduce');
let location = document.querySelector('.location');
guide.innerHTML =`<p>${category}<span>></span>${city}</p>`;
pic.innerHTML = `<img src="${storedData.Picture.PictureUrl1}" alt="">`;
if(category === "旅遊景點"){
    title.innerHTML =`<h1>${storedData.ScenicSpotName}</h1>`;
    introduce.innerHTML = `<h2>景點介紹</h2>
    <p>${storedData.Description}</p>`;
    location.innerHTML = `<h2>景點地址</h2>
    <p>${storedData.Address}</p>`;
}else if(category === "觀光活動"){
    title.innerHTML =`<h1>${storedData.ActivityName}</h1>`;
    introduce.innerHTML = `<h2>活動介紹</h2>
    <p>${storedData.Description}</p>`;
    location.innerHTML = `<h2>活動地點</h2>
    <p>${storedData.Address}</p>`;
}else if(category === "住宿推薦"){
    title.innerHTML =`<h1>${storedData.HotelName}</h1>`;
    introduce.innerHTML = `<h2>住宿介紹</h2>
    <p>${storedData.Description}</p>`;
    location.innerHTML = `<h2>住宿</h2>
    <p>${storedData.Address}</p>`;
}else if(category === "美食品嚐"){
    title.innerHTML =`<h1>${storedData.RestaurantName}</h1>`;
    introduce.innerHTML = `<h2>美食介紹</h2>
    <p>${storedData.Description}</p>`;
    location.innerHTML = `<h2>美食地址</h2>
    <p>${storedData.Address}</p>`;
}
// introduce.innerHTML = `<h2>景點介紹</h2>
// <p>${storedData.Description}</p>`;
// location.innerHTML = `<h2>活動地點</h2>
// <p>${storedData.Address}</p>`;
