// var noAngkot = 1;
// var jmlhAngkot = 10;
// var angkotBeroperasi = 6;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   noAngkot++;
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
// }

var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot" + noAngkot + "baik");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot < jumlahAngkot; noAngkot++) {
  //nilai awal : kondisi terminasi ; inkremen denkremen
  console.log("angkot" + noAngkot + "mogok");
}
