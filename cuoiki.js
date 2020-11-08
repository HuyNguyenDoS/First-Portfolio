function play()
{
    var ball = document.getElementById("playBallId");
    var le = 0, top =0;
    var incX = 5;
    var incY = 7;
    setInterval (function() {
        if(le + 50 >= 500 || le < 0)
            incX= - incX
         le += incX;
        ball.style.left= le + "px";
    },100 )
    setInterval (function() {
        if(le + 50 >= 500 || top < 0)
            incY= - incY
        top += incY;
        ball.style.left= top + "px";
    },100 )
    setInterval (function() {
        if(le + 50 >= 500 || le < 0||le + 50 >= 500 || top < 0)
            incX= - incX
            incY= - incY
        le += incX;
        top += incY;
        ball.style.left= le + "px";
        ball.style.left= top + "px";
    },100 )
}