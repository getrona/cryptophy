var cryptoMaker = function (input){
  var k = 0;
  var repContainer = new Array();
  var inputLower = input.toLowerCase();
  var inputNoSymbols = inputLower.replace(/[^a-zA-Z ]/g, "");
  var inputNoSpace = inputNoSymbols.replace(/ /g,'');
  var inputArray = inputNoSpace.split("");
  var sqrLength = Math.ceil(Math.sqrt(inputNoSpace.length));
  console.log(inputNoSpace);
  for (var i = 0; i < sqrLength; i += 1) {
    repContainer[i] = new Array();
    for (var j = 0; j < sqrLength; j += 1){
      repContainer[i][j]=inputArray[k];
      k++;
    }
  }
  console.log(repContainer);

};

$(document).ready(function(){
  $(".blanks form").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#text").val();
    cryptSentence = cryptoMaker(inputSentence);
  });
});
