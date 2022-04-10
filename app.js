let password = "sswTord";


let pass1 = () =>{
if (password.length > 7){
    return 'Strong';
}else{
    return 'Weak';
}
}
console.log(pass1());

password.length > 7 ? console.log('Strong'): console.log('Weak');


let pass =() =>{
    return (password.length > 7 && 'Strong') || 'Weak';
}
 console.log(pass());



 
 password.length >= 7 && (password.search(/[A-Z]/)!==-1) ? console.log('Very Strong'): console.log();
 password.length === 7 ? console.log('Strong') : console.log();
 password.length < 7 ? console.log('Weak'):console.log();