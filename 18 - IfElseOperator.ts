let nilaiLulus: number = 80;
let nilaiAkhir: number = 75;
let nilaiAbsen: number = 80;

let nilaiRataRata: number = (nilaiLulus + nilaiAkhir + nilaiAbsen);

nilaiRataRata = nilaiRataRata / 3;

console.log("Nilai rata-rata:", nilaiRataRata);

if (nilaiRataRata > nilaiLulus) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}
