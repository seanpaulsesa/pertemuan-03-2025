// deklarasi variabel

let nama = "Deni"; // string
let usia = 20; // number
const jenisKelamin = "Laki-Laki"; // string
let sudahBayar = true;  // boolean
let aktif = true; // boolean

// gunakan tipe data dan operator
// hitung tahun lahir

const tahunSekarang = 2025; //number

let tahunLahir = tahunSekarang - usia;

console.log("Tahun Lahir:", tahunLahir);

// gunakan operator logika untuk cek status
// && artinya "dan"

let statusMember = aktif && sudahBayar;

let infoStatusMember;

if(statusMember === true){
    infoStatusMember = "Sudah Menjadi Member";

} else {
    infoStatusMember = "Belum Menjadi Member";

}

// console.log("Status Member Aktif:", statusMember);

console.log(infoStatusMember);

// perbandingan usia untuk harga promo 

let dapatPromo = usia < 30; // true

// kondisi ? nilai_jika_true : nilai_jika_false

let statusPembayaran = sudahBayar ? "Sudah Bayar" : "Belum Bayar";

let infoPromo = dapatPromo ? "Ya, dapat promo khusus" : "Tidak dapat promo";


console.log("Dapat Promo Khusus?", infoPromo);

document.getElementById("memberNama").innerText = nama;
document.getElementById("memberUsia").innerText = usia;
document.getElementById("memberJenisKelamin").innerText = jenisKelamin;
document.getElementById("memberStatusPembayaran").innerText = statusPembayaran;
document.getElementById("memberStatus").innerText = infoStatusMember;
document.getElementById("memberInfoPromo").innerText = infoPromo;

function hideNameBox()
{
    document.getElementById("nameBox").style.display = "none";
}

function hideUsiaBox()
{
    document.getElementById("usiaBox").style.display = "none";
}