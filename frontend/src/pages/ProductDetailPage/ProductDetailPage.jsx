import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { ProductsApi } from "../../api/ProductsApi";

const ProductDetailPage = () => {
  return (
    <main>
      <ProductDetail />
    </main>
  );
};

export default ProductDetailPage;
