
// fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: new URLSearchParams({
//         grant_type: 'client_credentials',
//         client_id: 'yuruh03-966955f8-265d-49c8',
//         client_secret: '5b73c5b7-8715-420f-90d8-d26fbfac154b'
//     })
// })
// .then(res=>res.json())
// .then(res=>{
//     console.log(res);
//     let token = res.access_token;
//     console.log(token);
//     fetch('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=30&%24format=JSON',{
//         method: 'GET', 
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(res=>res.json())
//     .then(res=>console.log(res))
// })
// let section_activity = document.querySelector('.section_activity');

// fetch('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taipei?%24top=3&%24format=JSON')
// .then(res=>res.json())
// .then((res)=>res.forEach(e => {
//     console.log(e.ScenicSpotName);
//     section_activity.innerHTML+=
//     `
//     <div class="col-md-3 col-10 m-5 m-md-0 content_activity">
//         <img class="img_activity" src="${e.Picture.PictureUrl1}" alt="">
//         <div class="text">
//             <p class="name">${e.ScenicSpotName}</p>
//             <p class="location">${e.City}</p>
//             <p class="time">2023/8/10~2023/9/10</p>
//         </div>
//     </div>
//     `
// }))

let category = document.querySelector('.category');
let categorySelect;
let area = document.querySelector('.area');
let areaSelect;
let submit = document.querySelector('.submit');

submit.addEventListener('click',submitForm);
function submitForm(){
    console.log(category.value);
    if(category.value !== '' && area.value !== ''){
        categorySelect = category.value;
        area = area.value;
        let result = [categorySelect,area]
        window.open("result.html?q=" + encodeURIComponent(result), "_blank");
    }else{
        alert('請選擇類別');
    }
}