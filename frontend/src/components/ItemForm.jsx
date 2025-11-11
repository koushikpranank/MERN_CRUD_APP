import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import itemService from '../services/itemService';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      fetchItem();
    }
  }, [id]);

  const fetchItem = async () => {
    try {
      const response = await itemService.getItemById(id);
      setFormData({
        title: response.item.title,
        description: response.item.description
      });
    } catch (err) {
      setError('Failed to fetch item');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isEdit) {
        await itemService.updateItem(id, formData);
      } else {
        await itemService.createItem(formData);
      }
      navigate('/items');
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? 'Edit Item' : 'Add New Item'}</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>
        <div className="form-actions">
          <button type="submit">{isEdit ? 'Update' : 'Create'}</button>
          <button type="button" onClick={() => navigate('/items')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
