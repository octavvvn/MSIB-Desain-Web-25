import api from "../_api";

// REGISTER
export async function registerUser(payload) {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

// LOGIN
export async function loginUser(payload) {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

// LOGOUT (pakai token)
export async function logoutUser() {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await api.post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // kalau sukses logout di server, hapus token lokal
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return res.data;
  } catch (err) {
    console.error("Logout gagal:", err);
    // walaupun error, hapus token biar user tetap keluar
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
