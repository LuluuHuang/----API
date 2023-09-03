import { cityData } from './city.js';
import { categoryData } from './category.js';

let section = document.querySelector('.section');
let title = document.querySelector('.title');

//宣告banner的元素
let category = document.querySelector('.category');
let categorySelect;
let area = document.querySelector('.area');
let areaSelect;
let submit = document.querySelector('.submit');
let categoryMore = localStorage.getItem('categoryMore');
let keyWord = document.querySelector('.keyWord');
let keyWordInput;

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

for(let i = 0; i < category.options.length; i++){
    if(category.options[i].value === categoryMore){
        category.options[i].selected = true;
    }
}

submit.addEventListener('click',submitForm);
function submitForm(){
    console.log(category.value);
    if(category.value !== '' && area.value !== ''&& keyWord.value ==''){
        categorySelect = category.value;
        areaSelect = area.value;
        let result = [categorySelect,areaSelect];
        window.open("result.html?q=" + encodeURIComponent(result), "_blank");
    }else if(category.value !== '' && keyWord.value !=='' && area.value === 'all'){
        keyWordInput = keyWord.value;
        categorySelect = category.value;
        window.open(`result.html?q=${categorySelect}%2Call%2C${keyWordInput}` , "_blank");
    }
}

let findCategory;
function findCategoryName(engCategory){
    findCategory = categoryData.find(category=>category.engCategory === engCategory);
}
findCategoryName(categoryMore);

console.log(categoryMore);
nextPage(0);
function nextPage(skipPage){
    section.innerHTML='';
    fetch(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${categoryMore}?%24top=12&%24skip=${skipPage}&%24format=JSON`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((e) => {
            if(categoryMore == 'Restaurant'){
                section.innerHTML +=
            `
                <div class="col-lg-3 col-md-5 col-10 m-5 m-md-3 content p-0">
                <a href="./detail.html?q=Restaurant%2C${e.RestaurantID}%2Call" target="_blank">
                <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.RestaurantName}</p>
                        <p class="time"><img src="./img/time.png"/>${e.OpenTime}</p>
                        <p class="phone"><img src="./img/phone.png"/>${e.Phone.replace('886-', '0')}</p>
                        <p class="address"><img src="./img/address.png"/>${e.Address}</p>
                    </div>
                    </a>
                </div>
            `
            }else if(categoryMore == 'Hotel'){
                section.innerHTML +=
            `
                <div class="col-lg-3 col-md-5 col-10 m-5 m-md-3 content p-0">
                <a href="./detail.html?q=Hotel%2C${e.HotelID}%2Call" target="_blank">
                <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.HotelName}</p>
                        <p class="phone"><img src="./img/phone.png"/>${e.Phone.replace('886-', '0')}</p>
                        <p class="address"><img src="./img/address.png"/>${e.Address}</p>
                    </div>
                    </a>
                </div>
            `
            }else if(categoryMore == 'Activity'){
                section.innerHTML +=
            `
                <div class="col-lg-3 col-md-5 col-10 m-5 m-md-3 content p-0">
                <a href="./detail.html?q=Activity%2C${e.ActivityID}%2Call" target="_blank">
                <img class="img" src="${e.Picture.PictureUrl1}" alt="">
                    <div class="text">
                        <p class="name">${e.ActivityName}</p>
                        <p class="address"><img src="./img/address.png"/>${e.Address}</p>
                    </div>
                    </a>
                </div>
            `
            }
        });
    })
}