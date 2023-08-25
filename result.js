import { cityData } from './city.js';
import { categoryData } from './category.js';
//從網址抓出搜尋項目
const searchParams = new URLSearchParams(window.location.search);
const searchResult = searchParams.get("q").split(",");
let urlCategory = searchResult[0];
let urlCity = searchResult[1];
let section = document.querySelector('.section');
let title = document.querySelector('.title');

//宣告banner的元素
let category = document.querySelector('.category');
let categorySelect;
let area = document.querySelector('.area');
let areaSelect;
let submit = document.querySelector('.submit');

//製作頁數
let page = document.querySelector('.page');
let pageAll = [0,1,2,3,4,5];
pageAll.forEach((p)=>{
    page.innerHTML+=`
        <p class="pageNumber" >&emsp;<span>${p+1}</span>&emsp;|</p>
    `
})
let pageNumber = document.querySelectorAll('.pageNumber');
pageNumber.forEach((e,i)=>{
    e.addEventListener('click',function(){
        let skipPage = i*12;
        nextPage(skipPage);
    });
})

//import city.js資料渲染option
cityData.forEach((e)=>{
    area.innerHTML+=`
    <option value="${e.engName}">${e.Name}</option>
    `
})
//import category.js資料渲染option
categoryData.forEach((e)=>{
    category.innerHTML+=`
    <option value="${e.engCategory}">${e.Category}</option>
    `
})
//讓搜尋結果的option默認前一頁搜尋項目
for(let i = 0; i < area.options.length; i++){
    if(area.options[i].value === urlCity){
        area.options[i].selected = true;
    }
}
for(let i = 0; i < category.options.length; i++){
    if(category.options[i].value === urlCategory){
        category.options[i].selected = true;
    }
}

submit.addEventListener('click',submitForm);
function submitForm(){
    console.log(category.value);
    if(category.value !== '' && area.value !== ''){
        categorySelect = category.value;
        areaSelect = area.value;
        let result = [categorySelect,areaSelect];
        window.open("result.html?q=" + encodeURIComponent(result), "_blank");
    }else{
        alert('請選擇類別');
    }
}

//從city.js找搜尋城市的中文，渲染到title
let findCity;
let findCategory;
function findCityName(engName){
    findCity = cityData.find(city => city.engName === engName);
    title.innerHTML = `<p>${findCity.Name}</p>`;
}
findCityName(urlCity);
function findCategoryName(engCategory){
    findCategory = categoryData.find(category=>category.engCategory === engCategory);
}
findCategoryName(urlCategory);

nextPage(0);//先叫出第一頁
function nextPage(skipPage){
    if(urlCity === 'all'){
        section.innerHTML='';
            fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${urlCategory}?%24top=12&%24skip=${skipPage}&%24format=JSON`)
                .then(res=>res.json())
                .then(data=>{
                    data.forEach((e,i) => {
                        if(urlCategory == 'ScenicSpot'){
                            section.innerHTML +=
                        `
                            <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                                <a href="./detail.html" target="_blank">
                                    <img class="img" src="${e.Picture.PictureUrl1}" alt="圖片未提供">
                                    <div class="text">
                                        <p class="name">${e.ScenicSpotName}${i}</p>
                                        <p class="phone">${e.Phone}</p>
                                    </div>
                                </a>
                            </div>
                        `
                        }else if(urlCategory == 'Restaurant'){
                            section.innerHTML +=
                        `
                            <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                            <a href="./detail.html" target="_blank">
                                <img class="img" src="${e.Picture.PictureUrl1}" alt="圖片未提供">
                                <div class="text">
                                    <p class="name">${e.RestaurantName}</p>
                                    <p class="time">${e.OpenTime}</p>
                                </div>
                                </a>
                            </div>
                        `
                        }else if(urlCategory == 'Hotel'){
                            section.innerHTML +=
                        `
                            <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                            <a href="./detail.html" target="_blank">
                                <img class="img" src="${e.Picture.PictureUrl1}" alt="圖片未提供">
                                <div class="text">
                                    <p class="name">${e.HotelName}</p>
                                    <p class="address">${e.Address}</p>
                                </div>
                                </a>
                            </div>
                        `
                        }else if(urlCategory == 'Activity'){
                            section.innerHTML +=
                        `
                            <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                            <a href="./detail.html" target="_blank">
                                <img class="img" src="${e.Picture.PictureUrl1}" alt="圖片未提供">
                                <div class="text">
                                    <p class="name">${e.ActivityName}</p>
                                    <p class="address">${e.Address}</p>
                                </div>
                                </a>
                            </div>
                        `
                        }
                        let content = document.querySelectorAll('.content');
                        content.forEach((e,i)=>{
                            e.addEventListener('click',function(){
                                localStorage.setItem('detailData', JSON.stringify(data[i]));
                                localStorage.setItem('category', findCategory.Category);
                                localStorage.setItem('city', findCity.Name);
                            })
                        })
                    })})
    }else{
    section.innerHTML='';
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${urlCategory}/${urlCity}?%24top=12&%24skip=${skipPage}&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((e) => {
            if(urlCategory == 'ScenicSpot'){
                section.innerHTML +=
            `
                <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                <a href="./detail.html" target="_blank">
                    <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.ScenicSpotName}</p>
                        <p class="phone">${e.Phone}</p>
                    </div>
                    </a>
                </div>
            `
            }else if(urlCategory == 'Restaurant'){
                section.innerHTML +=
            `
                <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                <a href="./detail.html" target="_blank">
                    <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.RestaurantName}</p>
                        <p class="time">${e.OpenTime}</p>
                    </div>
                    </a>
                </div>
            `
            }else if(urlCategory == 'Hotel'){
                section.innerHTML +=
            `
                <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                <a href="./detail.html" target="_blank">
                    <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.HotelName}</p>
                        <p class="address">${e.Address}</p>
                    </div>
                    </a>
                </div>
            `
            }else if(urlCategory == 'Activity'){
                section.innerHTML +=
            `
                <div class="col-md-3 col-10 m-5 m-md-1 content p-0">
                <a href="./detail.html" target="_blank">
                    <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.ActivityName}</p>
                        <p class="address">${e.Address}</p>
                    </div>
                    </a>
                </div>
            `
            }
            let content = document.querySelectorAll('.content');
            content.forEach((e,i)=>{
                e.addEventListener('click',function(){
                    localStorage.setItem('detailData', JSON.stringify(data[i]));
                    localStorage.setItem('category', findCategory.Category);
                    localStorage.setItem('city', findCity.Name);
                })
            })
        });
    })
}}