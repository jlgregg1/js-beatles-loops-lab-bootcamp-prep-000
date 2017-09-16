function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    // if (i===0) {
    //   array.push("John Lennon plays guitar")
    // }
    // else {
    //   array.push(`musicians[${i}] plays instruments[${i}])`
    //   }
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
array.push(`musicians[${i}] plays instruments[${i}]`)
  }
  return array
}
