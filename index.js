function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    if (i===0) {
      array.push("John Lennon plays guitar")
    } 
    else {
      array.push(`musicians[${i}] plays instruments[${i}]`
      }
  }
  return array
}
