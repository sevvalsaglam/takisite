import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:8080/api/products/search?q=${query}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error("Arama hatası:", err))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <main className="search-results-page">
      <h1>"{query}" için Arama Sonuçları</h1>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : results.length > 0 ? (
        <ProductList products={results} />
      ) : (
        <p>Sonuç bulunamadı.</p>
      )}
    </main>
  );
}

export default SearchResults;
