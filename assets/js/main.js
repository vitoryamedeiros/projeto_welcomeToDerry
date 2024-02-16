
const changeTheme = document.querySelector('.change-theme');
const divTheme = document.querySelector('.div-theme');
const navBar = document.querySelector('.navbar');
const pennywiseMobTheme = document.querySelector('.pennywise-white');
// const pennywiseDeskTheme = document.querySelector('.pennywise-desktop');
const sectionUmTheme = document.querySelector('.section-1');
const titleTheme = document.querySelector('.title');
const arrowDonwTheme = document.querySelector('.arrow-donw');
const sectionDoisTheme = document.querySelector('.section-2');
const jorgeTheme = document.querySelector('.jorge');

changeTheme.onclick = function(){
  this.classList.toggle('active')
  divTheme.classList.toggle('active')
  pennywiseMobTheme.classList.toggle('active')
  // pennywiseDeskTheme.classList.toggle('active')
  navBar.classList.toggle('active')
  sectionUmTheme.classList.toggle('active')
  titleTheme.classList.toggle('active')
  arrowDonwTheme.classList.toggle('active')
  sectionDoisTheme.classList.toggle('active')
  jorgeTheme.classList.toggle('active')
}