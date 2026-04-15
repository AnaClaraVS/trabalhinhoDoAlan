const ProductDetail =({...props})=>{
    return (<div {...props}>
    
    <section className="viewProduct">
        <div className="imgPrincipal"> //item img//</div>
        <div className="infoProduct">
            <h2> Nome item </h2>
            <h1> R$preço</h1>
            <h3> 12x R$preço parcelado</h3>
            <p> Cor: </p>
            <div className='opcColor'>
                //img cor variação//
            </div>
            <p>Tamanho:</p>
            <div className='opcTamanho'>
                //opc variação tamanho//
            </div>
            <h2>Frete</h2>
        </div>
    </section>
    
    </div>
)}
export default ProductDetail