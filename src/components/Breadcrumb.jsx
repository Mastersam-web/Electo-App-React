import { Link } from 'react-router-dom';

// items: [{ label, to }] - `to` is optional. Last item is rendered as plain active text.
function Breadcrumb({ items, heading }) {
  return (
    <div id="breadcrumb" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {heading && <h3 className="breadcrumb-header">{heading}</h3>}
            <ul className="breadcrumb-tree">
              {items.map((item, i) => {
                const isLast = i === items.length - 1;
                if (isLast) {
                  return <li key={i} className="active">{item.label}</li>;
                }
                return (
                  <li key={i}>
                    {item.to ? <Link to={item.to}>{item.label}</Link> : <a href="#">{item.label}</a>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
