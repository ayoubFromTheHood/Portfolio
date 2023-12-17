let text = document.querySelector('.text')
const textspan = document.querySelector(".text .span")
let leaf = document.getElementById('leaf')

let hill1 = document.getElementById('hill1')

let hill4 = document.getElementById('hill4')

let hill5 = document.getElementById('hill5')

let sun = document.getElementById('hill5')

let back = document.getElementById('back')

const logo = document.querySelector(".logo") 
const card = document.querySelector(".card__inner")

const card2 = document.querySelector(".card2__inner")

const card4 = document.querySelector(".card4__inner")
const header = document.querySelector(".header") 
const skies = document.querySelector(".skies") 
const menupic = document.querySelector(".menu-btn") 
const skills = document.getElementById("skills") 
const download = document.getElementById('downloadcv')
const downloaddiv = document.querySelector("downloadcv")
const cartesmobile = document.querySelector("cartesmobile") 
const navigation = document.querySelector(".navigation")
let isMoved = false ;
const controller = document.getElementById("controller") 
const controllerdiv = document.querySelector("musiccontrol") 
const controllerdivhover = document.querySelector(".musiccontrol:hover")
let isPlayed = false ;
const parallax1 = document.querySelector('.parallax1') 
const backgroundnav = document.getElementById("backgroundnav") 
const aboutmenav = document.getElementById("aboutmenav") 
const skillnav = document.getElementById("skillsonmenu") 
const home = document.getElementById("home") 
const begin = document.getElementById("begin")
const menuimg = document.getElementById("menupic")
var firstClick = true;















download.addEventListener('mouseenter', () => {download.style.transform = 'scale(1.1)'});


download.addEventListener('mouseleave', () => {download.style.transform = 'scale(1)'});
controller.addEventListener('click', () => {
  

  


  
    if (controller.style.animationPlayState === 'paused') {
        controller.style.animationPlayState = 'running';
    } else {
        controller.style.animationPlayState = 'paused';
    }

   



if (window.matchMedia('(min-width: 1281px)').matches) { 
home.style.display='none';
  navigation.style.display='block'
  setTimeout(function() {
    download.style.display='block' ;
    
}, 400);

  parallax1.style.display='grid' ;
  setTimeout(function() {
 
    card.scrollIntoView({ behavior: 'smooth' });
}, 200);

setTimeout(function() {
  begin.style.transform = 'scale(0.000000001)';

},100 )




aboutmenav.addEventListener('click', ()=>{
  setTimeout(function() {
    navigation.style.display='block' ;

     card2.scrollIntoView({ behavior: 'smooth' });
   }, 200);
   card2.classList.toggle('is-flipped') ;
   card2.classList.add('is-flipped') ;
})


backgroundnav.addEventListener('click', ()=>{
  setTimeout(function() {
    navigation.style.display='block' ;
     card.scrollIntoView({ behavior: 'smooth' });
   }, 200);
   card4.classList.toggle('is-flipped') ;
   card4.classList.add('is-flipped') ;
})

skillnav.addEventListener('click', ()=>{
  setTimeout(function() {
    navigation.style.display='block' ;
     card.scrollIntoView({ behavior: 'smooth' });
   }, 200);
   card.classList.toggle('is-flipped') ;
   card.classList.add('is-flipped') ;
})






}




isPlayed = !isPlayed ;
if(isPlayed){
  document.getElementById("music").play();
  document.getElementById("minicloud").style.animationPlayState = "running" ;
  document.getElementById("minicloud2").style.animationPlayState = "running" ; 
  document.getElementById("minicloud3").style.animationPlayState = "running" ;
  document.getElementById("minicloud4").style.animationPlayState = "running" ;
  document.getElementById("skies").style.animationPlayState = "running" ;
 



}



else {
  document.getElementById("music").pause();
  document.getElementById("minicloud").style.animationPlayState = "paused" ;
  document.getElementById("minicloud2").style.animationPlayState = "paused" ;
  document.getElementById("minicloud3").style.animationPlayState = "paused" ;
  document.getElementById("minicloud4").style.animationPlayState = "paused" ;
  document.getElementById("skies").style.animationPlayState = "paused" ;
 
}



if (window.matchMedia('(max-width: 1281px)').matches) {
navigation.style.display='block'
  menupic.style.display='block' ;

  

if (firstClick){
  
 
  parallax1.style.display='none' ;
  setTimeout(function() {
    begin.style.transform = 'scale(0.000000001)';
  
  },200 )

  
  

 
  parallax1.style.display='none' ;

}
}})










