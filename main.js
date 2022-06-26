


/* Nav 버튼이 모바일 사이즈일시에만 나오고 클릭을 했을때만 메뉴 보여주기*/
const navBtn = document.querySelector('.header_nav_btn');

navBtn.addEventListener('click', function(){

  const navMenu = document.querySelector('.header_nav_menu');
  navMenu.classList.toggle('active');

})



/* Nav 메뉴 클릭하면 해당 섹션에 효과 & 스크롤링 */
const aboutBtn = document.querySelector('.header_nav_menu_about');
const navMenu = document.querySelector('.header_nav_menu');



aboutBtn.addEventListener('click', ()=>{
  const me = document.querySelector('.main_me_text');
  me.classList.toggle('active');
});

navMenu.addEventListener('click', (e)=>{
  console.log(e.target);
  const target = e.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  console.log(e.target.dataset.link);
  console.log(scrollTo);
  console.log(link);
  scrollTo.scrollIntoView();
})