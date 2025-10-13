# Trace-Guard Setup Guide

> Panduan lengkap setup project Trace-Guard dari awal hingga running aplikasi

## 📋 Daftar Isi

1. [Prerequisites](#prerequisites)
2. [Clone & Install Project](#-clone--install-project)
3. [Setup Environment Variables](#-setup-environment-variables)
4. [Setup Blockchain (Ganache)](#-setup-blockchain-ganache)
5. [Compile & Deploy Smart Contract](#-compile--deploy-smart-contract)
6. [Running Aplikasi](#-running-aplikasi)
7. [Troubleshooting](#-troubleshooting)

> **⚠️ PENTING:** Project ini menggunakan Solidity compiler version **0.8.6+commit.11564f7e**

---

## Prerequisites

- ✅ **Node.js** - [Download](https://nodejs.org/download/release/v20.19.0/node-v20.19.0-x64.msi)
- ✅ **Git** - [Download](https://git-scm.com/)
- ✅ **Ganache** - [Download](https://trufflesuite.com/ganache/)
- ✅ **Google Account** (untuk Firebase)
- ✅ **Text Editor** (VS Code)

---

## 🚀 Clone & Install Project

### Step 1: Clone Repository

**Dari GitHub:**
```bash
# Clone repository
git clone https://github.com/ekoalfn/Trace-Guard.git

# Masuk ke folder project
cd Trace-Guard
```

**Atau Download ZIP:**
1. Buka repository di GitHub
2. Klik tombol **Code** → **Download ZIP**
3. Extract file ZIP
4. Buka terminal/command prompt di folder hasil extract

### Step 2: Install Dependencies

```bash
# Install semua package yang diperlukan
npm install --legacy-peer-deps

```

**Proses ini akan menginstall:**
- Next.js (framework)
- React (UI library)
- Firebase (authentication & database)
- Web3.js (blockchain interaction)
- Material-UI (UI components)
- Dan dependencies lainnya

## 🔧 Setup Environment Variables

### Step 1: Copy Template Environment

```bash
# Windows (Command Prompt)
copy .env.example .env.local

# Windows (PowerShell)
Copy-Item .env.example .env.local

# Mac/Linux
cp .env.example .env.local
```

### Step 2: Buka File `.env.local`

Buka file `.env.local` dengan text editor

### Step 3: Isi Environment Variables
---

## 📚 Cara Mendapatkan Environment Variables (Step-by-Step)

### 1️⃣ Firebase Configuration

#### Langkah-langkah:

**A. Buat/Akses Project Firebase**
1. Buka [Firebase Console](https://console.firebase.google.com)
2. Login dengan Google Account
3. Jika sudah punya project, klik project tersebut
4. Jika belum punya, klik **"Add project"** atau **"Create a project"**:
   - Masukkan nama project (contoh: `trace-guard-project`)
   - Klik **Continue**
   - Enable/disable Google Analytics (optional)
   - Klik **Create project**

**B. Dapatkan Firebase Config**
1. Di Firebase Console, klik **⚙️ (Settings icon)** di sidebar kiri atas
2. Pilih **Project settings**
3. Scroll ke bawah ke bagian **"Your apps"**
4. Jika belum ada app, klik icon **</>** (Web) untuk menambah web app:
   - Masukkan app nickname (contoh: `Trace-Guard`)
   - **Jangan** centang Firebase Hosting (optional)
   - Klik **Register app**
5. Anda akan melihat `firebaseConfig` object seperti ini:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
  measurementId: "G-XXXXXXXXXX"
};
```

6. **Copy nilai-nilai tersebut** ke `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

**C. Setup Firebase Authentication (untuk Login/Register)**
1. Di Firebase Console, klik **Authentication** di sidebar
2. Klik **Get started**
3. Pilih tab **Sign-in method**
4. Klik **Email/Password**
5. Enable **Email/Password**
6. Klik **Save**

**D. Setup Firestore Database (Optional - sudah disabled di code)**
1. Di Firebase Console, klik **Firestore Database** di sidebar
2. Klik **Create database**
3. Pilih **Start in test mode** (untuk development)
4. Pilih location (contoh: `asia-southeast1`)
5. Klik **Enable**

---

### 2️⃣ Blockchain Configuration

#### A. Web3 Provider URL

**Untuk Development (Ganache Local):**
1. Download dan install [Ganache](https://trufflesuite.com/ganache/)
2. Buka Ganache
3. Klik **Quickstart** atau **New Workspace**
4. Ganache akan berjalan di `HTTP://127.0.0.1:7545` (default)
5. Copy URL tersebut:
```env
NEXT_PUBLIC_WEB3_PROVIDER_URL=HTTP://127.0.0.1:7545
```

#### B. Contract Address

**Cara mendapatkan Contract Address:**
1. Deploy smart contract `CreateCriminal.sol` ke blockchain
2. Setelah deployment berhasil, Anda akan mendapat contract address
3. Copy address tersebut (format: `0x...`)

**Untuk Ganache Local:**
```bash
# Di terminal, jalankan deployment script
node ethereum/deploy.js
```
Atau gunakan Remix IDE atau Truffle untuk deploy.

Setelah deploy, akan muncul address seperti:
```
Contract deployed at 0xYourContractAddressHere123456789012345678
```

Masukkan ke `.env.local`:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddressHere123456789012345678
```

#### C. Wallet Address

**Dari Ganache:**
1. Buka Ganache
2. Di tab **Accounts**, Anda akan melihat list wallet addresses
3. Copy address pertama (atau address mana saja)
4. Masukkan ke `.env.local`:
```env
NEXT_PUBLIC_WALLET_ADDRESS=0xYourWalletAddressHere1234567890123456789
```

**Dari MetaMask:**
1. Buka MetaMask extension
2. Klik account name di atas
3. Copy address (format: `0x...`)
4. Paste ke `.env.local`

#### D. Gas Limit

Gunakan nilai default atau sesuaikan:
```env
NEXT_PUBLIC_GAS_LIMIT=6721975
```

---

### 3️⃣ Web3.Storage Configuration (Optional - Currently Disabled)

**Note:** Fitur Web3.Storage sudah di-disable di code (menggunakan hardcoded CID). Jika ingin mengaktifkan kembali:

1. Buat account di [web3.storage](https://web3.storage)
2. Login dengan email
3. Buat space baru
4. Dapatkan DID key dari dashboard
5. Isi di `.env.local`:
```env
NEXT_PUBLIC_WEB3_STORAGE_EMAIL=your_email@gmail.com
NEXT_PUBLIC_WEB3_STORAGE_DID_KEY=did:key:z6MkXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## ✅ Verifikasi Setup

Setelah mengisi semua environment variables, file `.env.local` Anda seharusnya terlihat seperti ini:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Blockchain Configuration
NEXT_PUBLIC_WEB3_PROVIDER_URL=HTTP://127.0.0.1:7545
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddressHere123456789012345678
NEXT_PUBLIC_WALLET_ADDRESS=0xYourWalletAddressHere1234567890123456789
NEXT_PUBLIC_GAS_LIMIT=6721975

# Web3.Storage Configuration (Optional - Currently Disabled)
NEXT_PUBLIC_WEB3_STORAGE_EMAIL=your_email@gmail.com
NEXT_PUBLIC_WEB3_STORAGE_DID_KEY=did:key:z6MkXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 🔗 Setup Blockchain (Ganache)

### Step 1: Install & Jalankan Ganache

1. **Download Ganache** dari [trufflesuite.com/ganache](https://trufflesuite.com/ganache/)
2. **Install** aplikasi Ganache
3. **Buka** Ganache
4. Klik **Quickstart** untuk membuat workspace baru

### Step 2: Konfigurasi Ganache

Ganache akan otomatis:
- ✅ Membuat 10 account dengan masing-masing 100 ETH
- ✅ Running di `HTTP://127.0.0.1:7545`
- ✅ Menyediakan private keys untuk setiap account

### Step 3: Copy Credentials dari Ganache

**A. Copy RPC Server URL:**
- Lihat di bagian atas Ganache: `RPC SERVER: HTTP://127.0.0.1:7545`
- Paste ke `.env.local`:
  ```env
  NEXT_PUBLIC_WEB3_PROVIDER_URL=HTTP://127.0.0.1:7545
  ```

**B. Copy Wallet Address:**
- Di tab **Accounts**, pilih account pertama
- Copy **Address** (contoh: `0xYourWalletAddressHere1234567890123456789`)
- Paste ke `.env.local`:
  ```env
  NEXT_PUBLIC_WALLET_ADDRESS=0xYourWalletAddressHere1234567890123456789
  ```

**C. Copy Private Key (untuk deployment):**
- Klik icon **🔑 (key)** di sebelah address
- Copy **Private Key**
- Paste ke `.env.local`:
  ```env
  DEPLOYER_PRIVATE_KEY=your_private_key_here
  ```

⚠️ **PENTING:** Jangan tutup Ganache selama development!

---

## 📜 Compile & Deploy Smart Contract

### Opsi 1: Menggunakan Remix IDE (Recommended)

#### Step 1: Buka Remix IDE

1. Buka browser dan akses [Remix IDE](https://remix.ethereum.org)
2. Tunggu hingga Remix IDE selesai loading

#### Step 2: Upload Contract Files

1. **Di sidebar kiri, klik icon 📁 File Explorer**
2. **Buat folder baru (optional):**
   - Klik kanan di workspace → **New Folder**
   - Beri nama: `contracts`
3. **Upload file contract:**
   - Klik icon **📤 Upload** atau drag & drop file `contracts`:
     - `ethereum\contracts\criminal_records.sol`
   - Atau copy-paste isi file ke Remix

#### Step 3: Compile Contract

1. **Klik icon 🔨 Solidity Compiler** di sidebar kiri
2. **Pilih compiler version:** `0.8.6+commit.11564f7e`
   - Klik dropdown **Compiler**
   - Scroll dan pilih versi `0.8.6+commit.11564f7e`
3. **Compile Criminal.sol terlebih dahulu:**
   - Pilih file `criminal_records.sol` di File Explorer
   - Klik tombol **Compile criminal_records.sol**
   - Tunggu hingga muncul ✅ centang hijau

#### Step 4: Download Artifacts (Metadata & ABI)

Setelah compile berhasil, download artifacts untuk kedua contract:

**A. Download Criminal Artifacts:**
Download semua file yang ada di folder `artifacts` ke folder `artifacts` di project local

Contoh: https://jam.dev/c/213eab04-e834-4e46-ad49-e160a84aec31
**Struktur folder artifacts seharusnya:**
```
artifacts/
├── Criminal_metadata.json
├── Criminal.json
├── CreateCriminal_metadata.json
├── CreateCriminal.json
└── build-info/
    └── build-info.json (optional)
```

#### Step 5: Connect ke Ganache

1. **Pastikan Ganache sudah running** di `HTTP://127.0.0.1:7545`
2. **Di Remix IDE, klik icon 🚀 Deploy & Run Transactions**
3. **Di dropdown Environment, pilih:** `Web3 Provider`
4. **Popup akan muncul, masukkan:** `http://127.0.0.1:7545`
5. **Klik OK**
6. **Verifikasi koneksi:**
   - Di bagian **Account**, Anda akan melihat account dari Ganache
   - Balance akan menunjukkan ~100 ETH

#### Step 6: Deploy Contract

**A. Deploy Criminal.sol terlebih dahulu (jika diperlukan):**
1. Di dropdown **Contract**, pilih `Criminal`
2. Klik tombol **Deploy** (orange)
3. Tunggu hingga muncul di **Deployed Contracts**

**B. Deploy CreateCriminal.sol:**
1. Di dropdown **Contract**, pilih `CreateCriminal`
2. Klik tombol **Deploy** (orange)
3. **Tunggu beberapa detik** hingga deployment selesai
4. Contract akan muncul di bagian **Deployed Contracts**

#### Step 7: Copy Contract Address

1. **Di Deployed Contracts**, akan terlihat contract `CREATECRIMINAL`
2. **Copy address** dengan klik icon 📋 di sebelah nama contract
   - Address format: `0x...` (42 karakter)
3. **Paste ke `.env.local`:**
   ```env
   NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddressHere123456789012345678
   ```
4. **Save file `.env.local`**

#### Step 8: Verifikasi Deployment

**Di Ganache:**
1. Buka aplikasi Ganache
2. Klik tab **Transactions**
3. Anda akan melihat transaksi CONTRACT CREATION
4. Balance account pertama akan berkurang sedikit (untuk gas fee)

**Di Remix IDE:**
1. Di Deployed Contracts, expand contract `CREATECRIMINAL`
2. Anda akan melihat semua function yang tersedia
3. Test function `getDeployedContracts` (klik tombol biru)
4. Seharusnya return array kosong `[]` (karena belum ada criminal)

✅ **Deployment berhasil!**
## 🎯 Running Aplikasi

### Step 1: Pastikan Semua Sudah Ready

**Checklist:**
- ✅ Dependencies sudah terinstall (`npm install --legacy-peer-deps`)
- ✅ File `.env.local` sudah terisi lengkap
- ✅ Firebase sudah setup (Authentication enabled)
- ✅ Ganache sudah running
- ✅ Smart contract sudah di-compile di Remix IDE (compiler 0.8.6)
- ✅ Artifacts sudah di-download dan disimpan di folder `artifacts/`
- ✅ Smart contract sudah di-deploy ke Ganache
- ✅ Contract address sudah di `.env.local`

### Step 2: Start Development Server

```bash
# Jalankan development server
npm run dev

# Atau dengan yarn
yarn dev
```

**Output yang diharapkan:**
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully
```

### Step 3: Buka Aplikasi di Browser

1. Buka browser (Chrome/Firefox/Edge)
2. Akses: **http://localhost:3000**
3. Anda akan melihat halaman login Trace-Guard

### Step 4: Test Aplikasi

**A. Test Register & Login:**
1. Klik **Sign up** atau buat account baru
2. Masukkan email & password
3. Klik **Register**
4. Login dengan credentials yang baru dibuat

**B. Test Add Criminal:**
1. Setelah login, klik **Tambahkan Pidana**
2. Isi form dengan data criminal
3. Klik **Submit**
4. Tunggu transaksi blockchain selesai (cek Ganache untuk melihat transaksi)
5. Anda akan di-redirect ke halaman utama

**C. Test View Criminal:**
1. Di halaman utama, Anda akan melihat list criminals
2. Klik salah satu criminal untuk melihat detail
3. Test fitur **Tambahkan Catatan Kriminal**

---

## 🔍 Troubleshooting
### Error: "Firebase App already exists"

**Solusi:** Sudah fixed di `firebase.js`. Jika masih error, restart dev server:
```bash
# Ctrl+C untuk stop server
# Kemudian jalankan lagi
npm run dev
```

### Error: "Returned values aren't valid"

**Penyebab:** Contract address salah atau contract belum di-deploy.

**Solusi:**
1. Pastikan Ganache running
2. Deploy ulang smart contract
3. Update `NEXT_PUBLIC_CONTRACT_ADDRESS` di `.env.local`
4. Restart dev server

### Error: "Cannot connect to Ganache"

**Solusi:**
1. Pastikan Ganache running
2. Cek RPC URL di `.env.local` sesuai dengan Ganache (default: `HTTP://127.0.0.1:7545`)
3. Restart Ganache jika perlu
4. Restart dev server

### Environment Variables Tidak Terbaca

**Solusi:**
1. Pastikan nama file adalah `.env.local` (bukan `.env.local.txt`)
2. Pastikan file ada di **root project** (sejajar dengan `package.json`)
3. Pastikan nama variable menggunakan prefix `NEXT_PUBLIC_` untuk client-side
4. **Restart dev server** setelah mengubah `.env.local`

### Port 3000 Sudah Digunakan

**Solusi:**
```bash
# Gunakan port lain
npm run dev -- -p 3001

# Atau kill process yang menggunakan port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

---

## 📞 Support & Resources

### Dokumentasi:
- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Web3.js Docs](https://web3js.readthedocs.io/)
- [Ganache Docs](https://trufflesuite.com/docs/ganache/)

### Helpful Commands:

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter

# Troubleshooting
npm cache clean --force    # Clear npm cache
rm -rf .next               # Clear Next.js cache
```

---

## ✅ Quick Checklist

Sebelum mulai development, pastikan:

**Prerequisites:**
- [ ] Node.js (v20.19) & npm terinstall
- [ ] Git terinstall
- [ ] Ganache terinstall dan running

**Setup Project:**
- [ ] Project sudah di-clone/download dari GitHub
- [ ] `npm install --legacy-peer-deps` berhasil
- [ ] File `.env.local` sudah dibuat dari `.env.example`

**Firebase Setup:**
- [ ] Firebase project sudah dibuat
- [ ] Firebase Authentication enabled (Email/Password)
- [ ] Firebase credentials sudah di `.env.local`

**Smart Contract Setup:**
- [ ] Contract files di-upload ke Remix IDE
- [ ] Contract di-compile dengan compiler 0.8.6
- [ ] Artifacts (metadata & ABI) sudah di-download
- [ ] Artifacts disimpan di folder `artifacts/`
- [ ] Remix IDE sudah connect ke Ganache (Web3 Provider)
- [ ] Smart contract sudah di-deploy ke Ganache
- [ ] Contract address sudah di `.env.local`
- [ ] Deployment terverifikasi di Ganache (Transactions tab)

**Running:**
- [ ] Dev server running tanpa error (`npm run dev`)
- [ ] Aplikasi bisa diakses di `http://localhost:3000`
- [ ] Bisa register & login
- [ ] Bisa add criminal (transaksi blockchain berhasil)

---

## 📝 Environment Variables

### Firebase Configuration
Dapatkan dari Firebase Console (Project Settings):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### Blockchain Configuration
- `NEXT_PUBLIC_WEB3_PROVIDER_URL` - URL RPC provider (Ganache local atau Infura)
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - Address contract CreateCriminal yang sudah di-deploy
- `NEXT_PUBLIC_WALLET_ADDRESS` - Address wallet untuk mengirim transaksi
- `NEXT_PUBLIC_GAS_LIMIT` - Gas limit untuk transaksi (default: 6721975)

### Web3.Storage Configuration (Opsional)
Dapatkan dari [web3.storage](https://web3.storage):
- `NEXT_PUBLIC_WEB3_STORAGE_EMAIL` - Email akun Web3.Storage
- `NEXT_PUBLIC_WEB3_STORAGE_DID_KEY` - DID key dari Web3.Storage

### Deployment Configuration (Optional)
Hanya diperlukan untuk deployment ke testnet/mainnet:
- `INFURA_API_KEY` - API key dari Infura 
- `DEPLOYER_PRIVATE_KEY` - Private key wallet untuk deployment

## ⚠️ Peringatan Keamanan

1. **JANGAN PERNAH commit file `.env.local` ke Git**
2. **JANGAN share private key Anda dengan siapapun**
3. **Gunakan wallet terpisah untuk development dan production**
4. File `.env.local` sudah ditambahkan ke `.gitignore`

## 📂 File yang Diubah

Berikut file yang telah diupdate untuk menggunakan environment variables:

1. ✅ `firebase.js` - Firebase configuration
2. ✅ `ethereum/web3.js` - Web3 provider URL
3. ✅ `ethereum/createCriminal.js` - Contract address
4. ✅ `ethereum/deploy.js` - Infura API key & Private key
5. ✅ `pages/addCriminalForm.js` - Wallet address, gas limit, Web3.storage credentials
6. ✅ `pages/addRecord/[id].js` - Wallet address, gas limit
7. ✅ `.gitignore` - Added environment files

## 🔄 Migration dari Hardcoded Values

Jika Anda sudah memiliki project yang berjalan:

1. Nilai-nilai lama sudah disimpan di `.env.local`
2. Pastikan semua environment variables terisi dengan benar
3. Test aplikasi untuk memastikan semuanya berfungsi
4. Jika ada error, check console untuk missing environment variables

## 🚀 Next Steps

1. Verifikasi semua environment variables sudah terisi
2. Test fitur-fitur aplikasi:
   - Login/Register
   - Add Criminal
   - Add Record
   - View Criminal Details
3. Untuk production, gunakan environment variables yang berbeda
4. Pertimbangkan menggunakan secret management service untuk production

## 📞 Support

Jika ada masalah dengan environment variables, check:
1. Apakah file `.env.local` ada di root project?
2. Apakah nama variable sudah benar? (case-sensitive)
3. Apakah development server sudah di-restart setelah mengubah `.env.local`?
4. Untuk client-side variables, pastikan menggunakan prefix `NEXT_PUBLIC_`
