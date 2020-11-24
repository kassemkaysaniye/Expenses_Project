const axios = window.axios;

const BASE_API_URL = 'http://localhost:8000/api';


export default {
    getAllExpenses: () => 
        axios.get(`${BASE_API_URL}/expenses`),
    getOneExpense: (id) =>
        axios.get(`${BASE_API_URL}/expenses/${id}/edit`),
    addExpense: (expense) =>
        axios.post(`${BASE_API_URL}/expenses/`, expense),
    updateExpense: (post, id) =>
        axios.put(`${BASE_API_URL}/expenses/${id}`, post),
    deleteExpense: (id) =>
        axios.delete(`${BASE_API_URL}/expenses/${id}`),
        getAllCategories: () => 
        axios.get(`${BASE_API_URL}/categories`),
    addCategory: (category) =>
        axios.post(`${BASE_API_URL}/categories/`, category),
        updateCategory: (category, id) =>
        axios.put(`${BASE_API_URL}/categories/${id}`, category),
        getOneCategory: (id) =>
        axios.get(`${BASE_API_URL}/categories/${id}/edit`),

    }