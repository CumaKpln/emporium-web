import React, { useState } from "react";
import data from "../data/db.json"

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

        {data["ilan-ver"].map((product, id) => (
          <div key={id} className="card-body">
            {aktifTab === "ilanDetaylari" && (
              <>
                <p className="card-text">
                  {product.description}
                </p>
              </>
            )}
            {aktifTab === "konumu" && (
              <>
                <p className="card-text"> {product.location}</p>
              </>
            )}
          </div>
        ))};
      </div>
    </div>
  );
}

export default Icerik;
