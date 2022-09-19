var f = false;
var v = 0;
var a =0;
function quayquat(){
    if(f == true) {
        var quat = document.getElementById('quat');
        quat.style.transform = "rotate("+v+ "deg)";
        v += a;
    }
}
setInterval(quayquat,10)
function off(){
    if(f==false){
        f=true;
    }
v=0;
a=0;
}
function quay1(){
    if(f==false){
        f=true;
    }
    v=0;
    a=10;
}
function quay2(){
    if(f==false){
        f=true;
    }
    v=0;
    a=15;
}function quay3(){
    if(f==false){
        f=true;
    }
    v=0;
    a=20;
}