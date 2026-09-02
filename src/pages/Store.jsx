import { useEffect, Fragment } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import ProductWidget from '../components/ProductWidget';

const p = (n) => `/img/product0${n}.png`;

const storeProducts = [
  { img: p(1), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5, sale: '-30%', newLabel: true },
  { img: p(2), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4, newLabel: true },
  { img: p(3), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
  { img: p(4), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
  { img: p(5), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
  { img: p(6), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4 },
  { img: p(7), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5 },
  { img: p(8), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
  { img: p(9), category: 'Category', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 0 },
];

// clearfix elements needed exactly where the original template places them,
// to preserve the responsive wrap at md (3 cols) and xs (2 cols) breakpoints.
const clearfixAfter = {
  3: 'visible-sm visible-xs',
  4: 'visible-lg visible-md',
  5: 'visible-sm visible-xs',
  7: 'visible-lg visible-md visible-sm visible-xs',
  9: 'visible-sm visible-xs',
};

const categories = [
  { id: 'category-1', label: 'Laptops', count: 120 },
  { id: 'category-2', label: 'Smartphones', count: 740 },
  { id: 'category-3', label: 'Cameras', count: 1450 },
  { id: 'category-4', label: 'Accessories', count: 578 },
  { id: 'category-5', label: 'Laptops', count: 120 },
  { id: 'category-6', label: 'Smartphones', count: 740 },
];

const brands = [
  { id: 'brand-1', label: 'SAMSUNG', count: 578 },
  { id: 'brand-2', label: 'LG', count: 125 },
  { id: 'brand-3', label: 'SONY', count: 755 },
  { id: 'brand-4', label: 'SAMSUNG', count: 578 },
  { id: 'brand-5', label: 'LG', count: 125 },
  { id: 'brand-6', label: 'SONY', count: 755 },
];

const topSelling = [1, 2, 3].map((n) => ({
  img: p(n),
  category: 'Category',
  name: 'product name goes here',
  price: '$980.00',
  oldPrice: '$990.00',
}));

function Store() {
  useEffect(() => {
    const $ = window.jQuery;
    const noUiSlider = window.noUiSlider;
    if (!$) return;

    // Qty +/- buttons
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
        updatePriceSlider($this, value);
      });

      up.on('click', function onUp() {
        const value = parseInt($input.val(), 10) + 1;
        $input.val(value);
        $input.change();
        updatePriceSlider($this, value);
      });
    });

    const priceInputMax = document.getElementById('price-max');
    const priceInputMin = document.getElementById('price-min');
    let priceSliderEl = document.getElementById('price-slider');

    function onMaxChange() {
      updatePriceSlider($(priceInputMax).parent(), priceInputMax.value);
    }
    function onMinChange() {
      updatePriceSlider($(priceInputMin).parent(), priceInputMin.value);
    }

    if (priceInputMax) priceInputMax.addEventListener('change', onMaxChange);
    if (priceInputMin) priceInputMin.addEventListener('change', onMinChange);

    function updatePriceSlider(elem, value) {
      if (!priceSliderEl || !priceSliderEl.noUiSlider) return;
      if (elem.hasClass('price-min')) {
        priceSliderEl.noUiSlider.set([value, null]);
      } else if (elem.hasClass('price-max')) {
        priceSliderEl.noUiSlider.set([null, value]);
      }
    }

    if (priceSliderEl && noUiSlider && !priceSliderEl.noUiSlider) {
      noUiSlider.create(priceSliderEl, {
        start: [1, 999],
        connect: true,
        step: 1,
        range: { min: 1, max: 999 },
      });

      priceSliderEl.noUiSlider.on('update', (values, handle) => {
        const value = values[handle];
        if (handle) {
          priceInputMax.value = value;
        } else {
          priceInputMin.value = value;
        }
      });
    }

    return () => {
      if (priceInputMax) priceInputMax.removeEventListener('change', onMaxChange);
      if (priceInputMin) priceInputMin.removeEventListener('change', onMinChange);
      if (priceSliderEl && priceSliderEl.noUiSlider) {
        priceSliderEl.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'All Categories' },
          { label: 'Accessories' },
          { label: 'Headphones (227,490 Results)' },
        ]}
      />

      <div className="section">
        <div className="container">
          <div className="row">
            {/* ASIDE */}
            <div id="aside" className="col-md-3">
              <div className="aside">
                <h3 className="aside-title">Categories</h3>
                <div className="checkbox-filter">
                  {categories.map((c) => (
                    <div className="input-checkbox" key={c.id}>
                      <input type="checkbox" id={c.id} />
                      <label htmlFor={c.id}>
                        <span></span>
                        {c.label}
                        <small>({c.count})</small>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside">
                <h3 className="aside-title">Price</h3>
                <div className="price-filter">
                  <div id="price-slider"></div>
                  <div className="input-number price-min">
                    <input id="price-min" type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div className="input-number price-max">
                    <input id="price-max" type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
              </div>

              <div className="aside">
                <h3 className="aside-title">Brand</h3>
                <div className="checkbox-filter">
                  {brands.map((b) => (
                    <div className="input-checkbox" key={b.id}>
                      <input type="checkbox" id={b.id} />
                      <label htmlFor={b.id}>
                        <span></span>
                        {b.label}
                        <small>({b.count})</small>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside">
                <h3 className="aside-title">Top selling</h3>
                {topSelling.map((item, i) => (
                  <ProductWidget key={i} {...item} />
                ))}
              </div>
            </div>
            {/* /ASIDE */}

            {/* STORE */}
            <div id="store" className="col-md-9">
              <div className="store-filter clearfix">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select className="input-select">
                      <option value="0">Popular</option>
                      <option value="1">Position</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select className="input-select">
                      <option value="0">20</option>
                      <option value="1">50</option>
                    </select>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active"><i className="fa fa-th"></i></li>
                  <li><a href="#"><i className="fa fa-th-list"></i></a></li>
                </ul>
              </div>

              <div className="row">
                {storeProducts.map((item, i) => {
                  const idx = i + 1;
                  return (
                    <Fragment key={idx}>
                      {clearfixAfter[idx] && <div className={`clearfix ${clearfixAfter[idx]}`}></div>}
                      <div className="col-md-4 col-xs-6">
                        <ProductCard {...item} />
                      </div>
                    </Fragment>
                  );
                })}
              </div>

              <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
                  <li className="active">1</li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
            {/* /STORE */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
