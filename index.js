function ageCheck(){
    var age = document.reg.age.value;
    if (age<0){
        alert('Age cannot be in negative');
    }
}

// function ageC(){
//     var now = new Date();
//     var presentY = now.getFullYear();

//     var birth = document.reg.dob.value;
//     var birthY = birth.getFullYear();

//     var a = document.reg.age.value;  
//     diff = presentY-birthY;
//     if(a<diff){
//         alert("error");
//     }
// }