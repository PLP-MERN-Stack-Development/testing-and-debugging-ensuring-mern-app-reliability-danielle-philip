import axios from 'axios';
const base = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/bugs';

export default {
  async getBugs() {
    const res = await axios.get(base);
    return res.data;
  },
  async createBug(payload) {
    const res = await axios.post(base, payload);
    return res.data;
  },
  async updateBug(id, payload) {
    const res = await axios.put(`${base}/${id}`, payload);
    return res.data;
  },
  async deleteBug(id) {
    const res = await axios.delete(`${base}/${id}`);
    return res.status === 204;
  }
};
