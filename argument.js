function fullName(firstName, lastName){
    const fullName= firstName +' '+ lastName;
    return fullName;
}

const name =fullName('shakib', 'hasan');
console.log(name); 


//now if we want name('', '', '', '') in one output:

function getfullName(firstName,lastName){
    let fulName= '';
    for(var i=0; i<arguments.length; i++){
        var newName=arguments[i];
        fulName=fulName +' '+newName;
        
    }
    return fulName;
}

console.log(getfullName('josna', 'tara', 'chader ', 'alo', 'burir mar', 'boyosh sholo'));
