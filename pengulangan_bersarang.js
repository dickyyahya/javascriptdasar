// awal 1-10
// var s = "";
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// awal 10-1
// var s = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }

// console.log(s);

// var g = "";
// for (var p = 10; p > 0; p--) {
//   for (var q = 0; q < p; q++) {
//     g += "*";
//   }
//   g += "\n";
// }
// for (var p = 0; p <= 10; p++) {
//   for (var q = 0; q < p; q++) {
//     g += "*";
//   }
//   g += "\n";
// }

// console.log(g);

// POLA SEGITIGA

var n = 5; // jumlah baris
var result = "";

// buat baris
for (var row = 1; row <= n; row++) {
  // cetak spasi
  for (var space = 0; space < n - row; space++) {
    result += " ";
  }

  // buat pola
  for (var star = 0; star < row; star++) {
    // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya
    if (star >= 1) {
      result += "+";
    }

    // selain dari itu langsung cetak *
    result += "*";
  }

  // print row
  result += "\n";
}

console.log(result);
