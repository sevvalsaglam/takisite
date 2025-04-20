import { useEffect, useState } from "react";
import "../assets/footer.css";

function Footer() {
  const [showFullFooter, setShowFullFooter] = useState(false);

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const isBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
        setShowFullFooter(isBottom);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFullFooter ? "expanded" : ""}`}>
      <p>© 2025 Takı Dünyası. Tüm Hakları Saklıdır.</p>

      {showFullFooter && (
        <div className="footer-expanded-content">
          <div className="footer-column">
            <h4>Kurumsal</h4>
            <ul>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Yardım</h4>
            <ul>
              <li>SSS</li>
              <li>İade Koşulları</li>
              <li>Kargo Bilgisi</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Sosyal Medya</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>X (Twitter)</li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
