export default function ProductDetails({params}:{
    params:{productId:string};
}){
    return <h1>Details of product page {params.productId}</h1>
}