import "./category-item.styles.scss";

const CategoryItem = (props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h3>{props.category.title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
