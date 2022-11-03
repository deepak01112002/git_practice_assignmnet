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
let ans= checkprime(13);
if(ans == true){
   console.log("Prime")
}else{
   console.log("Not Prime")
}