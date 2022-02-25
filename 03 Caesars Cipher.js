function rot13(str) {
  let rot2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
  let b=str.split('');
  let a=[];
    
  for(let i=0; i<b.length; i++){
    if(rot2.includes(b[i]) && rot2.indexOf(b[i]) < 13){
      a.push(rot2[rot2.indexOf(b[i]) + 13]);
    }else if(rot2.includes(b[i]) && rot2.indexOf(b[i]) >= 13){
      a.push(rot2[rot2.indexOf(b[i]) - 13]);
    }else{
      a.push(b[i]);
    }
  }
  return a.join('');
}
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));