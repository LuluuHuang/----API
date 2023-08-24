
import { cityData } from './city.js';
console.log(cityData);

let category = document.querySelector('.category');
let categorySelect;
let area = document.querySelector('.area');
let areaSelect;
let submit = document.querySelector('.submit');

cityData.forEach((e)=>{
    console.log(e.Name);
    area.innerHTML+=`
    <option value="${e.engName}">${e.Name}</option>
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