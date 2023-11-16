import React, { useState } from 'react';

const UrunYükle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState(''); // Alt kategori seçimi için state

  // Kategori değiştiğinde alt kategoriyi sıfırla
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory('');
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

  // Ürün bilgileri için state'leri tanımla
  const [productName, setProductName] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');

  // Form submit işlemi
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ürün bilgileri:', {
      title,
      description,
      category,
      subCategory,
      productName,
      productAddress,
      productDescription,
      price,
      brand,
    });
    // Burada bu bilgileri bir API'ye göndermek veya işlemek için gerekli adımları yapabilirsiniz.
  };

  return (
    <div>
      <h1>Ürün Yükleme Sayfası</h1>
      <form onSubmit={handleSubmit}>

        {/* Ürün başlığı giriş alanı */}
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

        {/* Ürün açıklama alanı */}
        <div>
          <label htmlFor="description">Ürün Açıklaması:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Ana kategori seçim alanı */}
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

        {/* Alt kategori seçim alanı */}
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

        {/* Diğer ürün bilgileri giriş alanları */}
        <div>
          <label htmlFor="productName">Ürün Adı:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productAddress">Ürün Adresi:</label>
          <input
            type="text"
            id="productAddress"
            value={productAddress}
            onChange={(e) => setProductAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productDescription">Ürün Açıklaması:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Fiyat:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="brand">Ürün Markası:</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        {/* Formun gönderme butonu */}
        <button type="submit">Ürünü Yükle</button>
      </form>
    </div>
  );
};

export default UrunYükle;
