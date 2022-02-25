function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let arr = [];
  let newChange;
  let coins = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let sum = 0;
    
  for(let i=0; i<cid.length; i++){
    sum += cid[i][1];
  }
    
  if(sum == change){
    return {status: "CLOSED", change: cid};
  }
  
  for(let i=cid.length-1; i>=0; i--){
  
    // This counts the number of units of each currency in the change.
    let a = coins[i] * Math.floor(change / coins[i]);
      
    if(a<=cid[i][1] && a>0){
      newChange = change-a;
      cid[i].splice(1, 1, a);
      arr.push(cid[i]);
      change = newChange.toFixed(2);
    }
  
    if(a > cid[i][1]){
      newChange = change-cid[i][1];
      cid[i].splice(1, 1, change-newChange);
      arr.push(cid[i]);
      change = newChange.toFixed(2);
    }
  }
  
  if(change % coins[0] !== 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  if(sum > change){
    return {status: "OPEN", change: arr};
  }  
}
  
console.log(
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));