function welcome(name, greetHandler){
    
    greetHandler(name);
      

}

const actorName= 'tom hanks';

function greetMorning(name){
    console.log('Good Morning ',name);

}

function greetEvenning(name){
    console.log('Good Evening ',name);

}

function greetAfternoon(name){
    console.log('Good Afternoon ',name);

}




welcome(actorName,greetEvenning);

//call back in event handler

function handleClick(){
    console.log();
}

document.getElementById('click').addEventListener('click', handleClick)

