const Item = require('../models/Item');

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({ createdBy: req.session.userId })
      .sort({ createdAt: -1 });
    res.json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get single item
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findOne({
      _id: req.params.id,
      createdBy: req.session.userId
    });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create new item
exports.createItem = async (req, res) => {
  try {
    const { title, description } = req.body;

    const item = new Item({
      title,
      description,
      createdBy: req.session.userId
    });

    await item.save();
    res.status(201).json({ message: 'Item created successfully', item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update item
exports.updateItem = async (req, res) => {
  try {
    const { title, description } = req.body;

    const item = await Item.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.session.userId },
      { title, description },
      { new: true, runValidators: true }
    );

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item updated successfully', item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.session.userId
    });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
