import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import "../assets/profile.css";

function Profile() {
  const { user, login, logout } = useAuth();
  const [isRegistering, setIsRegistering] = useState(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isRegistering) {
        // Eğer kayıt oluyorsa:
        const response = await axios.post("http://localhost:8080/api/auth/register", formData);
        login(response.data); // backend'den dönen kullanıcı verisi
      } else {
        // Eğer giriş yapıyorsa:
        const { email, password } = formData;
        const response = await axios.post("http://localhost:8080/api/auth/login", { email, password });
        login(response.data); // backend'den dönen kullanıcı verisi
      }
    } catch (error) {
      console.error("İşlem hatası:", error);
      alert("Bir hata oluştu. Lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <main className="profile-wrapper">
      <div className="profile-card">
        <img src="/images/taki-dunyasi-logo-2.png" alt="Takı Dünyası" className="profile-logo" />

        <h2>{isRegistering ? "Kayıt Ol" : "Giriş Yap"}</h2>

        {!user ? (
          <>
            <form onSubmit={handleSubmit} className="profile-form">
              {isRegistering && (
                <>
                  <input type="text" name="name" placeholder="Adınız" onChange={handleChange} required />
                  <input type="text" name="surname" placeholder="Soyadınız" onChange={handleChange} required />
                  <textarea name="address" placeholder="Adresiniz" onChange={handleChange}></textarea>
                </>
              )}
              <input type="email" name="email" placeholder="E-posta" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Şifre" onChange={handleChange} required />
              <button type="submit">{isRegistering ? "Kayıt Ol" : "Giriş Yap"}</button>
            </form>

            <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-form">
              {isRegistering ? "Zaten üye misin? Giriş Yap" : "Hesabın yok mu? Kayıt Ol"}
            </p>
          </>
        ) : (
          <>
            <p><strong>Ad:</strong> {user.name}</p>
            <p><strong>Soyad:</strong> {user.surname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Adres:</strong> {user.address}</p>
            <button onClick={logout} className="logout-btn">Çıkış Yap</button>
          </>
        )}
      </div>
    </main>
  );
}

export default Profile;
