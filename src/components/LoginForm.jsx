import { useState } from "react";

function LoginForm() {
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
    console.log("Kullanıcı Bilgileri:", formData);
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
