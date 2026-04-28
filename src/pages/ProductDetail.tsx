const ProductDetail =({...props})=>{
    return (<div {...props}>


   <section className='flex pt-20'>     {/*TUDO (menos avaliação)*/}
        <section  className='flex flex-col'>         {/* Esquerda */}
                <div className="imgPrincipal">
                     <img className='h-130 pr-50'src='https://img.lojasrenner.com.br/item/927901963/original/12.jpg'></img></div>
            <section className='flex flex-col items-start'>
                <h2> Características</h2>
                <h3 className='text-black'> Descrição:</h3>
                <p> //descrição do item//</p>
            </section>
        </section>

        <section className='flex flex-col gijustify-items-start'>          {/* Direita */}
            <section className="BuyWindow,">    
                <div className='items-start'>
                    <p className='text-3xl text-black pb-5'> Nome item </p>
                    <h1 className='text-black pb-15'> R$preço</h1>
                    <p className='text-black'> Cor: </p>
                    <div className='opcColor'>
                         //img cor variação//
                    </div>
                    <p className='text-black'>Tamanho:</p>
                    <div className='opcTamanho'>
                            //opc variação tamanho com img//
                    </div>
                    <h2 className='pt-10'>Frete</h2>
                    <p className='text-black'> chegará entre .. e ..</p>
                    <button className='text-black'> comprar agora </button><br></br>
                    <button className='text-black'> adicionar ao carrinho</button>
                </div>
            </section>
            <div className="infoLoja">
                //icon loja//
                <p> nome loja</p>
                <h2> formas de pagamento</h2>
                //icon de bancos/pix //
            </div>
        </section>
    </section>
        <div className="Avaliações">
            <h2> Avaliações</h2>
            //estrelinhas avaliações *****
        </div>


    
    </div>
)}
export default ProductDetail