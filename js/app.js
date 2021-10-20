/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



const sections=Array.from(document.querySelectorAll('section'));
let navbarList=document.getElementById('navbar__list');
let fragment=document.createDocumentFragment();
/**
 * Make navbar dynamicly with js
 * 1.get sections in array like above
 * 2.create li tag to put in her the name and anchor of section
 * 3.create a tag as anchor and put it in li tag
 * 4.put the li in fragment to increase the pereformance
 * last out forEach put the fragment in the ul tag
 */
sections.forEach(function(section){
  let list=document.createElement('li');
    list.className=('navbar__menu');
  let linkToSection=document.createElement('a');
  list.onclick=()=>{
  const y = section.getBoundingClientRect().top + window.pageYOffset -10;
   window.scrollTo({top: y, behavior: 'smooth'});}
      linkToSection.textContent=section.dataset.nav;
      linkToSection.className=('menu__link');
      list.appendChild(linkToSection);
    fragment.appendChild(list);
});
navbarList.appendChild(fragment);

const li=Array.from(document.querySelectorAll('li'));
/**
 * Make active class and active nav
 * 1.make function that return boolean if the section is display in the current window or not
 * 2.make function while scroll do:
 *  use function above to determine if section is active or not
 *  then add or remove the class 'your-active-clase'
 *  and get the index of section to make active nav
 */

let isInViewport = function(elem) {
  let distance = elem.getBoundingClientRect();
    if(window.outerWidth<=500){    
     return distance.top >= -500&&
      distance.bottom < 1200+(20*window.outerHeight/100)
    }
    else{    
     return distance.top>=-50&&
      distance.bottom<(window.innerHeight||document.documentElement.clientHeight)
    };
  };
  
  
  window.addEventListener('scroll', function() {
  sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('your-active-class');
        li[sections.indexOf(section)].classList.add('activ-nav')
      }
      else{
        section.classList.remove('your-active-class');     
        li[sections.indexOf(section)].classList.remove('activ-nav')

      }
      
  });
  }, false);
  



