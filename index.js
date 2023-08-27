
import { cityData } from './city.js';
import { categoryData } from './category.js';


let category = document.querySelector('.category');
let categorySelect;
let area = document.querySelector('.area');
let areaSelect;
let submit = document.querySelector('.submit');

let moreActivityBtn = document.querySelector('.moreActivityBtn');
let moreRestaurantBtn = document.querySelector('.moreRestaurantBtn');
let moreHotelBtn = document.querySelector('.moreHotelBtn');

//import city.js資料渲染option
cityData.forEach((e)=>{
    console.log(e.Name);
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

moreActivityBtn.addEventListener('click',function(){
    localStorage.setItem('categoryMore', 'Activity');
});
moreRestaurantBtn.addEventListener('click',function(){
    localStorage.setItem('categoryMore', 'Restaurant');
});
moreHotelBtn.addEventListener('click',function(){
    localStorage.setItem('categoryMore', 'Hotel');
});
