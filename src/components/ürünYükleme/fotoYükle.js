import React, { useState } from "react";
import "../../Styles/fotoYükle.css";

const FotoYükle = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles(filesArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length > 0) {
      console.log("Seçilen dosyalar:", selectedFiles);
      // apiden geri çağırma işlemleri burada yapılacak//
    } else {
      alert("Lütfen fotoğraf yükleyiniz");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="main">
          <label htmlFor="fileInput">Fotoğrafları Seçin:</label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            required
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default FotoYükle;
