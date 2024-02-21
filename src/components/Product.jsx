const Product = ({name, imgUrl, price='not avaliable'})=> {
  

  return (
    <div>
  
      <h2>{name}</h2>
      <img src={imgUrl} alt="Tacos With Lime" />
			<p>Price: {price} credits</p>
    </div>
  );
};

export default Product;