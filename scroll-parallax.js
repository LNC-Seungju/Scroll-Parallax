const section = document.getElementsByClassName('section');
const section1 = document.getElementsByClassName('section1');
const section2 = document.getElementsByClassName('section2');
const section2Offtop = section[0].offsetTop;
const section1Offtop = section1[0].offsetTop;
const sectionOfftop =  section[0].offsetTop;
const box1 = document.getElementsByClassName('box1');
const box2 = document.getElementsByClassName('box2');
const box3 = document.getElementsByClassName('box3');
const moon = document.getElementsByClassName('moon');
const sun = document.getElementsByClassName('sun');

window.addEventListener('scroll', () => {
  moon[0].style.top = 100 - (scrollY - section1Offtop)/20 + '%';
  moon[0].style.left = (scrollY - section1Offtop)/20 + '%';

  console.log(scrollY, section2Offtop, scrollY - section2Offtop, (scrollY - section2Offtop)/30)

  sun[0].style.top = 0 - (scrollY - section2Offtop)/30 +'%';
  sun[0].style.right = 70 + (scrollY - section2Offtop)/30 + '%';

  box1[0].style.top = 50 + (scrollY - sectionOfftop)/30 + '%';
  box2[0].style.top = 50 + (scrollY - sectionOfftop)/50 + '%';
  box3[0].style.top = 50 + (scrollY - sectionOfftop)/70 + '%';  


})