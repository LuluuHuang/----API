console.log(window.location.search);
const searchParams = new URLSearchParams(window.location.search);
const searchResult = searchParams.get("q").split(",");
console.log(searchResult);
let category = searchResult[0];
let city = searchResult[1];
console.log(city);
console.log(category);
let section = document.querySelector('.section');
let title = document.querySelector('.title');
title.innerHTML = `<p>${city}</p>`;
if(category == 'ScenicSpot'){
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${city}?%24top=10&%24format=JSON`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
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
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${city}?%24top=10&%24format=JSON`)
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
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${city}?%24top=10&%24format=JSON`)
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
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${city}?%24top=10&%24format=JSON`)
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