// ini javascript
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// document.getElementById("gantiNama").addEventListener("click", function () {
//   replaceName();
// });

function setSenderUI(nama, tanggalLahir, jenisKelamin, pesan) {
  document.getElementById("sender-nama").innerHTML = nama;
  document.getElementById("sender-tanggal-lahir").innerHTML = tanggalLahir;
  document.getElementById("sender-jenis-kelamin").innerHTML = jenisKelamin;
  document.getElementById("sender-pesan").innerHTML = pesan;
}

function validateform() {
  const nama = document.forms["message-form"]["nama"].value;
  const tanggalLahir = document.forms["message-form"]["tanggal-lahir"].value;
  const jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
  const pesan = document.forms["message-form"]["pesan"].value;

  if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(nama, tanggalLahir, jenisKelamin, pesan);
  return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-img");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
