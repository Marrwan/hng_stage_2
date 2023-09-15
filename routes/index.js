const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Person = require('../models/Person');

// Validation middleware
const validate = [
  check('name').notEmpty().withMessage('Name cannot be empty').isString().withMessage('Name must be a string'),
  check('age').notEmpty().withMessage('Age must not be empty').isNumeric().withMessage('Age must be a number'),
];

// CREATE: Adding a new person
router.post('/', validate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age } = req.body;
    const person = new Person({ name, age });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ: Fetching details of a person by ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) throw new Error('Person not found');
    res.json(person);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// UPDATE: Modifying details of an existing person by ID
router.put('/:id', validate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!person) throw new Error('Person not found');
    res.json(person);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// DELETE: Removing a person by ID
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);
    if (!person) throw new Error('Person not found');
    res.json(person);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
