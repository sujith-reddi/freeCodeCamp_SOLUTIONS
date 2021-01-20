var arrCountDown = [];
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    arrCountDown.push(n) + countdown(n - 1);
  }
  return arrCountDown;
}
