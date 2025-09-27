import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body || {};

  try {
    // Persist to MongoDB
    const doc = await Contact.create({ name, email, message });

    // TODO: Optionally send an email to CONTACT_TO_EMAIL via a mail service.

    return res.status(201).json({ success: true, message: 'Message received', id: doc._id });
  } catch (err) {
    console.error('Failed to save contact message:', err);
    return res.status(500).json({ success: false, error: 'Failed to submit message' });
  }
};
