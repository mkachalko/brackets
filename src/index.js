module.exports = function check(str, bracketsConfig) {

  let box = str;
  
  for(let i = 0; i < str.length / 2; i++) {
    bracketsConfig.forEach(subArr => {
      box = box.replace(subArr.reduce((sum, item) => sum + item, ""), "");
    })
  }

  if(box.length === 0) {
    return true;
  } else {
    return false;
  }
  
}
