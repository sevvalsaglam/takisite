import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API'ye POST isteği atıyoruz
      const response = await axios.post("http://localhost:8080/api/auth/register", formData);

      // Başarılı kayıt olursa kullanıcıyı localStorage'a kaydediyoruz
      localStorage.setItem("user", JSON.stringify(response.data));

      // Başarılı kayıt -> Anasayfaya yönlendir
      navigate("/");
    } catch (error) {
      console.error("Kayıt olurken hata:", error);
      alert("Kayıt sırasında hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Adınız" onChange={handleChange} required />
      <input type="text" name="surname" placeholder="Soyadınız" onChange={handleChange} required />
      <input type="email" name="email" placeholder="E-posta" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Şifre" onChange={handleChange} required />
      <textarea name="address" placeholder="Adres" onChange={handleChange}></textarea>
      <button type="submit">Kaydet</button>
    </form>
  );
}

export default LoginForm;
