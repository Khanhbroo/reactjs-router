import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to <Link to="/">home</Link>
      </p>
    </>
  );
};

export default ProductsPage;
