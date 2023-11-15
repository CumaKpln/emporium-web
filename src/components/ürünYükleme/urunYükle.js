import React, { useState } from 'react';

const UrunYükle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState(''); // Alt kategori seçimi için state

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);

    // Kategori değiştiğinde alt kategoriyi sıfırla
    setSubCategory('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ürün yükleme işlemi gerçekleştirildi:', { title, description, category, subCategory });
  };

  // Kategoriye göre alt kategorileri belirleyen bir yardımcı fonksiyon
  const getSubCategories = () => {
    switch (category) {
      case 'emlak':
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Daire">Daire</option>
            <option value="ev">Ev</option>
          </>
        );
      case 'vasıta':
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Araba">Araba</option>
            <option value="motorsiklet">Motorsiklet</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
    }
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
            onChange={handleCategoryChange}
            required
          >
            <option value="">Kategori Seçiniz</option>
            <option value="emlak">Emlak</option>
            <option value="vasıta">Vasıta</option>
          </select>
        </div>
        {category && (
          <div>
            <label htmlFor="subCategory">Alt Kategori:</label>
            <select
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              {getSubCategories()}
            </select>
          </div>
        )}
        <button type="submit">Ürünü Yükle</button>
      </form>
    </div>
  );
};

export default UrunYükle;
