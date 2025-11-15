'use client';

import React, { useState, useEffect } from 'react';

// FAQ Item Component
const FaqItem = ({ faq, onToggle, isActive }) => {
  const { question, answer } = faq;

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={onToggle}>
      <div className="faq-question">
        {question}
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Main Page Component
export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index: any) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apa yang terjadi jika saya gagal bayar?',
      answer: 'Jika pinjaman tidak dapat dilunasi pada tanggal jatuh tempo, smart contract escrow akan secara otomatis mentransfer kepemilikan NFT Anda ke lender. Ini adalah proses akhir. Lender kemudian akan memiliki hak atas persentase pendapatan royalti dari lagu tersebut.',
    },
    {
      question: 'Bagaimana MuDING memastikan pendapatan royalti benar-benar dibagikan?',
      answer: 'Melalui perjanjian hukum yang mengikat di awal, 100% pendapatan dari distributor dialihkan ke kami. Kami kemudian menggunakan smart contract untuk membagikannya secara otomatis. Artis tidak pernah memegang 100% pendapatan di awal, sehingga menghilangkan risiko penipuan.',
    },
    {
      question: 'Apakah saya harus mentokenisasi 100% lagu saya?',
      answer: 'Tidak. Anda memiliki fleksibilitas penuh. Anda bisa memutuskan untuk mentokenisasi hanya 10%, 25%, atau persentase lain dari pendapatan lagu Anda, sesuai dengan kebutuhan pendanaan Anda.',
    },
    {
      question: 'Apakah ini aman?',
      answer: 'Keamanan kami berlapis. Kami menggunakan perjanjian hukum di dunia nyata untuk mengamankan aliran pendapatan, dan smart contract yang telah diaudit secara profesional di blockchain untuk mengotomatisasi pinjaman dan distribusi, menghilangkan risiko kesalahan manusia atau manipulasi.',
    },
  ];

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">MuDING</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-icons">
            {/* Music Note */}
            <svg className="hero-icon icon-music" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            {/* Crypto Coin */}
            <svg className="hero-icon icon-crypto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" /><path d="M15.5 8.5c-1.8-1.8-4.2-2.5-6.5-2.5V9" /><path d="M8.5 15.5c1.8 1.8 4.2 2.5 6.5 2.5V15" /></svg>
            {/* Finance Chart */}
            <svg className="hero-icon icon-finance" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
            {/* Sound Wave */}
            <svg className="hero-icon icon-sound" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4" /><path d="M7 8v8" /><path d="M11 6v12" /><path d="M15 8v8" /><path d="M19 10v4" /></svg>
          </div>
          <div className="container hero-content">
            <h1 className="hero-title">Buka Nilai Sebenarnya dari Musik Anda.</h1>
            <p className="hero-subtitle">
              MuDING adalah platform pinjaman P2P yang memungkinkan Anda mengubah <em>Master Recording Rights</em> menjadi jaminan untuk mendapatkan dana instan, tanpa menjual kepemilikan Anda.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary">Mulai Verifikasi Aset Anda</a>
              <a href="#" className="btn btn-secondary">Jelajahi Marketplace</a>
            </div>
          </div>
        </section>

        {/* What Is MuDING? Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">MuDING: Jembatan Antara Musik dan Keuangan Terdesentralisasi</h2>
            <p className="section-subtitle">
              MuDING (Music Lending) adalah sebuah protokol pinjaman peer-to-peer (P2P) revolusioner yang dibangun di atas teknologi blockchain. Kami memecahkan salah satu masalah terbesar bagi para musisi dan pemegang hak cipta: <strong>aset yang tidak likuid</strong>.
              <br /><br />
              Intinya, MuDING memberikan Anda kekuatan finansial atas karya Anda, memungkinkan Anda mendanai proyek berikutnya, tur, atau apa pun yang Anda butuhkan, sambil tetap memegang kontrol penuh atas musik Anda.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="section">
          <div className="container">
            <h2 className="section-title">Proses Kami: Terverifikasi di Dunia Nyata, Otomatis di Blockchain</h2>
            <p className="section-subtitle">Keamanan dan kepercayaan adalah fondasi kami. Kami menggabungkan uji tuntas (due diligence) yang ketat di dunia nyata dengan otomatisasi smart contract yang tidak bisa dimanipulasi.</p>
            <div className="how-it-works-grid">
              <div className="how-it-works-card">
                <h3>1. Verifikasi & Tokenisasi (Off-Chain)</h3>
                <p>Artis mengajukan aset (master rights) beserta bukti kepemilikan dan laporan pendapatan historis. Tim kami memverifikasi segalanya sebelum mencetak NFT yang mewakili hak pendapatan.</p>
              </div>
              <div className="how-it-works-card">
                <h3>2. Proses Pinjaman P2P (On-Chain)</h3>
                <p>Artis mendaftarkan NFT di marketplace. Lender dari seluruh dunia mengajukan penawaran. Dana (stablecoin) dikirim ke artis dan NFT dikunci dalam smart contract escrow.</p>
              </div>
              <div className="how-it-works-card">
                <h3>3. Distribusi & Penyelesaian (Otomatis)</h3>
                <p>Pendapatan royalti dikonversi ke stablecoin dan didistribusikan secara otomatis oleh smart contract. Setelah lunas, NFT kembali ke artis. Jika gagal bayar, NFT ditransfer ke lender.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="section">
          <div className="container">
            <h2 className="section-title">Mengapa Memilih MuDING?</h2>
            <div className="advantages-grid">
              <div className="advantages-column">
                <h3>Bagi Musisi & Pemegang Hak</h3>
                <div className="advantage-item">
                  <h4>Likuiditas Tanpa Menjual</h4>
                  <p>Dapatkan dana tunai yang Anda butuhkan tanpa harus menjual aset master rights Anda selamanya.</p>
                </div>
                <div className="advantage-item">
                  <h4>Pertahankan Kontrol</h4>
                  <p>Anda tetap memegang kendali kreatif penuh. Kami hanya memfasilitasi pinjaman.</p>
                </div>
                <div className="advantage-item">
                  <h4>Akses Global & Cepat</h4>
                  <p>Dapatkan pendanaan dari jaringan global dengan proses berbasis smart contract yang cepat.</p>
                </div>
              </div>
              <div className="advantages-column">
                <h3>Bagi Pemberi Pinjaman (Lender)</h3>
                <div className="advantage-item">
                  <h4>Kelas Aset Baru</h4>
                  <p>Akses ke royalti musik yang tidak berkorelasi dengan pasar finansial tradisional.</p>
                </div>
                <div className="advantage-item">
                  <h4>Jaminan Terverifikasi</h4>
                  <p>Setiap pinjaman dijamin oleh aset yang telah melalui uji tuntas ketat dengan data transparan.</p>
                </div>
                <div className="advantage-item">
                  <h4>Pendapatan Pasif yang Aman</h4>
                  <p>Dapatkan bunga kompetitif, dan jika terjadi gagal bayar, Anda menerima aset (NFT) yang menghasilkan pendapatan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="section">
          <div className="container">
            <h2 className="section-title">Fitur Utama Platform</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Marketplace Pinjaman P2P</h4>
                <p>Antarmuka yang bersih dan intuitif untuk mengelola portofolio Anda.</p>
              </div>
              <div className="feature-card">
                <h4>Sistem Verifikasi Aset (KYA)</h4>
                <p>Proses Know Your Asset kami memastikan setiap NFT didukung oleh aset dunia nyata yang sah.</p>
              </div>
              <div className="feature-card">
                <h4>Jembatan Royalti Otomatis</h4>
                <p>Mekanisme aman yang mengonversi pendapatan fiat menjadi stablecoin secara on-chain.</p>
              </div>
              <div className="feature-card">
                <h4>Escrow Smart Contract</h4>
                <p>Jaminan NFT disimpan dalam smart contract yang telah diaudit untuk pelepasan aset yang adil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">MuDING vs. Tradisional</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th>MuDING</th>
                  <th>Label Rekaman</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kepemilikan Aset</td>
                  <td>Artis Tetap Memiliki</td>
                  <td>Seringkali Diambil Alih</td>
                  <td>Tidak Relevan</td>
                </tr>
                <tr>
                  <td>Kontrol Kreatif</td>
                  <td>100% Milik Artis</td>
                  <td>Sering Hilang / Dibatasi</td>
                  <td>100% Milik Artis</td>
                </tr>
                <tr>
                  <td>Kecepatan Dana</td>
                  <td>Cepat (Hari/Jam)</td>
                  <td>Lambat (Bulan)</td>
                  <td>Sangat Lambat (Bulan)</td>
                </tr>
                <tr>
                  <td>Proses</td>
                  <td>Transparan & Otomatis</td>
                  <td>Tertutup & Rumit</td>
                  <td>Birokratis & Rumit</td>
                </tr>
                <tr>
                  <td>Akses</td>
                  <td>Global, 24/7</td>
                  <td>Sangat Terbatas</td>
                  <td>Terbatas Lokal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Secondary CTA Section */}
        <section className="section">
          <div className="container">
            <div className="secondary-cta-grid">
              <div className="secondary-cta-column">
                <h3>Untuk Musisi</h3>
                <p>Karya Anda memiliki nilai. Jangan biarkan terkunci. Mulailah proses verifikasi aset Anda hari ini.</p>
                <a href="#" className="btn btn-primary">Pelajari Kriteria Verifikasi</a>
              </div>
              <div className="secondary-cta-column">
                <h3>Untuk Pemberi Pinjaman</h3>
                <p>Jadilah bagian dari revolusi keuangan musik. Diversifikasikan portofolio Anda dengan aset yang didukung pendapatan riil.</p>
                <a href="#" className="btn btn-secondary">Lihat Aset yang Tersedia</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-title">Pertanyaan Umum (FAQ)</h2>
            <p className="section-subtitle">Beberapa pertanyaan yang sering diajukan tentang platform kami.</p>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isActive={activeFaq === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MuDING. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
