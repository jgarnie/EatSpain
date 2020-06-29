import React from "react";

const CategoryPage = (props) => {
  const { categoryName } = props.match.params;
  return <div>Category {categoryName}</div>;
};

export default CategoryPage;
