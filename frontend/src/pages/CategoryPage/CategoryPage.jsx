import React from "react";

const CategoryPage = (props) => {
const { categoryName } = props.match.params;
return(
    <div>
        <h1>{categoryName}</h1>

    </div>
)

};

export default CategoryPage;
