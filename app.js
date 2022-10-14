const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
            
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//Javacript for the scroll indicator bar
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });

  //Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  // DARK MOD

  function darkMode() {
    var colornav = document.getElementsByClassName('colornav')
    var element = document.body;
    element.classList.toggle("dark-mode");
    colornav.classList.toggle("colornav")
  }


  // EFFECT GLITCH





 