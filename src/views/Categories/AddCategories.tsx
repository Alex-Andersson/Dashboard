import React, { useState } from 'react';
import axios from 'axios';
import { Category } from '../../utils/types';

const API_URL = "http://192.71.151.213:8080/admin/category";

const Category: React.FC = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create a new category object
    const newCategory: Category = {
      category_id: Math.random().toString(36).substr(2, 9),
      category_name: categoryName,
      subcategories: []
    };

    try {
      // post the new category to the API
      await axios.post(`${API_URL}`, newCategory);
      setCategoryName('');
      alert('Category added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Add a new category</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-name" className="block mb-2 font-medium">
          Category name:
        </label>
        <input
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          className="w-full border border-gray-400 rounded py-2 px-3 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Add category
        </button>
      </form>
    </div>
  );
};

export default Category;
