function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0, i <= musicians.length-1, i++) {
    if (i===0) {array.push("John Lennon plays guitar")}
    else {array.push("musicians[${i}]) plays instruments[${i}]"}
  }
  return array
}
