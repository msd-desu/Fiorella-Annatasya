# Untuk Fiorella 🤍

Website ulang tahun, dibangun dengan Next.js.

## Cara isi konten (foto, musik, cerita)

**Semua yang perlu diisi ada di satu file:** `src/data/content.js`

Nggak perlu buka file lain. Buka file itu, isi bagian-bagian berikut:

### 1. Foto berdua & galeri (dari imgbb)
- Upload foto ke [imgbb.com](https://imgbb.com)
- Setelah upload, klik kanan pada gambar hasil upload → **"Copy image address"**
- URL-nya biasanya formatnya `https://i.ibb.co/xxxxxxx/nama-file.jpg`
- Tempel di `couplePhoto.url` (foto utama) dan array `galleryPhotos` (galeri, isi `url` tiap item)

### 2. Musik (embed Spotify)
- Buka lagu yang mau dipakai di aplikasi/situs Spotify
- Klik titik tiga (**...**) → **Share** → **Embed track**
- Dari kode yang muncul, copy URL di dalam `src="..."` (diawali `https://open.spotify.com/embed/track/`)
- Tempel di `music.spotifyEmbedUrl`

### 3. Pesan romantis, timeline, harapan
- Semua teksnya sudah terisi draft di `content.js` (`loveLetter`, `timeline`, `wishes`)
- Tinggal edit langsung di situ sesuai cerita asli kalian

Setelah edit `content.js`, simpan filenya — kalau lagi jalanin `npm run dev`, perubahan langsung muncul di browser tanpa perlu restart.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Deploy ke Vercel

**Cara termudah (tanpa command line):**
1. Push folder ini ke repo GitHub (bisa lewat GitHub Desktop kalau nggak familiar terminal)
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repo tadi
3. Vercel otomatis mendeteksi ini project Next.js, klik **Deploy**
4. Selesai — dapat link `namaproject.vercel.app`

**Lewat terminal (kalau sudah install Vercel CLI):**
```bash
npm install -g vercel
vercel
```
Ikuti instruksi yang muncul di layar.

## Struktur folder

```
src/
  app/
    layout.js       -> font & metadata halaman
    page.js          -> penggabung Landing + MainContent
    globals.css       -> semua styling
  components/
    Landing.js         -> halaman pertama (tombol "gak mau" & "ayo")
    Hero.js             -> sapaan pembuka setelah klik "ayo"
    LoveLetter.js       -> pesan romantis
    CouplePhoto.js      -> foto berdua
    MusicPlayer.js      -> embed Spotify
    Gallery.js           -> galeri foto
    Timeline.js          -> perjalanan hubungan
    Wishes.js             -> harapan & doa
    Closing.js             -> penutup
  data/
    content.js               -> SEMUA konten yang perlu diisi (mulai dari sini)
```
