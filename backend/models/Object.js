import mongoose from 'mongoose';

const objectSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  objectUrl: { type: String, required: true },
  cameraState: { type: Object },
});

const ObjectModel = mongoose.model('Object', objectSchema);

export default ObjectModel;
