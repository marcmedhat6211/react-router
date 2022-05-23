import { useParams } from "react-router-dom";

const ProductDetail = () => {
  /**
   * The useParams hook is a custom hook made by the react router dom team
   * The useParams hook returns an object with a key value pair where the key is the key i used in the route afte the /: and the value is its value
   */
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
