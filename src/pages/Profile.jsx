import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Profile() {
  const { user, login, logout } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <main className="profile-page">
      {!user ? (
        <>
          <h2>Giriş Yap veya Kayıt Ol</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <input type="text" name="name" placeholder="Adınız" onChange={handleChange} required />
            <input type="text" name="surname" placeholder="Soyadınız" onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-posta" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Şifre" onChange={handleChange} required />
            <textarea name="address" placeholder="Adresiniz" onChange={handleChange} required></textarea>
            <button type="submit">Giriş Yap / Kayıt Ol</button>
          </form>
        </>
      ) : (
        <>
          <h2>Profilim</h2>
          <p><strong>Ad:</strong> {user.name}</p>
          <p><strong>Soyad:</strong> {user.surname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Adres:</strong> {user.address}</p>
          <button onClick={logout} className="logout-btn">Çıkış Yap</button>
        </>
      )}
    </main>
  );
}

export default Profile;
