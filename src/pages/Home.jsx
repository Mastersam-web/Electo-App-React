import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductWidget from '../components/ProductWidget';

const p = (n) => `/img/product0${n}.png`;

const newProducts = [
  { img: p(1), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5, sale: '-30%', newLabel: true },
  { img: p(2), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4, newLabel: true },
  { img: p(3), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0, sale: '-30%' },
  { img: p(4), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5 },
  { img: p(5), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5 },
];

const topSellingSlick = [
  { img: p(6), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5, sale: '-30%', newLabel: true },
  { img: p(7), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4, newLabel: true },
  { img: p(8), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0, sale: '-30%' },
  { img: p(9), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5 },
  { img: p(1), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5 },
];

const widgetItem = (n) => ({ img: p(n), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00' });

// Each "Top selling" widget column shows two slides of 3 stacked items
const topSellingCol1 = [[7, 8, 9], [1, 2, 3]].map((group) => group.map(widgetItem));
const topSellingCol2 = [[4, 5, 6], [7, 8, 9]].map((group) => group.map(widgetItem));
const topSellingCol3 = [[1, 2, 3], [4, 5, 6]].map((group) => group.map(widgetItem));

function Home() {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Full product-card slick carousels ("New products" / "Top selling")
    $('.products-slick').each(function initSlick() {
      const $this = $(this);
      const nav = $this.attr('data-nav');
      $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: nav || false,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    });

    // Small product-widget slick carousels ("Top selling" columns)
    $('.products-widget-slick').each(function initWidgetSlick() {
      const $this = $(this);
      const nav = $this.attr('data-nav');
      $this.slick({
        infinite: true,
        autoplay: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: nav || false,
      });
    });

    return () => {
      $('.products-slick, .products-widget-slick').each(function destroySlick() {
        const $this = $(this);
        if ($this.hasClass('slick-initialized')) {
          $this.slick('unslick');
        }
      });
    };
  }, []);

  return (
    <>
      {/* SECTION - shop collections */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="/img/shop01.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Laptop<br />Collection</h3>
                  <Link to="/store" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="/img/shop03.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Accessories<br />Collection</h3>
                  <Link to="/store" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="/img/shop02.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Cameras<br />Collection</h3>
                  <Link to="/store" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /SECTION */}

      {/* SECTION - New products */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">New Products</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                    <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                    <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                    <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab1" className="tab-pane active">
                    <div className="products-slick" data-nav="#slick-nav-1">
                      {newProducts.map((item, i) => (
                        <ProductCard key={i} {...item} />
                      ))}
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /SECTION */}

      {/* HOT DEAL SECTION */}
      <div id="hot-deal" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>60</h3>
                      <span>Secs</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collection Up to 50% OFF</p>
                <Link className="primary-btn cta-btn" to="/store">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /HOT DEAL SECTION */}

      {/* SECTION - Top selling tabs */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Top selling</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                    <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                    <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                    <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      {topSellingSlick.map((item, i) => (
                        <ProductCard key={i} {...item} />
                      ))}
                    </div>
                    <div id="slick-nav-2" className="products-slick-nav"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /SECTION */}

      {/* SECTION - Top selling widget columns */}
      <div className="section">
        <div className="container">
          <div className="row">
            {[
              { navId: 'slick-nav-3', groups: topSellingCol1 },
              { navId: 'slick-nav-4', groups: topSellingCol2 },
              { navId: 'slick-nav-5', groups: topSellingCol3 },
            ].map(({ navId, groups }) => (
              <div className="col-md-4 col-xs-6" key={navId}>
                <div className="section-title">
                  <h4 className="title">Top selling</h4>
                  <div className="section-nav">
                    <div id={navId} className="products-slick-nav"></div>
                  </div>
                </div>

                <div className="products-widget-slick" data-nav={`#${navId}`}>
                  {groups.map((group, gi) => (
                    <div key={gi}>
                      {group.map((item, i) => (
                        <ProductWidget key={i} {...item} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* /SECTION */}
    </>
  );
}

export default Home;
