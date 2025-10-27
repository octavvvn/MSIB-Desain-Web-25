import api from "../_api";

// 🔹 Ambil semua buku
export const getBooks = async () => {
  const res = await api.get("/books");
  return res.data.data || res.data;
};

// 🔹 Ambil detail 1 buku (buat halaman Edit)
export const getBookById = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data.data || res.data;
};

// 🔹 Tambah buku baru
export const addBook = async (data) => {
  const token = localStorage.getItem("token");
  const res = await api.post("/books", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 🔹 Hapus buku
export const deleteBook = async (id) => {
  const token = localStorage.getItem("token");
  const res = await api.delete(`/books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 🔹 Update buku
export const updateBook = async (id, data) => {
  const token = localStorage.getItem("token");
  const res = await api.put(`/books/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
