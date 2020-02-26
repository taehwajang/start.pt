var target = document.getElementById('touch')
function touch(){
    if(target.style.backgroundColor == 'red'){
        target.style.backgroundColor = 'blue'
    }else{
        target.style.backgroundColor = 'red'
    }
}