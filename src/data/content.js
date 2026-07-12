// ============================================================
// SEMUA KONTEN YANG PERLU DIISI ADA DI FILE INI.
// Nggak perlu bongkar komponen lain — cukup edit di sini.
// ============================================================

export const site = {
  herName: "Fiorella Anatasya",
  hisName: "Bagas",
};

// --------------------------------------------------------------
// FOTO BERDUA (section "Kita Berdua")
// Tempel URL gambar dari imgbb di sini.
// Cara ambil URL yang benar di imgbb: upload foto -> klik kanan
// pada hasil upload -> "Copy image address". Formatnya biasanya
// https://i.ibb.co/xxxxxxx/nama-file.jpg
// Kosongkan string ("") kalau belum ada, nanti placeholder yang tampil.
// --------------------------------------------------------------
export const couplePhoto = {
  url: "", // <-- tempel URL imgbb di sini
  caption: "Salah satu momen favoritku.",
};

// --------------------------------------------------------------
// GALERI FOTO (section "Galeri")
// Isi array ini dengan URL imgbb. Boleh 3-8 foto.
// Foto pertama otomatis jadi foto besar (tall) di grid.
// --------------------------------------------------------------
export const galleryPhotos = [
  { url: "", alt: "" },
  { url: "", alt: "" },
  { url: "", alt: "" },
  { url: "", alt: "" },
  { url: "", alt: "" },
];

// --------------------------------------------------------------
// MUSIK (section "Lagu Kita")
// Cara ambil embed URL Spotify:
// buka lagu di Spotify -> titik tiga (...) -> Share -> Embed track
// -> copy src="..." dari kode yang muncul (URL-nya diawali
// https://open.spotify.com/embed/track/)
// --------------------------------------------------------------
export const music = {
  spotifyEmbedUrl: "https://open.spotify.com/embed/track/3oL3XRtkP1WVbMxf7dtTdu", // <-- tempel URL embed Spotify di sini
  note: "Lagu ini soalnya, hehe.",
};

// --------------------------------------------------------------
// PESAN ROMANTIS (section "Sepucuk Pesan")
// Array paragraf. Tambah/hapus/ubah bebas.
// --------------------------------------------------------------
export const loveLetter = {
  paragraphs: [
    "Selamat ulang tahun, Fiorella. Di antara semua hari dalam setahun, hari ini yang paling ingin aku rayakan — karena hari ini dunia dapat kamu.",
    "Aku nggak pandai merangkai kata-kata indah, tapi aku tahu persis apa yang ingin aku sampaikan: terima kasih sudah jadi kamu. Terima kasih sudah bertahan di hari-hari susah, tertawa di hari-hari receh, dan tetap memilih untuk ada — untukku, untuk dirimu sendiri, untuk kita.",
    "Kamu itu campuran yang jarang ada: kuat tapi lembut, sibuk tapi selalu sempat peduli, banyak maunya tapi gampang bahagia sama hal kecil. Aku suka semua versi kamu, termasuk versi yang lagi capek dan versi yang lagi ngambek nggak jelas.",
    "Semoga umur baru ini bawa lebih banyak alasan buat kamu tersenyum, lebih sedikit alasan buat kamu khawatir, dan aku — semoga masih dapat tempat di sampingmu, menyaksikan semua itu terjadi.",
  ],
  signature: "— dari Bagas, kekasihmu",
};

// --------------------------------------------------------------
// TIMELINE / PERJALANAN HUBUNGAN (section "Perjalanan Kita")
// Tambah/hapus item sesuai cerita asli kalian.
// `filled: true` -> titik timeline terisi warna (momen yang udah lewat)
// `filled: false` -> titik timeline kosong (biasanya untuk "sekarang")
// --------------------------------------------------------------
export const timeline = [
  {
    eyebrow: "Awal Cerita",
    title: "Pertama kali kenal",
    description:
      "Kita bertemu di cafe saat aku lagi bersama kawanku, tanpa sengaja ku lihat kamu dan tergerak sendiri untuk meminta nomor whatsApp mu. jujur, aku terlalu berani bet wokwok.",
    filled: true,
  },
  {
    eyebrow: "Momen Penting",
    title: "Jadian",
    description:
      "Momen penting ya? keknya chatan dari WhatsApp sudah menceritakan semua wkwk.",
    filled: true,
  },
  {
    eyebrow: "Kenangan",
    title: "Momen favorit berdua",
    description:
      "Moemn favorit, keknya bisa di sebutkan. soalnya semua kita lalui termasuk momen favorit, hehe.",
    filled: true,
  },
  {
    eyebrow: "Sekarang",
    title: "Hari ini",
    description:
      "Merayakan hari lahirmu, dan masih banyak lagi cerita yang mau aku tulis bareng kamu.",
    filled: false,
  },
];

// --------------------------------------------------------------
// HARAPAN & DOA (section "Harapan & Doa")
// Tambah/hapus/ubah bebas. `strong` akan ditebalkan di kalimat.
// --------------------------------------------------------------
export const wishes = [
  {
    text: "Semoga kamu selalu sehat, lahir batin, dan nggak gampang capek ngurusin hal-hal yang bikin pusing.",
    strong: "selalu sehat",
  },
  {
    text: "Semoga semua mimpi dan rencana yang kamu simpen diam-diam, pelan-pelan kejadian satu-satu.",
    strong: "mimpi dan rencana",
  },
  {
    text: "Semoga kamu dikelilingi orang-orang yang beneran sayang kamu apa adanya, bukan yang cuma pas butuh.",
    strong: "dikelilingi orang-orang",
  },
  {
    text: "Semoga di umur baru ini kamu makin sayang sama diri sendiri — nggak keras-keras amat kalau lagi salah.",
    strong: "sayang sama diri sendiri",
  },
  {
    text: "Dan semoga aku masih dikasih kesempatan buat ada di sampingmu, di ulang tahun ini dan yang selanjutnya.",
    strong: "ada di sampingmu",
  },
];

// --------------------------------------------------------------
// PENUTUP (section closing, background gelap di paling bawah)
// --------------------------------------------------------------
export const closing = {
  quote:
    "Terima kasih sudah lahir, Fiorella. Dunia — dan aku — jauh lebih baik karena ada kamu di dalamnya.",
  signature: "Selamat ulang tahun, Fiorella Anatasya 🤍",
  from: "dari Bagas, kekasihmu",
};
