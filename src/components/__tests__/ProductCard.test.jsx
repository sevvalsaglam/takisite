import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import { FavoritesProvider } from '../../context/FavoritesContext';

const product = {
  id: 1,
  title: "Altın Bileklik",
  category: "bileklik",
  price: 180,
  description: "Modern tasarım altın bileklik",
  image: "/images/bileklik-1.jpg",
  point: 4.3
};

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          {ui}
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

describe("ProductCard Bileşeni", () => {
  it("ürün başlığını ve fiyatı doğru render eder", () => {
    renderWithProviders(<ProductCard product={product} />);
    expect(screen.getByText("Altın Bileklik")).toBeInTheDocument();
    expect(screen.getByText("180 TL")).toBeInTheDocument();
  });

  it("ürüne git butonunu gösterir", () => {
    renderWithProviders(<ProductCard product={product} />);
    expect(screen.getByRole("link", { name: /ürüne git/i })).toBeInTheDocument();
  });
});
