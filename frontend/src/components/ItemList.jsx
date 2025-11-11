import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import itemService from '../services/itemService';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await itemService.getAllItems();
      setItems(response.items);
    } catch (err) {
      setError('Failed to fetch items');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await itemService.deleteItem(id);
        setItems(items.filter(item => item._id !== id));
      } catch (err) {
        setError('Failed to delete item');
      }
    }
  };

  return (
    <div className="item-list-container">
      <div className="list-header">
        <h2>My Items</h2>
        <Link to="/items/new" className="btn-add">Add New Item</Link>
      </div>
      {error && <div className="error">{error}</div>}
      {items.length === 0 ? (
        <p>No items found. Create your first item!</p>
      ) : (
        <div className="items-grid">
          {items.map(item => (
            <div key={item._id} className="item-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="item-actions">
                <Link to={`/items/edit/${item._id}`} className="btn-edit">Edit</Link>
                <button onClick={() => handleDelete(item._id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
