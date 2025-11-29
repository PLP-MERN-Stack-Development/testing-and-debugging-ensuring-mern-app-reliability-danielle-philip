import React from 'react';
import api from '../utils/api.js';

function StatusSelect({ bug, onUpdated }) {
  const handle = async (e) => {
    const status = e.target.value;
    await api.updateBug(bug._id, { status });
    onUpdated && onUpdated();
  };
  return React.createElement('select', { defaultValue: bug.status, onChange: handle },
    React.createElement('option', { value: 'open' }, 'open'),
    React.createElement('option', { value: 'in-progress' }, 'in-progress'),
    React.createElement('option', { value: 'resolved' }, 'resolved')
  );
}

export default function BugList({ bugs = [], onDeleted, onUpdated }) {
  if (!bugs.length) {
    return React.createElement('div', null, 'No bugs reported yet.');
  }
  return React.createElement('ul', null,
    bugs.map(bug => React.createElement('li', { key: bug._id, style: { marginBottom: 8 } },
      React.createElement('strong', null, bug.title),
      ' ',
      React.createElement('div', null, bug.description),
      React.createElement(StatusSelect, { bug, onUpdated }),
      React.createElement('button', {
        onClick: async () => {
          if (!confirm('Delete this bug?')) return;
          await api.deleteBug(bug._id);
          onDeleted && onDeleted();
        }
      }, 'Delete')
    ))
  );
}
