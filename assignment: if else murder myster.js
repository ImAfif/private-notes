var room = "dining room"

var suspect = "Mr. Parkes"

var weapon = "knife";

var solved = false;

//what we do first is determine where the murder took place
if (room === "ballroom"){
  weapon = "poison"
  if (suspect ==="Mr. Kalehoff")
    solved = true
}
if (room === "gallery"){
  weapon = "trophy"
  if (suspect ==="Ms. Van Cleve")
    solved = true
}
if (room === "billiards room"){
  weapon = "pool stick"
  if (suspect ==="Mrs. Sparr")
    solved = true
}
if (room === "dining room"){
  wepaon = "knife"
  if (suspect === "Mr. Parkes")
    solved = true
}
if (solved){
  console.log(suspect + " did it in the " + room + " with the " + weapon)
} else {
  console.log("not solved")
}