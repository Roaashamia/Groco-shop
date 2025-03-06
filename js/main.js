// login page
let btnserch=document.querySelector('#search-btn');
let btncart=document.querySelector('#cart-btn');
let btnLog=document.querySelector('#login-btn');
let btnmenu=document.querySelector('#menu-btn');
let searchPage=document.querySelector('.search-page');
let cartPage=document.querySelector('.cart-page');
let loginPage=document.querySelector('.login-page');
let menuPage=document.querySelector('.menu-page');
let links=document.querySelectorAll('.nav-center a');
let contentReview=document.querySelector('.review .content');
let contentReviewbox=document.querySelectorAll('.review .content .box');

console.log(contentReviewbox);



btnmenu.addEventListener('click',(e)=>{
    addshow(menuPage);
    removeshow(searchPage);
    removeshow(cartPage);
    removeshow(loginPage);

})
btnserch.addEventListener('click',(e)=>{
    addshow(searchPage);
    removeshow(menuPage);
    removeshow(cartPage);
    removeshow(loginPage);
});
btncart.addEventListener('click',(e)=>{
    addshow(cartPage);
    removeshow(searchPage);
    removeshow(menuPage);
    removeshow(loginPage);
});
btnLog.addEventListener('click',(e)=>{
    addshow(loginPage);
    removeshow(searchPage);
    removeshow(cartPage);
    removeshow(menuPage);
});
function addshow(ele){
    ele.classList.toggle('show');
}
function removeshow(ele){
    ele.classList.remove('show');

  }
  
  //remove products
  let trashs=document.querySelectorAll('.fa-trash');
  trashs.forEach(trash=>{
    trash.addEventListener('click',(e)=>{

      e.target.parentElement.remove();
    })
  });


//load 
let load=document.querySelector('.overlay');
console.log(load);
setTimeout(function(){
load.classList.toggle("hide");
},50)