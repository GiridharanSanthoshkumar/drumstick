var a=[];
a=document.querySelectorAll(".drum");
aud=[];


    
    
    

for(var i=0;i<a.length;i++)
{
    a[i].addEventListener("click",function(){
   var v=this.innerHTML;
   playsound(v);
   Animate(v);
    });
}
document.addEventListener("keydown",function(event)
{ var x=(event.key);
  playsound(x);
  Animate(x);


});
function playsound(a)
{
  switch(a)
  { case 'w':
  aud[0]=new Audio('sounds/crash.mp3');
     aud[0].play();
     break;
     case 'a':
      aud[1]=new Audio('sounds/kick-bass.mp3');
       aud[1].play();
       break;
     case 's':
      aud[2]=new Audio('sounds/snare.mp3');
    
       aud[2].play();
       break;
     case 'd':
      aud[3]=new Audio('sounds/tom-1.mp3');
   
       aud[3].play();  
       break;
       case 'j':
        aud[4]=new Audio('sounds/tom-2.mp3');
    
         aud[4].play();  
         break;
      
     case 'k':
      aud[5]=new Audio('sounds/tom-3.mp3');
    
       aud[5].play();  
       break;   
   
       case 'l':
        aud[6]=new Audio('sounds/tom-4.mp3');

           aud[6].play();  
           break;
     default:
          console.log("f**k");
          break;     
  }
   }
  function Animate(c){
    var t=document.querySelector("."+c);
    t.classList.add("pressed");
    setTimeout(function(){
      t.classList.remove("pressed");
    },"100");
    
  }

    

