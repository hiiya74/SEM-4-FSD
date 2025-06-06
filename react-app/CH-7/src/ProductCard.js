function ProductCard(props) {
    return(
        <>
        {props.productList.map((product,index) => 
        (
            <div>
                <h2>id:{product.id}</h2>
                <h2>title:{product.title}</h2>
                <h2>Price: {product.price}</h2>
                <h2>Category: {product.category}</h2>
                <h2>Rating: {product.rating}</h2>
            </div>
        ))}
    </>
        );
}
export default ProductCard;
