import Bug from '../models/Bug.js';

export const createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

export const updateBug = async (req, res, next) => {
  try {
    const updated = await Bug.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteBug = async (req, res, next) => {
  try {
    const deleted = await Bug.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
