import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id:'p1',
      price:7,
      title:'My First Book',
      description:'This is a first product - amazing!'
    },
    {
      id:'p2',
      price:5,
      title:'MY Second Book',
      description:'This is a second product - amazing!'
    },
    {
      id:'p3',
      price:9,
      title:'My Third Book',
      description:'This is a third product - amazing!'
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(product=> <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)
        }
       
      </ul>
    </section>
  );
};

export default Products;
