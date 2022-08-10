


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    loop:true,
    navigation: true,
    navigationText: ["", ""],
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: true,
    mouseDrag: true,
    singleItem: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
     0:{
      items: 1,
     }
    }
     
  });

});



let Solutions = document.querySelector(".solutions")
let Resources = document.querySelector(".resources")
let menu = document.querySelector(".menu")
const nav = document.querySelector("nav")



let SolutionNavDropDown = document.querySelector(".Solution-navDropDown")
let resourcesNavDropDown = document.querySelector(".resources-navDropDown");

// the childNth(1) of SolutionNavDropDown
let sol_Res_Firstdiv = document.querySelectorAll(".firstdiv")
// thechildNth(2) of SolutionNavDropDown
let sol_REs_Secondiv = document.querySelectorAll(".secondiv")
// hamburger Menu
let hamburgerMenu =document.querySelector(".hamburgerMenu");

// FOr hideing the  dropdown on click of element

hamburgerMenu.addEventListener("click", function () {
  // adding disply to the flex using class
   menu.classList.toggle("displayFlex") 
   nav.classList.toggle("navToggle")

  //  using the parent to get the child
  let iconHamurber = hamburgerMenu.childNodes[0];
  
  // checking for hamburber

  if (iconHamurber.classList.contains("fa-bars")) {
    iconHamurber.classList.remove("fa-bars")
    iconHamurber.classList.add("fa-xmark")
  } else {
    iconHamurber.classList.remove("fa-xmark")
    iconHamurber.classList.add("fa-bars")
  }

})


document.onresize = function(){
  if (innerWidth > 769 && nav.classList.contains("navToggle") ) {
   nav.classList.remove("navToggle")
}
}


Solutions.addEventListener("click",function () {
    if (SolutionNavDropDown.classList.contains("hideE")) {
       SolutionNavDropDown.classList.remove("hideE")
    } else {
       SolutionNavDropDown.classList.add("hideE")
    }
})

Solutions.addEventListener("mouseenter", function () {
    if (!Solutions.classList.contains("hideE")) {
        SolutionNavDropDown.classList.remove("hideE")
         resourcesNavDropDown.classList.add("hideE")
    }else{
        SolutionNavDropDown.classList.add("hideE")
    }
    })



Resources.addEventListener("click",function () {
    resourcesNavDropDown.classList.toggle("hideE")
})


   //  add the class of hide  and remove for 

Resources.addEventListener("mouseenter",function () {
    if (!Resources.classList.contains("hideE")) {
        resourcesNavDropDown.classList.remove("hideE")
        SolutionNavDropDown.classList.add("hideE")
    }else{
        resourcesNavDropDown.classList.add("hideE")
    }
})

   //  remove the class of hide on mouseleave of resourcesNavDropDown
resourcesNavDropDown.addEventListener("mouseleave",() => {resourcesNavDropDown.classList.add("hideE")})
  
  //  remove the class of hide on mouseleave of SolutionNavDropDown
SolutionNavDropDown.addEventListener("mouseleave",() => {SolutionNavDropDown.classList.add("hideE")})



//  remove the nav on click of the document for SolutionNavDropDown
document.addEventListener("click", function (e){
     if (e.target.parentNode.className !== "solutions" &&
      !SolutionNavDropDown.classList.contains("hideE")) { 
        SolutionNavDropDown.classList.add("hideE")
     }
  })
  //  remove the nav on click of the document for resourcesNavDropDown
document.addEventListener("click", function (e){
     if (e.target.parentNode.className !== "resources" &&
      !resourcesNavDropDown.classList.contains("hideE")){ 
        resourcesNavDropDown.classList.add("hideE")
     }
  })


// January, February, March, April, May, June, July, August, September, October, November, and December

//  twetter text code
//  reducing twet word to 10 word per line
let twitterText = document.querySelector(".twitterText").innerText.split(" ") 
let twitterTex = document.querySelector(".twitterText")
let wordBreaks = [] 
  twitterText.forEach((item, index,array) => {
      if ( array.length > 11) {
        let fristTen = twitterText.splice(0,10); 
        wordBreaks.push(...fristTen ,"<br/>");
      }
  });
 twitterTex.innerHTML = wordBreaks.concat(twitterText).join(" ");

let sections = document.querySelectorAll(".sections");



let sectionsObserver = new IntersectionObserver(function (entr,observer) {
  const [entry] = entr;
  if (!entry.isIntersecting) return
  entry.target.classList.remove('sec-hide')
  
  observer.unobserve(entry.target)
}, {
  root: null,
  threshold: 0.1,
})

sections.forEach(ele => {
  sectionsObserver.observe(ele)
  ele.classList.add("sec-hide")
});
// sectionsObserver.observe(sections)

let headerChild = document.querySelector("header").children
headerChild = Array.from(headerChild)


window.onload = function () {
  headerChild.forEach(element => {
   if (element.classList.contains("sec-hide")) {
      element.classList.remove("sec-hide")
       document.body.scrollTo({top: 0, behavior: "smooth" }); 

   }
});
}


 
function scrollToFun() {
 document.scrollTo({top: 0, behavior: "smooth" }); 
 location.reload()
}

window.addEventListener('resize',scrollToFun())
window.addEventListener('reload',scrollToFun())


