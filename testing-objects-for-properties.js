var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp) == true) {
      return myObj[checkProp];
     } else {
        return "Not Found";
        }
  }
  
checkObj("gift")
