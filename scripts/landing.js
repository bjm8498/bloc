var pointsArray = document.getElementsByClassName('point');




var revealPoint = function (point) {

        
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebKitTransform = "scaleX(1) translateY(0)";

};

var animatePoints = function(points){
    forEach(points, revealPoint);
}

window.onload = function(){
    


    window.addEventListener('scroll',function(event){
      if (pointsArray[0].getBoundingClientRect().top <= 500) {
          animatePoints(pointsArray);
      }    
    });
}