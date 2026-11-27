# cuplik.jipraks.id

Landing page aplikasi Cuplik (Windows), plus Kebijakan Privasi dan Syarat dan Ketentuan yang ditautkan dari aplikasi. HTML dan CSS statis, tanpa build step. Folder ini terpisah dari situs jipraks.id di folder induk (GitHub Pages) dan di-deploy sendiri ke Cloudflare Pages.

## Isi

- `index.html`: landing page Bahasa Indonesia. `en/index.html`: versi Inggris. Tombol ID/EN di navigasi berpindah antar keduanya
- `privacy-policy.html`, `terms-condition.html`: dilayani sebagai `/privacy-policy` dan `/terms-condition`. Aplikasi menautkan persis ke dua URL ini (layar persetujuan pertama kali buka dan listing Microsoft Store), jadi jangan ganti namanya
- `404.html`: halaman tidak ditemukan
- `styles.css`: semua style. Warna, radius, dan font mengikuti token aplikasi (`yt-short-clipper-v2/src/styles/globals.css`) dan `DESIGN.md`
- `fonts/`: Plus Jakarta Sans variable (latin dan latin-ext), disalin dari `@fontsource-variable/plus-jakarta-sans`, lisensi SIL OFL
- `assets/shots/`: screenshot aplikasi dari `store/screenshots/{id,en}`, dipotong tanpa judul yang menempel lalu dikecilkan ke WebP 900 dan 1600 px
- `assets/clips/`: contoh klip 9:16 dari `public/sample-*.png`. Semua footage adalah video stok Mixkit dan data proyek, channel, serta akun di screenshot adalah data demo
- `_headers`: header keamanan dan cache untuk Cloudflare Pages
- `wrangler.toml`: konfigurasi proyek Cloudflare Pages

## Deploy ke Cloudflare Pages

Lewat dashboard (Workers & Pages, Create, Pages, Connect to Git):

- Repository: `jipraks/jipraks.id`, branch `main`
- Framework preset: None
- Build command: kosongkan
- Build output directory: `/`
- Root directory (advanced): `cuplik`
- Lalu di Custom domains tambahkan `cuplik.jipraks.id`

Atau dari terminal, dari folder ini: `npx wrangler pages deploy`

Cloudflare Pages otomatis melayani `privacy-policy.html` di `/privacy-policy`.

## Pratinjau lokal

Dari folder ini: `npx serve .`

## Yang masih perlu diperbarui

- Badge Microsoft Store masih bertanda "Segera hadir" dan belum ditautkan. Setelah listing lolos sertifikasi, jadikan badge tautan ke https://apps.microsoft.com/detail/9PHPBBFP7PPH dan hapus label itu (`index.html` dan `en/index.html`)
- Tombol "Download untuk Windows" masih membuka dialog "Segera hadir" (`site.js`). Setelah listing Store aktif, ganti tombolnya jadi tautan ke Store
- `site.js` juga memperbarui jumlah bintang GitHub di footer dari API GitHub. Angka di HTML dipakai kalau API gagal
