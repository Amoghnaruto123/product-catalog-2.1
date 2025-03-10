import React, { useState } from 'react';
import '../App.css';

function AddProductPage() {
  const formContainerClass = "form-container visible"
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('Electronics');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      price,
      description,
      image,
      category,
    });
    setProductName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setCategory("Electronics");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setImage(file);
    } else {
      alert('Please select a valid .png or .jpg image file.');
      event.target.value = null;
      setImage(null)
    }
  };

  return (
    <div className="add-product-form-container main-content">
      <form className={formContainerClass} onSubmit={handleSubmit}>
        <h2 className='form-title'>Add a New Product</h2>
        <div className="input-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            required
            aria-label="Product Name"
          />
        </div>
        <div className="input-group">
           <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
            aria-label="Price"
          />
        </div>
        <div className="input-group">
           <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            aria-label="Description"
          />
        </div>
        <div className="input-group">
           <label htmlFor="image">Image Upload:</label>
          <input
            type="file"
            id="image"
            accept=".png, .jpg"
            onChange={handleImageChange}
            required
            aria-label="Image Upload"
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductPage;

