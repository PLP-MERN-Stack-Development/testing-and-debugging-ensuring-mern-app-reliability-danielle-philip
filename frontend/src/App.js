import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm.js';
import BugList from './components/BugList.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import api from './utils/api.js';

export default function App() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState(null);
  const fetchBugs = async () => {
    try {
      const data = await api.getBugs();
      setBugs(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch');
    }
  };
  useEffect(() => { fetchBugs(); }, []);

  return (
    React.createElement(ErrorBoundary, null,
      React.createElement('div', { style: { fontFamily: 'system-ui', padding: 16 } },
        React.createElement('h1', null, 'MERN Bug Tracker (Minimal)'),
        error && React.createElement('div', { role: 'alert' }, error),
        React.createElement(BugForm, { onCreated: fetchBugs, setError }),
        React.createElement(BugList, { bugs, onDeleted: fetchBugs, onUpdated: fetchBugs })
      )
    )
  );
}
