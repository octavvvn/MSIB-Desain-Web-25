import api from "../_api";

// REGISTER
export async function registerUser(payload) {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

// LOGIN
export async function loginUser(payload) {
  const res = await api.post("/auth/login", payload);

  // 🟢 Simpan token & user di localStorage
  if (res.data?.token && res.data?.user) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res.data;
}

// LOGOUT
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

    // 🟢 Hapus data login dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return res.data;
  } catch (err) {
    console.error("Logout gagal:", err);
    // Tetap hapus token walaupun error biar user benar-benar keluar
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
