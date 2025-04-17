import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "../assets/profile.css";
import logo from "../assets/images/taki-dunyasi-logo-2.png";


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

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <main className="profile-page">
      {!user ? (
        <>
        <img src={logo} alt="Takı Dünyası" className="logo" />
          <h2>{isRegistering ? "Kayıt Ol" : "Giriş Yap"}</h2>
        
          <form onSubmit={handleSubmit} className="profile-form">
            {isRegistering && (
              <>
                <input type="text" name="name" placeholder="Adınız" onChange={handleChange} required />
                <input type="text" name="surname" placeholder="Soyadınız" onChange={handleChange} required />
                <textarea name="address" placeholder="Adresiniz" onChange={handleChange} required></textarea>
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
          <h2>Hesabım</h2>
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
