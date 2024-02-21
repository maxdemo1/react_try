// src/App.jsx

import Product from "./Product";


export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product name='first'
        imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=240&w=320'
        price={19} />
      <Product name='second'
       imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=240&w=320'
        price={20}/>
      <Product name='tacotaCo'
       imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=240&w=320'
        />
    </div>
  );
}
