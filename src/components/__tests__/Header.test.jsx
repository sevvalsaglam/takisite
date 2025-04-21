import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
}

describe("Header Bileşeni", () => {
  it("logo ve arama çubuğu görünmeli", () => {
    renderWithProviders(<Header />);
    expect(screen.getByAltText(/takı dünyası/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ara/i)).toBeInTheDocument();
  });

  it("menü açılıp kapanmalı", () => {
    renderWithProviders(<Header />);
    const toggleBtn = screen.getByRole("button");

    fireEvent.click(toggleBtn);
    expect(screen.getByText(/ana sayfa/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/profil/i));
    expect(screen.queryByText(/ana sayfa/i)).not.toBeInTheDocument();
  });
});
