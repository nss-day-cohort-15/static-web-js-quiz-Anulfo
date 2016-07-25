var tester = function() {
    console.log('Button Pushed');
    var fileHeight = document.getElementById('heightNumber').value;
    console.log(fileHeight);
    var madeOf = document.getElementById('charType').value;
    console.log(madeOf);
        (function () {
     var spc = [];
     var leafs = [];
     var finaltree = []

     for (i = fileHeight; i >=0; i--) {
         spc.push(' '.repeat(i));
     }
 //console.log(spc);

     for (j = 1; j < (fileHeight * 2); j = j + 2) {
         leafs.push(madeOf.repeat(j));
    }
 //console.log(leafs);
     for (z = 0; z < fileHeight; z++) {
         finaltree.push(spc[z], leafs[z]);
         console.log(finaltree.join(' '));
         finaltree = [];
 }
 }())
}
var eRoutine = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 13  && (inputHeight != 0 || inputChar != 0)) {
        console.log(tester)
        tester();
    }
    // else {
    //     alert('Press Enter after filling the spaces')
    // }
}
var inputHeight = document.getElementById('heightNumber');
var inputChar = document.getElementById('charType');
var butt = document.getElementById('fertilizer').addEventListener('click', tester);
var enterK = document.addEventListener('keydown', eRoutine);
