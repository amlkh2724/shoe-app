import React from 'react'
// import Product from './product'
import './index.css'
import Shoes from '../components/homeshoes/shoesmarket'
import API from '../utils/api';
import { useState, useEffect } from "react";

const Products = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    imgUrl: '',
    description: '',
    price: ''
  });
  const [shoesList, setShoesList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await API.addShoes(formData);
      setFormData({ imgUrl: '', description: '', price: '' });
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await API.getShoes();
        setShoesList(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShoes();
  }, []);

  return (
    <>
      <button onClick={() => setIsFormOpen(true)}>Add a shoe with your sizes</button>
      {isFormOpen && (
        <form onSubmit={handleSubmit}>
          <label>
            Image URL:
            <input type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
          </label>
          <button type="submit">Add Shoes</button>
        </form>
      )}
      <div className="gap" />
      <Shoes shoesList={shoesList} />
    </>
  );
};

export default Products;

