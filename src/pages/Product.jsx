import { useEffect, Fragment } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';

const p = (n) => `/img/product0${n}.png`;

const mainImages = [1, 3, 6, 8].map(p);

const relatedProducts = [
  { img: p(1), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0, sale: '-30%' },
  { img: p(2), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5, newLabel: true },
  { img: p(3), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
  { img: p(4), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4 },
];

const ratingBreakdown = [
  { stars: 5, width: '80%', sum: 3 },
  { stars: 4, width: '60%', sum: 2 },
  { stars: 3, width: '0%', sum: 0 },
  { stars: 2, width: '0%', sum: 0 },
  { stars: 1, width: '0%', sum: 0 },
];

const reviews = [
  { name: 'John', date: '27 DEC 2018, 8:0 PM', rating: 4 },
  { name: 'John', date: '27 DEC 2018, 8:0 PM', rating: 4 },
  { name: 'John', date: '27 DEC 2018, 8:0 PM', rating: 4 },
];

function Product() {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    $('#product-main-img').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    $('#product-imgs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [
        { breakpoint: 991, settings: { vertical: false, arrows: false, dots: true } },
      ],
    });

    const zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }

    $('.input-number').each(function initInputNumber() {
      const $this = $(this);
      const $input = $this.find('input[type="number"]');
      const up = $this.find('.qty-up');
      const down = $this.find('.qty-down');

      down.on('click', function onDown() {
        let value = parseInt($input.val(), 10) - 1;
        value = value < 1 ? 1 : value;
        $input.val(value);
        $input.change();
      });

      up.on('click', function onUp() {
        const value = parseInt($input.val(), 10) + 1;
        $input.val(value);
        $input.change();
      });
    });

    return () => {
      ['#product-main-img', '#product-imgs'].forEach((sel) => {
        const $el = $(sel);
        if ($el.hasClass('slick-initialized')) {
          $el.slick('unslick');
        }
      });
    };
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'All Categories' },
          { label: 'Accessories' },
          { label: 'Headphones' },
          { label: 'Product name goes here' },
        ]}
      />

      <div className="section">
        <div className="container">
          <div className="row">
            {/* Product main img */}
            <div className="col-md-5 col-md-push-2">
              <div id="product-main-img">
                {mainImages.map((src, i) => (
                  <div className="product-preview" key={i}>
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
            {/* /Product main img */}

            {/* Product thumb imgs */}
            <div className="col-md-2 col-md-pull-5">
              <div id="product-imgs">
                {mainImages.map((src, i) => (
                  <div className="product-preview" key={i}>
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
            {/* /Product thumb imgs */}

            {/* Product details */}
            <div className="col-md-5">
              <div className="product-details">
                <h2 className="product-name">product name goes here</h2>
                <div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <a className="review-link" href="#">10 Review(s) | Add your review</a>
                </div>
                <div>
                  <h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
                  <span className="product-available">In Stock</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="product-options">
                  <label>
                    Size
                    <select className="input-select">
                      <option value="0">X</option>
                    </select>
                  </label>
                  <label>
                    Color
                    <select className="input-select">
                      <option value="0">Red</option>
                    </select>
                  </label>
                </div>

                <div className="add-to-cart">
                  <div className="qty-label">
                    Qty
                    <div className="input-number">
                      <input type="number" defaultValue={1} />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                  </div>
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                </div>

                <ul className="product-btns">
                  <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                  <li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
                </ul>

                <ul className="product-links">
                  <li>Category:</li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>

                <ul className="product-links">
                  <li>Share:</li>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
            {/* /Product details */}

            {/* Product tab */}
            <div className="col-md-12">
              <div id="product-tab">
                <ul className="tab-nav">
                  <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                  <li><a data-toggle="tab" href="#tab2">Details</a></li>
                  <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                </ul>

                <div className="tab-content">
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>

                  <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                      <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>

                  <div id="tab3" className="tab-pane fade in">
                    <div className="row">
                      {/* Rating */}
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg">
                            <span>4.5</span>
                            <div className="rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <ul className="rating">
                            {ratingBreakdown.map((r, i) => (
                              <li key={i}>
                                <div className="rating-stars">
                                  {Array.from({ length: 5 }).map((_, si) => (
                                    <i key={si} className={si < r.stars ? 'fa fa-star' : 'fa fa-star-o'}></i>
                                  ))}
                                </div>
                                <div className="rating-progress">
                                  <div style={{ width: r.width }}></div>
                                </div>
                                <span className="sum">{r.sum}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* /Rating */}

                      {/* Reviews */}
                      <div className="col-md-6">
                        <div id="reviews">
                          <ul className="reviews">
                            {reviews.map((rev, i) => (
                              <li key={i}>
                                <div className="review-heading">
                                  <h5 className="name">{rev.name}</h5>
                                  <p className="date">{rev.date}</p>
                                  <div className="review-rating">
                                    {Array.from({ length: 4 }).map((_, si) => (
                                      <i key={si} className="fa fa-star"></i>
                                    ))}
                                    <i className="fa fa-star-o empty"></i>
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <ul className="reviews-pagination">
                            <li className="active">1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      {/* /Reviews */}

                      {/* Review Form */}
                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form" onSubmit={(e) => e.preventDefault()}>
                            <input className="input" type="text" placeholder="Your Name" />
                            <input className="input" type="email" placeholder="Your Email" />
                            <textarea className="input" placeholder="Your Review"></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                {[5, 4, 3, 2, 1].map((n) => (
                                  <Fragment key={n}>
                                    <input id={`star${n}`} name="rating" value={n} type="radio" />
                                    <label htmlFor={`star${n}`}></label>
                                  </Fragment>
                                ))}
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                      {/* /Review Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Product tab */}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
              </div>
            </div>

            {relatedProducts.map((item, i) => (
              <div className="col-md-3 col-xs-6" key={i}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
