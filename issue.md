# Project Planning: ElysiaJS + Drizzle ORM + MySQL Setup

## 1. Overview
Inisialisasi project backend baru pada direktori ini menggunakan **Bun** sebagai runtime/package manager, **ElysiaJS** sebagai web framework, dan **Drizzle ORM** yang terhubung ke database **MySQL**.

Dokumen ini disusun sebagai panduan high-level bagi programmer atau agent model pelaksana untuk mengimplementasikan setup dasar aplikasi sampai siap dikembangkan lebih lanjut.

---

## 2. Tech Stack
- **Runtime & Package Manager**: Bun
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM (`drizzle-orm`, `drizzle-kit`)
- **Database Driver**: MySQL (`mysql2`)
- **Language**: TypeScript

---

## 3. High-Level Architecture & Project Structure
Struktur folder disarankan ringkas dan modular:

```text
.
├── src/
│   ├── db/              # Koneksi database & schema Drizzle
│   │   ├── index.ts     # Client / connection instance Drizzle
│   │   └── schema.ts    # Definisi tabel / schema Drizzle
│   ├── routes/          # Handler / endpoint API
│   └── index.ts         # Entry point aplikasi Elysia
├── drizzle.config.ts    # Konfigurasi Drizzle Kit untuk migrasi
├── .env.example         # Template environment variables
├── package.json
└── tsconfig.json
```

---

## 4. Implementation Steps

### Phase 1: Project Initialization & Dependencies
- Inisialisasi project TypeScript menggunakan Bun (`bun init`).
- Pasang dependency utama:
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- Pasang dev dependencies:
  - `drizzle-kit`
  - Type definitions yang diperlukan (jika belum tercakup).

### Phase 2: Environment Configuration
- Buat file `.env.example` dan `.env` untuk konfigurasi koneksi database MySQL:
  - `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`.
  - `PORT` untuk HTTP server.
- Tambahkan `.env` ke `.gitignore` agar kredensial tidak ter-commit.

### Phase 3: Database & Drizzle Setup
- **Koneksi**: Konfigurasi koneksi database MySQL menggunakan connection pool (`mysql2/promise`) dan inisialisasi instance Drizzle ORM.
- **Schema**: Buat satu contoh schema tabel sederhana (misalnya tabel `users` atau `items`) untuk validasi koneksi dan migrasi.
- **Drizzle Config**: Buat `drizzle.config.ts` untuk mengarahkan schema dan folder output migrasi.
- **NPM Scripts**: Tambahkan script di `package.json` untuk menjalankan migrasi / push schema (contoh: `db:generate`, `db:push`, atau `db:migrate`).

### Phase 4: ElysiaJS Application Setup
- Buat server Elysia pada `src/index.ts`.
- Tambahkan endpoint dasar:
  - `GET /` atau `GET /health` untuk health-check server.
  - Minimal 1 endpoint contoh (misal: `GET /users` atau `POST /users`) yang berinteraksi dengan database via Drizzle.
- Konfigurasi port server agar membaca environment variable dengan fallback default (misal: 3000).

### Phase 5: Verification & Run Scripts
- Tambahkan script `dev` dan `start` pada `package.json` menggunakan `bun --watch src/index.ts`.
- Pastikan aplikasi dapat dijalankan tanpa error TypeScript maupun runtime error.

---

## 5. Acceptance Criteria (Definition of Done)
1. Project dapat dijalankan secara lokal dengan perintah `bun run dev`.
2. Endpoint health check merespons dengan status `200 OK`.
3. Drizzle ORM berhasil terhubung ke MySQL dan dapat mengeksekusi query dasar terhadap schema contoh.
4. Terdapat `.env.example` yang jelas untuk panduan konfigurasi environment.
5. Setup tetap bersih, modular, dan siap digunakan untuk penambahan fitur berikutnya.
