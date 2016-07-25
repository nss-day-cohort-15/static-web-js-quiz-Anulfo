//(function () {
//     var spc = [];
//     var leafs = [];
//     var finaltree = []

//     for (i = fileHeight; i >=0; i--) {
//         spc.push(' '.repeat(i));
//     }
// //console.log(spc);

//     for (j = 1; j < (fileHeight * 2); j = j + 2) {
//         leafs.push(madeOf.repeat(j));
//     }
// //console.log(leafs);
//     for (z = 0; z < 10; z++) {
//         finaltree.push(spc[z], leafs[z]);
//         console.log(finaltree.join(' '));
//         finaltree = [];
// }
// }())
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
     for (z = 0; z < 10; z++) {
         finaltree.push(spc[z], leafs[z]);
         console.log(finaltree.join(' '));
         finaltree = [];
 }
 }())
}
var butt = document.getElementById('fertilizer').addEventListener('click', tester);