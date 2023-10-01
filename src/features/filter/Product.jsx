import { NavLink } from 'react-router-dom';

import FormatPrice from '../../components/utils/FormatPrice';

const Product = (item) => {
  const { id, name, image, price, category } = item;
  return (
    <NavLink
      to={`/products/${id}`}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