if (window.matchMedia('(max-width: 1281px)').matches) {

document.addEventListener('dblclick', function() {
  
    document.body.style.zoom = 1;
});
let ouvert=false ;
 


home.addEventListener('click', ()=>{logo.style.display='block' ;
 
navigation.classList.toggle('mobilemenu');
controller.style.display = 'block';
download.style.display = 'block';
card4.style.display='none';
card.style.display='none';
card2.style.display='none';
parallax1.style.display='none';
home.classList.add('active');
skillnav.classList.remove('active');
aboutmenav.classList.remove('active');
backgroundnav.classList.remove('active');
skies.style.marginTop = 0; 
document.querySelector(".scrolling-text").style.display='none'

p = false;
})

skillnav.addEventListener('click', ()=>{
parallax1.style.display='block' ;
card.style.display='block';
card4.style.display='none';
card2.style.display='none';
navigation.classList.toggle('mobilemenu');
logo.style.display='none';
document.querySelector(".scrolling-text").style.display='none'
skies.style.marginTop = -200 + 'vh'; 
skillnav.classList.add('active');
home.classList.remove('active');
aboutmenav.classList.remove('active');
backgroundnav.classList.remove('active');
home.classList.remove('active');
download.style.display = 'none';
controller.style.display = 'none';
p = false;


})
backgroundnav.addEventListener('click', ()=>{
  parallax1.style.display='block' ;
  card4.style.display='block';
  card2.style.display='none';
  card.style.display='none';
  navigation.classList.toggle('mobilemenu');
  logo.style.display='none';
  document.querySelector(".scrolling-text").style.display='none'
  skies.style.marginTop = -200 + 'vh'; 
  download.style.display = 'none';
  backgroundnav.classList.add('active');
  home.classList.remove('active');
  aboutmenav.classList.remove('active');
  skillnav.classList.remove('active');
  home.classList.remove('active'); 
  controller.style.display = 'none';
  p = false;

  
  
  })


  aboutmenav.addEventListener('click', ()=>{
    parallax1.style.display='block' ;
    card2.style.display='block';
    card.style.display='none';
    card4.style.display='none';
    navigation.classList.toggle('mobilemenu');
    logo.style.display='none';
    download.style.display = 'none';
    skies.style.marginTop = -200 + 'vh'; 
    aboutmenav.classList.add('active');
    home.classList.remove('active');
    backgroundnav.classList.remove('active');
    skillnav.classList.remove('active');
    home.classList.remove('active'); 
    ouvert=false ;
    document.querySelector(".scrolling-text").style.display='none'
      controller.style.display = 'none';
      p = false;

    
    })
   

let p=true ;


menupic.addEventListener('click',()=>{

if(p){setTimeout(function() {
  
  document.querySelector(".scrolling-text").style.display='block' ; p=!p ;
},380 )

}else{document.querySelector(".scrolling-text").style.display='none' ; p=false;}

  if(ouvert){
  
    
    navigation.classList.toggle('mobilemenu');
    
    
    ouvert=!ouvert ;

  }
  
  else{
   
  
    navigation.classList.toggle('mobilemenu');
 
   
  }
  
    
      })


      

    }










window.addEventListener('scroll', function() {
  
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


addEventListener('scroll', () =>{

    let value =window.scrollY*0.999; 
    text.style.marginTop = value * 42.5 + 'px' ;
    sun.style.marginTop = value * -2.5 + 'px' ; 
    leaf.style.top = value * -1.25 + 'px' ; 
    leaf.style.left = value * 1.25 + 'px' ; 
    hill3.style.top = value * 0.2 + 'px' ; 
    hill3.style.left = value * 1.05 + 'px' ; 
    hill5.style.marginTop = value * 2.5 + 'px' ;
    hill4.style.top = value * 0.2 + 'px' ; 
    hill4.style.left= value * -1.05 + 'px';
    hill1.style.top= value * 1.2 + 'px'  ;
    card.style.left = value *0.65  + 'px' ;
    card2.style.left = value *-0.65  + 'px' ;
    download.style.marginTop = value * -12.5 + 'px' ;
   
})


const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}


animateCircles();





card.addEventListener('click' , function(e){


    setTimeout(function() {
    card.style.cursor='none ' ;

      
card.classList.toggle('is-flipped') ;
      }, 0); 
}) ;


card2.addEventListener('click' , function(e){
    card2.style.cursor='none ' ;
    setTimeout(function() {
      
        card2.classList.toggle('is-flipped') ;
              }, 0);
            
            
            })
;





 card4.addEventListener('click' , function(e){
    card4.style.cursor='none ' ;
    setTimeout(function() {
      
        card4.classList.toggle('is-flipped') ;
              }, 0);
            })





