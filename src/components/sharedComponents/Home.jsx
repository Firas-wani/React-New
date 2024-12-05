// import React, { useEffect, useState } from 'react'

// import api from '../../utils/AxiosInstance'
// import { toast } from 'react-toastify'


// const  Home = ()=> {
//     const [products, setProducts] = useState([]);
//     const [quantity, setQuantity] = useState(1);
   
//     const [loading, setLoading] = useState(false);



// const getProducts = async ()=>{
//     setLoading(true)
//     try {
//         const {data} = await api.get("/products/getproducts",)
//         setProducts(data.newProducts);
//       toast.success(data.message);
//     } catch (error) {
//         console.log(error);
        
//     }finally {
//         setLoading(false);
//       }
// }


// const addToCart = async(productId) =>{

// try {
//       await  api.post(`/products/addtocart/${productId}`,{ quantity})

//       toast.success("Added to  cart");



// } catch (error) {
    
//     toast.error("Failed to add to cart");
//     console.log(error);
    
// }
// }

// useEffect(() => {
//     getProducts();
//   }, []);








//   return (
//     <div>
// <h1>New Arrivals!</h1>
// <div className="main">
//   {products.slice(-3).map((product) => (
//     <div className="product" key={product._id}>
//       <div className="image">
//         <img src={product.imageUrl} alt={product.title} />
//       </div>
//       <div className="product-info">
//         <p className="title">{product.title}</p>
//         <p className="category">{product.category}</p>
//         <span>Select Quantity:</span>
//         <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
//           {[1, 2, 3].map((qty) => (
//             <option key={qty} value={qty}>{qty}</option>
//           ))}
//         </select>
//         <p className="price">₹ {product.price}</p>
//         <button onClick={() => addToCart(product._id)}>Add To Cart</button>
//       </div>
//     </div>
//   ))}
// </div>







//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react';
import api from '../../utils/AxiosInstance';
import { toast } from 'react-toastify';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/products/getproducts');
      setProducts(data.newProducts);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      await api.post(`/products/addtocart/${productId}`, { quantity });
      toast.success('Added to cart');
    } catch (error) {
      toast.error('Failed to add to cart');
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>New Arrivals!</h1>
      <div className="main">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.slice(-3).map((product) => (
            <div className="product" key={product._id}>
              <div className="image">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="product-info">
                <p className="title">{product.title}</p>
                <p className="category">{product.category}</p>
                <span>Select Quantity:</span>
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                >
                  {[1, 2, 3].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
                <p className="price">₹ {product.price}</p>
                <button onClick={() => addToCart(product._id)}>Add To Cart</button>
                {/* More Details Button */}
                <button
                  onClick={() => alert(`More details for ${product.title}`)}
                  className="more-details-btn"
                >
                  More Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
