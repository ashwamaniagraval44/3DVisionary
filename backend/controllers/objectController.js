import ObjectModel from '../models/Object.js';

export const uploadObject = async (req, res) => {
  try {
    const { user, objectUrl, cameraState } = req.body;
    const object = new ObjectModel({ user, objectUrl, cameraState });
    await object.save();
    res.status(201).json(object);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getObject = async (req, res) => {
  try {
    const objects = await ObjectModel.find();
    res.json(objects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
