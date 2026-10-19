# jipraks.id

Landing page PT Jipraks Digital Indonesia. HTML dan CSS statis, tanpa build step, di-host di GitHub Pages.

## Isi

- `index.html`: halaman utama
- `styles.css`: semua style dan design token
- `i18n.js`: tombol bahasa ID / EN. Teks Indonesia ada di HTML, teks Inggris di file ini. Bisa juga dibuka langsung dengan `?lang=en`
- `404.html`: halaman tidak ditemukan
- `CNAME`: domain kustom `jipraks.id`

## Deploy ke GitHub Pages

1. Push ke branch `main`.
2. Di GitHub: Settings > Pages > Source: Deploy from a branch, branch `main`, folder `/ (root)`.
3. Di DNS `jipraks.id`, buat 4 record `A` ke `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, dan record `CNAME` untuk `www` ke `jipraks.github.io`.
4. Setelah domain terverifikasi, centang Enforce HTTPS.

## Preview lokal

```bash
npx serve .
```
