import CategoryItem from "../category-item/category-item.component";

import "./category-menu.styles.scss";

const CategoryMenu = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.key} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default CategoryMenu;
