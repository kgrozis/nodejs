// Want to insert special chars into a string

// Insert an escape sequence into a string 
//   Copyright symbol: \u00A9
var resultString = "<p>This page \u00A9 Shelley Powers </p>";
var blk = Document.getElementById("result");
blk.innerHTML = resultString;
console.log(blk)