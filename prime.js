function checkprime(num){
let count=0;
  for(let x=1; x<=num; x++ ){
     if(num%x==0){
       count++;  
      }
   }
if(count==2){
   return true;
}
   return false;
}
let ans=checkprime(19);
if(ans==true){
console.log( "Is prime number")
}else{
console.log( "Is not a prime number")
}