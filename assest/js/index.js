let a = prompt('logininggizni kiriting');

let res;
if(a =='admin') {
   
let b = prompt('Ommaviy parolni kiriting');
if(b == 12345) {
    res = 'hush kelibsiz';

}
else {
    res = 'parolingiz notugri';
}
}

alert(res);