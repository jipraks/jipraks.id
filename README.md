# jipraks.id

Landing page PT Jipraks Digital Indonesia. HTML dan CSS statis, tanpa build step, di-host di GitHub Pages.

## Isi

- `index.html`: halaman utama
- `styles.css`: semua style dan design token
- `i18n.js`: tombol bahasa EN / ID. Teks Inggris (bawaan) ada di HTML, teks Indonesia di file ini. Bahasa dipilih dari `?lang=`, lalu pilihan pengunjung sebelumnya, lalu bahasa utama browser (Indonesia -> ID, selain itu EN)
- `motion.js`: animasi muncul saat scroll. Konten tetap tampil kalau script gagal dimuat atau pengunjung memilih reduced motion
- `assets/`: ikon dan screenshot asli FreeKasir, Ceritopia, dan Akunpas. FreeKasir dan Ceritopia disalin dari situsnya; aset Akunpas dari repo custom-erp (`docs/brand`), screenshot-nya diambil dari aplikasi dengan data contoh
- `404.html`: halaman tidak ditemukan
- `CNAME`: domain kustom `jipraks.id`
- `links.json` + `scripts/build-links.mjs`: shortlink seperti `jipraks.id/repliz`

## Cache

GitHub Pages menyimpan cache file selama 10 menit. Setiap kali `styles.css`, `i18n.js`, atau `motion.js` diubah, naikkan angka `?v=` di `index.html` (dan `?v=` untuk `styles.css` di `404.html`). Tanpa itu, pengunjung lama bisa melihat HTML baru dengan CSS lama selama beberapa menit.

## Shortlink

1. Tambah, ubah, atau hapus baris di `links.json` (`"slug": "https://tujuan"`). Slug hanya huruf kecil, angka, dan tanda `-`.
2. Jalankan `node scripts/build-links.mjs`. Script membuat folder `<slug>/index.html` untuk tiap link, dan menghapus halaman buatannya sendiri untuk slug yang sudah tidak ada di daftar.
3. Commit `links.json` beserta folder yang dihasilkan, lalu push.

GitHub Pages tidak bisa membuat redirect 301 dari server, jadi halaman ini mengalihkan di browser (meta refresh + JavaScript). Pengunjung tetap langsung sampai di tujuan, dan cookie affiliate dipasang oleh situs tujuan seperti biasa.

## Deploy ke GitHub Pages

1. Push ke branch `main`.
2. Di GitHub: Settings > Pages > Source: Deploy from a branch, branch `main`, folder `/ (root)`.
3. Di DNS `jipraks.id`, buat 4 record `A` ke `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, dan record `CNAME` untuk `www` ke `jipraks.github.io`.
4. Setelah domain terverifikasi, centang Enforce HTTPS.

## Preview lokal

```bash
npx serve .
```
