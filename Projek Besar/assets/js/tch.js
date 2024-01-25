/* [ Header footer sengaja dipisah biar ga banyak" pengetikan berulang di html ] */
const header = `<div class="main">
            <nav>
                <!-- [ Logo ] -->
                <a href="index.html" class="logo_wrap">
                    <img src="assets/img/logo.png" alt="Logo PASKANUSA" />
                    <h2 class="logo">PASKANUSA</h2>
                </a>

                <!-- [ Menu ] -->
                <div class="menu_wrap">
                    <!-- [ Icon untuk mobile ] -->
                    <div class="menu_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" /></svg>
                    </div>
                    <ul class="menu">
                        <li><a href="index.html">Beranda</a></li>
                        <li><a href="profil.html">Profil</a></li>
                        <li><a href="comingSoon.html">Kegiatan</a></li>
                        <li><a href="kontak.html">Kontak</a></li>
                        <li class="sign"><a href="daftar.html">Daftar</a></li>
                    </ul>
            </nav>
        </div>`;
const footer = `<div class="content">
                <div class="line_1">
                    <div class="logo">
                        <img src="assets/img/logo.png" alt="Logo Footer" />
                        <h2 class="title montserratAlternate">PASKANUSA</h2>
                    </div>
                    <div class="isi">
                        Portal Informasi Pasukan Pengibar Bendera
                        <span>SMK NEGERI 1 PURWOSARI</span>
                    </div>
                </div>
                <div class="line_2">
                    <h2>Sosial Media</h2>
                    <a href="https://instagram.com/@paskanusa_">Instagram @paskanusa_</a>
                    <a href="https://tiktok.com/@paskanusa">Tiktok @paskanusa</a>
                    <a href="#">YouTube Channel Paskanusa</a>
                </div>
                <div class="line_3">
                    <h2>Alamat</h2>
                    <p>
                        Jl. Raya Purwosari, Polerejo, Purwosari, Kec. Purwosari, Pasuruan, Jawa Timur 67162
                        <span>Telepon: (0343) 613747</span>
                    </p>
                </div>
            </div>
            <hr>
            <div class="copyleft">
                <span>Tim Teknologi dan Informasi PASKANUSA</span>
                <span>@ All Rights Reserved Pasukan Pengibar Bendera SMK Negeri 1 Purwosari 2023</span>
            </div>`;


let slideIndex = 0;

function showSlides() {
  let i;
  let contentSlides = [{
    title: "Latihan Gabungan",
    title_2: "Paskanusa X Passmanes",
    date: "10 Maret 2023"
  }, {
    title: "Jambore Paskibra Vol.7",
    title_2: "Juara Lomba Fashion Recycle",
    date: "26-28 Desember 2022"
  }, {
    title: "LKBB ARJUNA 3 - TIM B",
    title_2: "Penampilan pertama Paskanusa",
    date: "12 Maret 2023"
  }, {
    title: "LKBB ARJUNA 3 - TIM A",
    title_2: "Foto  Bersama Pemenang LKBB ",
    date: "20 Maret 2023"
  }]
  let slides = document.getElementsByClassName("mySlides");
  if (slides && slides.length) {
    let titles = document.querySelectorAll('.hufft .isi .judul span');
    let dates = document.querySelector('.hufft .isi .date span');
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    let {
      title,
      title_2,
      date
    } = contentSlides[slideIndex - 1];
    titles[0].textContent = title;
    titles[1].textContent = title_2;
    dates.textContent = date;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

function resizeIFrameToFitContent( iFrame ) {
  iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
  iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

// Header
document.querySelector('.header').innerHTML = header;
// Footer
document.querySelector('.footer').innerHTML = footer;

window.addEventListener('load', async () => {
  // sembunyikan splash
  setTimeout(() => {
    let splash = document.querySelector('.splash');
    splash?splash.classList.add('hidden'):false;
  }, 1250);

  showSlides();

  // gform
  const iframe = document.querySelector('iframe');
  iframe?resizeIFrameToFitContent(iframe):false;
});