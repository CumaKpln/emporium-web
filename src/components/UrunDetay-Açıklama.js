import React, { useState } from "react";

function Icerik() {
  const [aktifTab, setAktifTab] = useState("ilanDetaylari");

  return (
    <div className="icerik mb-5">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${aktifTab === "ilanDetaylari" ? "active" : ""
                  }`}
                onClick={() => setAktifTab("ilanDetaylari")}
                href="#!"
              >
                İlan Detayları
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${aktifTab === "konumu" ? "active" : ""}`}
                onClick={() => setAktifTab("konumu")}
                href="#!"
              >
                Konumu
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {aktifTab === "ilanDetaylari" && (
            <>
              <h5 className="card-title">1</h5>
              <p className="card-text">İlan detaylarına ait içerik burada.</p>
            </>
          )}
          {aktifTab === "konumu" && (
            <>
              <h5 className="card-title">2</h5>
              <p className="card-text">Konum bilgileri burada.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Icerik;
