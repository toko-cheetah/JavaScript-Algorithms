function telephoneCheck(str) {

  if(str.match(/[a-z]/gi) !== null){
    return false;
  }

  if(str.match(/\d/g).length == 11 && 
  str[0] !== '1' ||
  str.match(/\d/g).length > 11){
    return false;
  }

  if(str.match(/\d/g).length < 10){
    return false;
  }

  if(str.match(/\)|\(/g) !== null &&
  str.match(/\)|\(/g).length == 1 ||
  str.match(/\)|\(/g) !== null &&
  str.match(/\)|\(/g).length > 2){
    return false;
  }

  if(str.search(/\)/) > 9){
    return false;
  }

  if(str.match(/\-/g) !== null &&
  str.match(/\-/g).length > 2){
    return false;
  }

  return true; 
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("55 55-55-555-5"));