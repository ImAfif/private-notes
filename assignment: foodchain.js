var balance = -5;
var checkBalance = false;
var isActive = false;

if (checkBalance === true){
  if (isActive === true && balance > 0) {
    console.log("Your account balance is $" + balance + ".")
  }
  else if (isActive === false){
    console.log("Your account is no longer active.")
  }
  else if (balance === 0){
    console.log("Your account is empty")
  }
  else if (balance < 0){
    console.log("Your balance is negative. Please contact bank.")
  }
}
else {
  console.log("Thank you. Have a nice day!")
}