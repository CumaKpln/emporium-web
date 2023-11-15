import React, { useState } from 'react';

const UrunYükle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); // Kategori seçimi için state

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini kullanarak yükleme işlemleri yapılabilir
    console.log('Ürün yükleme işlemi gerçekleştirildi:', { title, description, category });
    // Verileri bir API'ye göndermek, işleme sokmak için burada gerekli adımlar atılabilir
  };

  return (
    <div>
      <h1>Ürün Yükleme Sayfası</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Ürün Başlığı:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Ürün Açıklaması:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Kategori:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Kategori Seçiniz</option>
            <option value="emlak">Emlak</option>
            <option value="vasıta">Vasıta</option>
            <option value="eşya">Eşya</option>
          </select>
        </div>
        <button type="submit">Ürünü Yükle</button>
      </form>
    </div>
  );
};

export default UrunYükle;

