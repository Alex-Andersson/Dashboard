import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Category, Subcategory } from "../../utils/types";

interface Props {
  apiUrl: string;
}

const Subcategory: React.FC<Props> = ({ apiUrl }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [subcategoryName, setSubcategoryName] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://192.71.151.213:8080/user/categories');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchCategories();
  }, [apiUrl]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = event.target.value;
    const category = categories.find((c) => c.category_id === categoryId);
    setSelectedCategory(category || null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedCategory) {
      alert('Please select a category.');
      return;
    }

    const requestBody = {
      category_name: subcategoryName,
      parent_id: selectedCategory.category_id
    };

    try {
      const response = await axios.post('http://192.71.151.213:8080/admin/subcategory', requestBody);
      const newSubcategory: Subcategory = {
        subcategory_id: response.data.subcategory_id,
        subcategory_name: subcategoryName
      };
      const updatedCategory = { ...selectedCategory };
      updatedCategory.subcategories.push(newSubcategory);
      setSelectedCategory(updatedCategory);
      setSubcategoryName('');
      alert('Subcategory added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Add a new subcategory</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-select" className="block mb-2 font-medium">
          Category:
        </label>
        <select
          id="category-select"
          value={selectedCategory?.category_id || ''}
          onChange={handleCategoryChange}
          className="w-full border border-gray-400 rounded py-2 px-3 mb-4"
        >
          <option value="">Select a category...</option>
          {categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>
        <label htmlFor="subcategory-name" className="block mb-2 font-medium">
          Subcategory name:
        </label>
        <input
          type="text"
          id="subcategory-name"
          value={subcategoryName}
          onChange={(event) => setSubcategoryName(event.target.value)}
          className="w-full border border-gray-400 rounded py-2 px-3 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          disabled={!selectedCategory}
        >
          Add subcategory
        </button>
      </form>
    </div>
  );
};

export default Subcategory;
