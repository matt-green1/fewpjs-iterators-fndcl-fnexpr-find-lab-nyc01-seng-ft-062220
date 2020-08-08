

const testVar = {}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function testFunc() {
  return "hi"
}


function superbowlWin(arrayOfObjs) {
    let win = arrayOfObjs.find(function(obj) {
      return obj.result === "W"
    })
    // return win.year
    if(win){ 
      return win.year
    } else {
      return undefined
    }
}

// console.log(superbowlWin(record))