export function validateBug(payload = {}) {
  const title = (payload.title || '').toString().trim();
  if (!title) {
    const err = new Error('Title is required');
    err.status = 400;
    throw err;
  }
  if (payload.status) {
    const allowed = ['open','in-progress','resolved'];
    if (!allowed.includes(payload.status)) {
      const err = new Error('Invalid status');
      err.status = 400;
      throw err;
    }
  }
  return { title, description: payload.description || '', status: payload.status || 'open' };
}
