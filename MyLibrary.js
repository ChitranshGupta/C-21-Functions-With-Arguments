function bounceOff(a,b){

    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2) {
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1);
    }
    if (a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2){
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
    }
    }

    function isTouching(obj1,obj2) // function definition 
    { if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2 &&
         obj2.x - obj1.x < obj2.width/2 + obj1.width/2 && 
         obj1.y - obj2.y < obj2.height/2 + obj1.height/2 &&
          obj2.y - obj1.y < obj2.height/2 + obj1.height/2) 
          { return true; }
           else
            { return false; } }