// UrunYuklemeSayfasi.js

import React, { useState } from "react";
import "../Styles/UrunEkle.css"; // Stil dosyasını dahil edin

function UrunYuklemeSayfasi() {
  const [kategori, setKategori] = useState("");
  const [altKategori, setAltKategori] = useState("");
  const [urunBasligi, setUrunBasligi] = useState("");
  const [urunAdi, setUrunAdi] = useState("");
  const [urunAciklamasi, setUrunAciklamasi] = useState("");
  const [ozellik, setOzellik] = useState("");
  const [step, setStep] = useState(1); // Adım adım ilerlemek için state

  const handleKategoriChange = (e) => {
    setKategori(e.target.value);
    setAltKategori("");
    setStep(1); // Yeni kategori seçildiğinde adımı sıfırla
  };

  const handleAltKategoriChange = (e) => {
    setAltKategori(e.target.value);
    setStep(2); // Alt kategori seçildiğinde adımı 2'ye yükselt
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      kategori,
      altKategori,
      urunBasligi,
      urunAdi,
      urunAciklamasi,
      ozellik,
    });
  };

  return (
    <div className="container">
      <h2>Ürün Yükleme Sayfası</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-group">
            <label>Kategori Seçin:</label>
            <select
              className="form-control"
              value={kategori}
              onChange={handleKategoriChange}
            >
              <option value="">Kategori Seçin</option>
              <option value="emlak">Emlak</option>
              <option value="araba">Araba</option>
              {/* Diğer kategori seçenekleri buraya eklenebilir */}
            </select>
          </div>
        )}

        {step === 2 && (
          <div className="form-group">
            <label>Alt Kategori Seçin:</label>
            <select
              className="form-control"
              value={altKategori}
              onChange={handleAltKategoriChange}
            >
              <option value="">Alt Kategori Seçin</option>
              {kategori === "emlak" && (
                <>
                  <option value="ev">Ev</option>
                  <option value="arsa">Arsa</option>
                  {/* Diğer alt kategori seçenekleri buraya eklenebilir */}
                </>
              )}
              {kategori === "araba" && (
                <>
                  <option value="sedan">Sedan</option>
                  <option value="hatchback">Hatchback</option>
                  {/* Diğer alt kategori seçenekleri buraya eklenebilir */}
                </>
              )}
            </select>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="form-group">
              <label>Ürün Başlığı:</label>
              <input
                type="text"
                value={urunBasligi}
                onChange={(e) => setUrunBasligi(e.target.value)}
                className="form-control"
                placeholder="Ürün Başlığı Girin"
              />
            </div>
            <div className="form-group">
              <label>Ürün Adı:</label>
              <input
                type="text"
                value={urunAdi}
                onChange={(e) => setUrunAdi(e.target.value)}
                className="form-control"
                placeholder="Ürün Adı Girin"
              />
            </div>
            <div className="form-group">
              <label>Ürün Açıklaması:</label>
              <textarea
                value={urunAciklamasi}
                onChange={(e) => setUrunAciklamasi(e.target.value)}
                className="form-control"
                placeholder="Ürün Açıklaması Girin"
              ></textarea>
            </div>

            {altKategori === "ev" && (
              <div className="form-group">
                <label>Oda Sayısı:</label>
                <input
                  type="text"
                  value={ozellik}
                  onChange={(e) => setOzellik(e.target.value)}
                  className="form-control"
                  placeholder="Oda Sayısı Girin"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UrunYuklemeSayfasi;
