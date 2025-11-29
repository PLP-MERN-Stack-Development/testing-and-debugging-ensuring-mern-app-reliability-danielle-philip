import React, { useState } from 'react';
import api from '../utils/api.js';

export default function BugForm({ onCreated, setError }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e && e.preventDefault && e.preventDefault();
    setError && setError(null);
    if (!title.trim()) return setError && setError('Title is required');
    setSubmitting(true);
    try {
      await api.createBug({ title: title.trim(), description });
      setTitle(''); setDescription('');
      onCreated && onCreated();
    } catch (err) {
      setError && setError(err.message || 'Create failed');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    React.createElement('form', { onSubmit: handleSubmit, style: { marginBottom: 16 } },
      React.createElement('div', null,
        React.createElement('input', {
          placeholder: 'Bug title',
          value: title,
          onChange: e => setTitle(e.target.value),
          disabled: submitting
        })
      ),
      React.createElement('div', null,
        React.createElement('textarea', {
          placeholder: 'Describe the bug (optional)',
          value: description,
          onChange: e => setDescription(e.target.value),
          disabled: submitting
        })
      ),
      React.createElement('div', null,
        React.createElement('button', { type: 'submit', disabled: submitting }, submitting ? 'Submitting...' : 'Report Bug')
      )
    )
  );
}
