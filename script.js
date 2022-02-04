var topcount = 0;
var middlecount = 0;
var bottomcount = 0;
function add1(el){
    var countElement = document.querySelector(el);
    if(el === '.toplike'){
        topcount ++;
        countElement.innerText = topcount + " like(s)";
    }
    else if(el === '.middlelike'){
        middlecount ++;
        countElement.innerText = middlecount + " like(s)";
    }
    else if(el ==='.bottomlike'){
        bottomcount ++;
        countElement.innerText = bottomcount + " like(s)";
    }
}