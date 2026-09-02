import { Link } from 'react-router-dom';

/**
 * A single product tile, used across the home, store and product pages.
 *
 * props:
 *  - img: image path
 *  - category: category label
 *  - name: product name
 *  - price / oldPrice: display strings, e.g. "$980.00"
 *  - rating: number of filled stars 0-5 (omit for no rating row)
 *  - sale / new: label badges shown on the image
 */
function ProductCard({ img, category, name, price, oldPrice, rating, sale, newLabel }) {
  const hasLabel = sale || newLabel;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
        {hasLabel && (
          <div className="product-label">
            {sale && <span className="sale">{sale}</span>}
            {newLabel && <span className="new">NEW</span>}
          </div>
        )}
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><Link to="/product">{name}</Link></h3>
        <h4 className="product-price">
          {price} {oldPrice && <del className="product-old-price">{oldPrice}</del>}
        </h4>
        <div className="product-rating">
          {!!rating && Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={i < rating ? 'fa fa-star' : 'fa fa-star-o'}></i>
          ))}
        </div>
        <div className="product-btns">
          <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
          <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
          <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
        </div>
      </div>
      <div className="add-to-cart">
        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
