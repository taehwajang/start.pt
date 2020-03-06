let x = 5

for (var i = 0; i < x; i++) {
    console.log(i)
  }



function sum (){
    
    let number= document.getElementById('number').value;
    let number2=document.getElementById('number2').value;
    parseInt(number)
    alert(parseInt(number)+ parseInt(number2));
}

function sub(){
    
    let number= document.getElementById('number').value;
    let number2=document.getElementById('number2').value;
    alert(parseInt(number)-parseInt(number2));
}

function mul(){
    
    let number= document.getElementById('number').value;
    let number2=document.getElementById('number2').value;
    alert(parseInt(number) *parseInt(number2));
}
function div(){
    
    let number= document.getElementById('number').value;
    let number2=document.getElementById('number2').value;
    alert(parseInt(number) /parseInt(number2));
}
