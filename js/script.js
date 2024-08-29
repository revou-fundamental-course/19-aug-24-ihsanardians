// ini javascript
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

//menampilkan submit form
function setSenderUI(nama, tanggalLahir, jenisKelamin, pesan) {
  document.getElementById("sender-nama").innerHTML = nama;
  document.getElementById("sender-tanggal-lahir").innerHTML = tanggalLahir;
  document.getElementById("sender-jenis-kelamin").innerHTML = jenisKelamin;
  document.getElementById("sender-pesan").innerHTML = pesan;
}

//memvalidasi form jika kosong
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

//auto slide
let slideIndex = 1;
showBanner(1);

function nextSlide(n) {
  showBanner((slideIndex += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("banner-img");
  if (indexBanner > listImage.length) slideIndex = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  listImage[slideIndex - 1].style.display = "block";
  console.log(listImage);
}

setInterval(function () {
  nextSlide(1);
}, 3000);
