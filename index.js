

const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arrayOfObjs) {
    let win = arrayOfObjs.find(function(obj) {
      return obj.result === "W"
    })
    
    // if(win){ 
    //   return win.year
    // } else {
    //   return undefined
    // }
}