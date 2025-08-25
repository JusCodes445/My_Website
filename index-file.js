const menu = document.querySelector('.menu');
const addNav = document.querySelector('.addNav');
const closeNav = document.querySelector('.closeNav');
const blackBox = document.querySelector('.blackBox');
const addPopup = document.querySelectorAll('.addPopup');
const closePopup = document.querySelector('.closePopup');


addPopup.forEach(link => {
  link.onclick = (e) => {
    e.preventDefault()
    blackBox.classList.add('open');
  };
});

closePopup.onclick = () => {
  blackBox.classList.remove('open');
};


addNav.onclick = function(){
  menu.classList.add('open');
  addNav.classList.add('open');
};
closeNav.onclick = function(){
  menu.classList.remove('open');
  addNav.classList.remove('open');
};
closePopup.onclick = function(){
  blackBox.classList.remove('open');
};

const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });