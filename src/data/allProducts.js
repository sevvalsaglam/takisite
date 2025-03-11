const allProducts = [
    // 20 adet Bileklik
    { id: 1, title: "Gümüş Bileklik", category: "bileklik", price: 180, description: "Modern tasarım gümüş bileklik", image: "src/assets/images/bileklik-1.jpg" },
    { id: 2, title: "Gümüş Bileklik", category: "bileklik", price: 170, description: "Şık gümüş bileklik", image: "src/assets/images/bileklik-2.jpg" },
    { id: 3, title: "Gümüş Bileklik", category: "bileklik", price: 190, description: "Minimalist tasarım bileklik", image: "src/assets/images/bileklik-3.jpg" },
    { id: 4, title: "Gümüş Bileklik", category: "bileklik", price: 200, description: "Şık altın detaylı bileklik", image: "src/assets/images/bileklik-4.jpg" },
    { id: 5, title: "Gümüş Bileklik", category: "bileklik", price: 185, description: "Zarif bileklik tasarımı", image: "src/assets/images/bileklik-5.jpg" },
    { id: 6, title: "Gümüş Bileklik", category: "bileklik", price: 210, description: "Modern çizgili gümüş bileklik", image: "src/assets/images/bileklik-6.jpg" },
    { id: 7, title: "Gümüş Bileklik", category: "bileklik", price: 220, description: "Altın detayıyla bileklik", image: "src/assets/images/bileklik-7.jpg" },
    { id: 8, title: "Gümüş Bileklik", category: "bileklik", price: 230, description: "Şık ve zarif bileklik", image: "src/assets/images/bileklik-8.jpg" },
    { id: 10, title: "Gümüş Bileklik", category: "bileklik", price: 195, description: "Şık tasarımlı bileklik", image: "src/assets/images/bileklik-10.jpg" },
    { id: 11, title: "Gümüş Bileklik", category: "bileklik", price: 215, description: "Zarif gümüş bileklik", image: "src/assets/images/bileklik-11.jpg" },
    { id: 12, title: "Gümüş Bileklik", category: "bileklik", price: 225, description: "Gümüş bileklik tasarımı", image: "src/assets/images/bileklik-12.jpg" },
    { id: 13, title: "Gümüş Bileklik", category: "bileklik", price: 235, description: "Minimalist gümüş bileklik", image: "src/assets/images/bileklik-13.jpg" },
    { id: 14, title: "Gümüş Bileklik", category: "bileklik", price: 250, description: "Modern gümüş bileklik", image: "src/assets/images/bileklik-14.jpg" },
    { id: 15, title: "Gümüş Bileklik", category: "bileklik", price: 255, description: "Zarif gümüş tasarım", image: "src/assets/images/bileklik-15.jpg" },
    { id: 16, title: "Gümüş Bileklik", category: "bileklik", price: 265, description: "Şık bileklik", image: "src/assets/images/bileklik-16.jpg" },
    { id: 17, title: "Gümüş Bileklik", category: "bileklik", price: 275, description: "Gümüş detaylı bileklik", image: "src/assets/images/bileklik-17.jpg" },
    { id: 18, title: "Gümüş Bileklik", category: "bileklik", price: 285, description: "Modern gümüş bileklik", image: "src/assets/images/bileklik-18.jpg" },
    { id: 19, title: "Gümüş Bileklik", category: "bileklik", price: 290, description: "Şık bileklik tasarımı", image: "src/assets/images/bileklik-19.jpg" },
    { id: 20, title: "Gümüş Bileklik", category: "bileklik", price: 300, description: "Zarif gümüş bileklik", image: "src/assets/images/bileklik-20.jpg" },
  
    // 7 adet Broş
    { id: 21, title: "Altın Broş", category: "bros", price: 150, description: "Şık altın broş", image: "src/assets/images/bros-1.jpg" },
    { id: 22, title: "Gümüş Broş", category: "bros", price: 120, description: "Zarif gümüş broş", image: "src/assets/images/bros-2.jpg" },
    { id: 23, title: "Altın Broş", category: "bros", price: 160, description: "Modern altın broş", image: "src/assets/images/bros-3.jpg" },
    { id: 24, title: "Gümüş Broş", category: "bros", price: 180, description: "Şık gümüş broş", image: "src/assets/images/bros-4.jpg" },
    { id: 25, title: "Gümüş Broş", category: "bros", price: 140, description: "Minimalist gümüş broş", image: "src/assets/images/bros-5.jpg" },
    { id: 26, title: "Altın Broş", category: "bros", price: 170, description: "Zarif altın broş", image: "src/assets/images/bros-6.jpg" },
    { id: 27, title: "Gümüş Broş", category: "bros", price: 150, description: "Şık broş", image: "src/assets/images/bros-7.jpg" },
  
    // 6 adet Halhal
    { id: 28, title: "Altın Halhal", category: "halhal", price: 220, description: "Zarif altın halhal", image: "src/assets/images/halhal-1.jpg" },
    { id: 29, title: "Gümüş Halhal", category: "halhal", price: 210, description: "Modern gümüş halhal", image: "src/assets/images/halhal-2.jpg" },
    { id: 30, title: "Altın Halhal", category: "halhal", price: 240, description: "Şık altın halhal", image: "src/assets/images/halhal-3.jpg" },
    { id: 31, title: "Gümüş Halhal", category: "halhal", price: 250, description: "Minimalist gümüş halhal", image: "src/assets/images/halhal-4.jpg" },
    { id: 32, title: "Altın Halhal", category: "halhal", price: 230, description: "Zarif altın halhal", image: "src/assets/images/halhal-5.jpg" },
    { id: 33, title: "Gümüş Halhal", category: "halhal", price: 200, description: "Şık gümüş halhal", image: "src/assets/images/halhal-6.jpg" },
  
    // 12 adet Kolye
    { id: 34, title: "Altın Kolye", category: "kolye", price: 350, description: "Zarif altın kolye", image: "src/assets/images/kolye-1.jpg" },
    { id: 35, title: "Gümüş Kolye", category: "kolye", price: 320, description: "Modern gümüş kolye", image: "src/assets/images/kolye-2.jpg" },
    { id: 36, title: "Altın Kolye", category: "kolye", price: 380, description: "Şık altın kolye", image: "src/assets/images/kolye-3.jpg" },
    { id: 37, title: "Gümüş Kolye", category: "kolye", price: 400, description: "Zarif gümüş kolye", image: "src/assets/images/kolye-4.jpg" },
    { id: 38, title: "Altın Kolye", category: "kolye", price: 420, description: "Şık altın tasarım kolye", image: "src/assets/images/kolye-5.jpg" },
    { id: 39, title: "Gümüş Kolye", category: "kolye", price: 450, description: "Zarif tasarım kolye", image: "src/assets/images/kolye-6.jpg" },
    { id: 40, title: "Altın Kolye", category: "kolye", price: 460, description: "Minimalist altın kolye", image: "src/assets/images/kolye-7.jpg" },
    { id: 41, title: "Gümüş Kolye", category: "kolye", price: 470, description: "Modern gümüş kolye", image: "src/assets/images/kolye-8.jpg" },
    { id: 42, title: "Altın Kolye", category: "kolye", price: 480, description: "Şık altın kolye", image: "src/assets/images/kolye-9.jpg" },
    { id: 43, title: "Gümüş Kolye", category: "kolye", price: 500, description: "Minimalist gümüş kolye", image: "src/assets/images/kolye-10.jpg" },
    { id: 44, title: "Altın Kolye", category: "kolye", price: 520, description: "Şık altın kolye", image: "src/assets/images/kolye-11.jpg" },
    { id: 45, title: "Gümüş Kolye", category: "kolye", price: 530, description: "Zarif gümüş kolye", image: "src/assets/images/kolye-12.jpg" },
  
    // 9 adet Küpe
    { id: 46, title: "Altın Küpe", category: "küpe", price: 280, description: "Şık altın küpe", image: "src/assets/images/kupe-1.jpg" },
    { id: 47, title: "Gümüş Küpe", category: "küpe", price: 260, description: "Zarif gümüş küpe", image: "src/assets/images/kupe-2.jpg" },
    { id: 48, title: "Altın Küpe", category: "küpe", price: 290, description: "Modern altın küpe", image: "src/assets/images/kupe-3.jpg" },
    { id: 49, title: "Gümüş Küpe", category: "küpe", price: 300, description: "Minimalist gümüş küpe", image: "src/assets/images/kupe-4.jpg" },
    { id: 50, title: "Altın Küpe", category: "küpe", price: 310, description: "Şık altın küpe", image: "src/assets/images/kupe-5.jpg" },
    { id: 51, title: "Gümüş Küpe", category: "küpe", price: 320, description: "Şık gümüş küpe", image: "src/assets/images/kupe-6.jpg" },
    { id: 52, title: "Altın Küpe", category: "küpe", price: 330, description: "Modern altın küpe", image: "src/assets/images/kupe-7.jpg" },
    { id: 53, title: "Gümüş Küpe", category: "küpe", price: 340, description: "Zarif gümüş küpe", image: "src/assets/images/kupe-8.jpg" },
    { id: 54, title: "Altın Küpe", category: "küpe", price: 350, description: "Minimalist altın küpe", image: "src/assets/images/kupe-9.jpg" },
  
    // Piercing verileri
  { id: 55, title: "Altın Piercing", category: "piercing", price: 150, description: "Şık altın piercing", image: "src/assets/images/piercing-1.jpg" },
  { id: 56, title: "Gümüş Piercing", category: "piercing", price: 140, description: "Minimalist gümüş piercing", image: "src/assets/images/piercing-2.jpg" },
  { id: 57, title: "Altın Piercing", category: "piercing", price: 160, description: "Zarif altın piercing", image: "src/assets/images/piercing-3.jpg" },
  { id: 58, title: "Gümüş Piercing", category: "piercing", price: 170, description: "Modern gümüş piercing", image: "src/assets/images/piercing-4.jpg" },
  { id: 59, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-5.jpg" },
  { id: 60, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-6.jpg" },
  { id: 61, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-7.jpg" },
  { id: 62, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-8.jpg" },
  { id: 63, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-9.jpg" },
  { id: 64, title: "Altın Piercing", category: "piercing", price: 180, description: "Şık altın piercing", image: "src/assets/images/piercing-10.jpg" },
  
  // Yüzük verileri
  { id: 65, title: "Altın Yüzük", category: "yuzuk", price: 400, description: "Zarif altın yüzük", image: "src/assets/images/yuzuk-1.jpg" },
  { id: 66, title: "Gümüş Yüzük", category: "yuzuk", price: 380, description: "Minimalist gümüş yüzük", image: "src/assets/images/yuzuk-2.jpg" },
  { id: 67, title: "Altın Yüzük", category: "yuzuk", price: 420, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-3.jpg" },
  { id: 68, title: "Gümüş Yüzük", category: "yuzuk", price: 440, description: "Modern gümüş yüzük", image: "src/assets/images/yuzuk-4.jpg" },
  { id: 69, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-5.jpg" },
  { id: 70, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-6.jpg" },
  { id: 71, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-7.jpg" },
  { id: 72, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-8.jpg" },
  { id: 73, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-9.jpg" },
  { id: 74, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-10.jpg" },
  { id: 75, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-11.jpg" },
  { id: 76, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-12.jpg" },
  { id: 77, title: "Altın Yüzük", category: "yuzuk", price: 450, description: "Şık altın yüzük", image: "src/assets/images/yuzuk-13.jpg" },
  ];
  
  export default allProducts;
  