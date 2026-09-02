import { Link } from 'react-router-dom';

/**
 * Small product line used in "Top selling" widgets and slick carousels.
 */
function ProductWidget({ img, category, name, price, oldPrice }) {
  return (
    <div className="product-widget">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><Link to="/product">{name}</Link></h3>
        <h4 className="product-price">
          {price} {oldPrice && <del className="product-old-price">{oldPrice}</del>}
        </h4>
      </div>
    </div>
  );
}

export default ProductWidget;
