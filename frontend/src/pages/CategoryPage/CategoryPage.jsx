import React from "react";
import TopProducts from "../HomePage/TopProducts/TopProducts";

const CategoryPage = (props) => {
  const { categoryName } = props.match.params;
  console.log('props',props)
  return (
    <div>
      Category {categoryName}
      <TopProducts />

      
    </div>
  );
};

export default CategoryPage;
