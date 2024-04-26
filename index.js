import { cityData } from "./city.js";
import { categoryData } from "./category.js";

let category = document.querySelector(".category");
let categorySelect;
let area = document.querySelector(".area");
let areaSelect;
let submit = document.querySelector(".submit");
let keyWord = document.querySelector(".keyWord");
let keyWordInput;

let moreActivityBtn = document.querySelector(".moreActivityBtn");
let moreRestaurantBtn = document.querySelector(".moreRestaurantBtn");
let moreHotelBtn = document.querySelector(".moreHotelBtn");

//import city.js資料渲染option
cityData.forEach((e) => {
    console.log(e.Name);
    area.innerHTML += `
        <option value="${e.engName}">${e.Name}</option>
        `;
});
//import category.js資料渲染option
categoryData.forEach((e) => {
    category.innerHTML += `
        <option value="${e.engCategory}">${e.Category}</option>
        `;
});
submit.addEventListener("click", function submitForm() {
    console.log("送出");
    if (keyWord.value !== "" && category.value === "") {
        console.log(123);
        alert("請選擇種類");
        return;
    }
    if (category.value !== "" && area.value !== "" && keyWord.value === "") {
        categorySelect = category.value;
        areaSelect = area.value;
        let result = [categorySelect, areaSelect];
        window.open("result.html?q=" + encodeURIComponent(result), "_blank");
    } else if (
        category.value !== "" &&
        keyWord.value !== "" &&
        area.value === "all"
    ) {
        keyWordInput = keyWord.value;
        categorySelect = category.value;
        window.open(
        `result.html?q=${categorySelect}%2Call%2C${keyWordInput}`,
        "_blank"
        );
    }
});

function moreCategoryBtn(btnName, category) {
    btnName.addEventListener("click", function () {
        window.open(`more.html`, "_blank");
        localStorage.setItem("categoryMore", category);
    });
}
moreCategoryBtn(moreActivityBtn, "Activity");
moreCategoryBtn(moreRestaurantBtn, "Restaurant");
moreCategoryBtn(moreHotelBtn, "Hotel");