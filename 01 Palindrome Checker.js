function palindrome(str) {
  str=str.replace(/[^\w]|_/g, "").toLowerCase();
  let rts=str.split("").reverse().join("");

  let count=0;
  for(let i=0; i<str.length; i++){
    if(str[i] === rts[i]){
      count++;
    }
  }
  
  if(count == str.length){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));