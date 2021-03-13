const aboutSection = document.querySelector(".about-section"),
  tabsContainer = document.querySelector(".about-tabs");

tabsContainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")) {
      const target =  e.target.getAttribute("data-target");
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      e.target.classList.add("outer-shadow", "active");
    }
})
