var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No." + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi");
  }
}
