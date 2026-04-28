const ProductDetail =({...props})=>{
    return (<div {...props}>
    
    <section className="viewProduct">
        <section className="Esquerda">
            <section className="ProducInfo">
                <div className="imgPrincipal"> //item img//</div>
                <h2> Características</h2>
                <h3> Marca:</h3>
                <h3> Tipo:</h3>
                <h3> Descrição:</h3>
                <p> //descrição do item//</p>
            </section>
        </section>

        <section className="Direita">
            <section className="BuyWindow">
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
                            //opc variação tamanho com img//
                    </div>
                    <h2>Frete</h2>
                    <p> chegará entre .. e ..</p>
                    <button> comprar agora </button>
                    <button> adicionar ao carrinho</button>
                </div>
            </section>
            <div className="infoLoja">
                //icon loja//
                <p> nome loja</p>
                <h2> formas de pagamento</h2>
                //icon de bancos/pix //
            </div>
        </section>
        <div className="Avaliações">
            <h2> Avaliações</h2>
            //estrelinhas avaliações *****
        </div>
    </section>


    
    </div>
)}
export default ProductDetail