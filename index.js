

const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arrayOfObjs) {
    let win = arrayOfObjs.find(function(obj) {
      obj.result === "W"
    })
    
    if(win){ 
      return win.year
    } else {
      return undefined
    }
}