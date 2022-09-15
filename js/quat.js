var f =500;
function demo(){var x =document.getElementById('abc');
    x.style.transform ='rotate('+f+'deg)';
    f+= 5;
}
function quay1(){
    setInterval(demo,10);
}
function quay2(){
    setInterval(demo,5);
}
function quay3(){
    setInterval(demo,0);
}
function off(){

}