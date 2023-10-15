// Diagonallar soni

// function diogonal(a) {
//     return(a*(a-3)/2);
// }
// let a=+prompt("a sonni kiriting");
// console.log(diogonal(a));

////////////////////////////////////////////////////////////

// Azimjonning qo'ylari

// function numberOfSheep(a) {
//     if (a%4==0) {
//         return(a/2);
//     }
//     else{
//         return("siz noto'g'ri qiymat kiritdingiz");
//     }
  
// }
// let a=+prompt("Qo'ylarning oyoqlar  sonini kiriting");
// console.log("Qo'ylarning quloqlar soni="+numberOfSheep(a));

//////////////////////////////////////////////////////////////////

// Isfandiyorning masalasi

// function number(x) {
//     return((x**5)+8*(x**4)-5*(x**3)+3*(x**2)+x-12);
// }
// let x=+prompt("x sonni kiriting");
// console.log(number(x));

//////////////////////////////////////////////////////////////////

//  10 000 qadam

// function steps(a) {
//     return((a/10000)*100)
// }
// let a=+prompt(" qadamingizni kiriting");
// console.log("sizning qadamingiz 10000 qadamga nisbatan="+steps(a)+"%");

///////////////////////////////////////////////////////////////

// sanash vaqti

// function count(a,b) {
//     return((b-a+1)*10);
    
// }
// let a=+prompt('shaxbox sanashni boshladi');
// let b=+prompt(" shaxboz sanashni tugatdi");
// console.log("sanash uchun ketgan vaqt="+count(a,b)+"sekund");

//////////////////////////////////////////////////////////////////

// yangi yil sovgasi

// let a=+prompt("to'ngichining puli");
// let b=+prompt("o'rtanchasining puli");
// let c=+prompt("kenjasining puli");
// let N=+prompt("sovg'aning narxi");

// function money(a,b,c,N) {
//     if(N<=(a+b+c)){
//         return("yes");
//     }
//     else{
//         return("no");
//     }
// }
// console.log(money(a,b,c,N));

//////////////////////////////////////////////////////////

// iki xonali sonlarning birinchi raqami

// function number(a) {
//     return(Math.trunc(a/10));
// }
// let a=+prompt("sonni kiriting");
// console.log(number(a));

//////////////////////////////////////////////////////////

// sonning oxirgi raqami

// function number(a) {
//     return(Math.trunc(a%10));
// }
// let a=+prompt("sonni kiriting");
// console.log(number(a));

/////////////////////////////////////////////////////////

// harorat

// let a=+prompt("tanlang 1)kelvin 2) farengeyt")
// let b=+prompt("haroratni kiritimg");
// function degree(a,b) {
//     switch (a) {
//         case 1:
//             return(b+273.15)
//         case 2:
//             return(b*1.80+32.00)
//         default:
//             return("siz noto'g'ri qiymat kiritdingiz");    
//     }
// }
// console.log(degree(a,b));

///////////////////////////////////////////////////////

// uchburchaklar

// let a=+prompt(" a sonni kiriting");
// let i=1;
// let sum=0;
// while (i<=a) {
//     sum=sum+i;
//      i++;
//  }
//  console.log(sum);

//////////////////////////////////////////////////////////

// katta kichik 

// let a=+prompt(" a son");
// let b=+prompt(" b son");

// function compare( a,b) {
// if(a>0||b>0){
//     if(a>b){
//         return(">");
//      }
//      else if(a==b){
//         return("=");
//      }
//      else{
//         return("<");
//      }
// }
// else{
//     if(a>b){
//           return(">");
//     }else if(a==b){
//         return("=");
//     }
//     else{
//         return("<");
//     }
// }
// }
// console.log(compare(a,b));

/////////////////////////////////////////////////////////////////////////

// maosh

// let a=+prompt("birinchi ishchi");
// let b=+prompt("ikkinchi ishchi");
// let c=+prompt("uchinchi ishchi");

// function money(a,b,c) {
//     let min=Math.min(a,b,c);
//     let max=Math.max(a,b,c);
//     return(max-min);
// }
// console.log(money(a,b,c));

/////////////////////////////////////////////////////////////////////

// htts

// let n=+prompt("n sonni kirit");
// function htts(n){
//     let a=n;
//     let counter=0; 
//     while (a>1) {
//        if(a%2==0){
//         return "no";
//        }
//        counter++;
//        a=Math.trunc(a/10);
//     }
//     if (counter%2==0) {
//         return("yes");
//     }
//     else{
//         return("no");
//     }
// }
//  console.log(htts(n));