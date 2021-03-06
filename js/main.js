const aboutSection = document.querySelector('.about-section');
const tabsContainer = document.querySelector('.about-tabs');

tabsContainer.addEventListener('click',(event) => {
  if (event.target.classList.contains('tab-items')) {
    const target = event.target.getAttribute('data-target');
    // console.log(target);
    tabsContainer.querySelector(".active").classList.remove('outer-shadow','active');
    event.target.classList.add("active","outer-shadow");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});