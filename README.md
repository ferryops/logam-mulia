## API Public

Mini project, bikin API public dengan scraping (cheerio) dan framework Next.js

```
  https://logam-mulia.vercel.app/
```

### List Website

- [Logam Mulia](https://logammulia.com)

### Menu

- [Cek Harga Emas Antam](https://logam-mulia.vercel.app/cek-harga-emas-antam)
- [Cek Harga Buyback Emas Antam](https://logam-mulia.vercel.app/cek-harga-buyback-emas-antam)

## Endpoint API

### 1. **[GET] /api/price-gold-antam-buy**

**Deskripsi:** Mengembalikan harga beli emas Antam.

**Response:**

```json
[
  [1741853651000, 1563000],
  [1741939773000, 1591000],
  [1742026986000, 1588000]
]
```

### 2. **[GET] /api/price-gold-antam-sell**

**Deskripsi:** Mengembalikan harga jual emas Antam.

**Response:**

```json
[
  [1741853651000, 1563000],
  [1741939773000, 1591000],
  [1742026986000, 1588000]
]
```
