import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

export default function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { id } = props.match.params;

      const response = await api.get(`/products/${id}`);

      if (response) {
        setProduct(response.data);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div className="product">
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
      <div className="actions">
        <button onClick={() => props.history.goBack()}>Voltar</button>
      </div>
    </div>
  );
}
