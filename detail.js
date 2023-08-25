const storedData = JSON.parse(localStorage.getItem('detailData'));
const category = localStorage.getItem('category');
const city = localStorage.getItem('city');

console.log(storedData);
console.log(category);
let guide = document.querySelector('.guide');
let title = document.querySelector('.title');
let pic = document.querySelector('.pic');
let introduce = document.querySelector('.introduce');
let location = document.querySelector('.location');
guide.innerHTML =`<p>${category}<span>></span>${city}<span>></span>${city}</p>`;
title.innerHTML =`<h1>${storedData.ScenicSpotName}</h1>`;
pic.innerHTML = `<img src="${storedData.Picture.PictureUrl1}" alt="">`;
introduce.innerHTML = `<h2>景點介紹</h2>
<p>${storedData.DescriptionDetail}</p>`;
location.innerHTML = `<h2>活動地點</h2>
<p>${storedData.Address}</p>`;
