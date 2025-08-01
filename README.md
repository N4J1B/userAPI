# userAPI

Ini adalah API sederhana untuk manajemen pengguna yang dibuat dengan AdonisJS.

## Instalasi

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/N4J1B/userAPI.git
    cd userAPI
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    ```

3.  **Buat file `.env`:**
    Salin `.env.example` menjadi `.env` dan sesuaikan variabel di dalamnya.
    ```bash
    cp .env.example .env
    ```

4.  **Generate kunci aplikasi:**
    ```bash
    node ace generate:key
    ```

5.  **Jalankan migrasi database:**
    ```bash
    node ace migration:run
    ```

## Menjalankan Aplikasi

-   **Mode Pengembangan (dengan Hot-Reload):**
    ```bash
    npm run dev
    ```

-   **Mode Produksi:**
    Pertama, build aplikasi:
    ```bash
    npm run build
    ```
    Kemudian, jalankan server:
    ```bash
    npm run start
    ```

## Environtment Variabel

Pastikan Anda mengatur variabel berikut di file `.env` Anda:

```
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY= # Akan di-generate dengan `node ace generate:key`
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=app
```

## Dokumentasi API

live endpoint : https://api.ainuns.my.id/userapi
more documentation : https://documenter.getpostman.com/view/46983556/2sB3BALXfS

Endpoint API berikut tersedia:

-   **`GET /users`**
    -   Mengambil daftar semua pengguna.

-   **`GET /user/:id`**
    -   Mengambil detail pengguna berdasarkan `id`.

-   **`POST /user`**
    -   Membuat pengguna baru.
    -   **Body Request:**
        ```json
        {
          "nama": "Nama Lengkap",
          "email": "email@contoh.com",
          "nomorTelepon" : "081923789120",
          "departemen" : "IT"
        }
        ```

-   **`PUT /user/:id`**
    -   Memperbarui data pengguna berdasarkan `id`.
    -   **Body Request:** (Sertakan field yang ingin diubah)
        ```json
        {
          "nama": "Nama Baru",
          "email": "emailbaru@contoh.com"
        }
        ```

-   **`DELETE /user/:id`**
    -   Menghapus pengguna berdasarkan `id`.
