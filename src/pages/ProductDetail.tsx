const ProductDetail = ({ ...props }) => {
    return (<div {...props}>


        <section className='flex pt-20 pb-50'>     {/*TUDO (menos avaliação)*/}
            <section className='flex flex-col '>         {/* Esquerda */}
                <div className="imgPrincipal">
                    <img className='h-130 pr-25 pl-25' src='https://img.lojasrenner.com.br/item/927901963/original/12.jpg'></img></div>
                <section className='flex flex-col items-start'>
                    <h2> Características</h2>
                    <h3 className='font-[600]'> Descrição:</h3>
                    <p> //descrição do item//</p>
                </section>
            </section>

            <section className='flex flex-col justify-items-start w-75 text-left'>          {/* Direita */}
                <section className="pb-15 border-2 border-[#d2c4b4] rounded-lg ">
                    <div className='items-start'>
                        <p className='text-3xl  pb-5 font-[500]'> Nome item </p>
                        <p className=' text-4xl font-[700]'> R$preço</p>
                        <p className='text-blue-500  text-xl pb-15'>★★★★★</p>
                        <p className='font-[600]'> Cor: </p>
                        <div className='opcColor'>
                         //img cor variação//
                        </div>
                        <div className='opcTamanho pt-5'>
                        <p className='font-[600]'>Tamanho:</p>
                            <button className="border-[#2c5596] bg-#9db8e3 hover:bg-[#88a8db] focus:bg-[#182c4d] focus:border-[#071121] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> PP </button>
                            <button className="border-[#2c5596] bg-#9db8e3 hover:bg-[#88a8db] focus:bg-[#182c4d] focus:border-[#071121] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1">  P </button>
                            <button className="border-[#2c5596] bg-#9db8e3 hover:bg-[#88a8db] focus:bg-[#182c4d] focus:border-[#071121]  focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> M </button>
                            <button className="border-[#2c5596] bg-#9db8e3 hover:bg-[#88a8db] focus:bg-[#182c4d]  focus:border-[#071121] focus:text-white-700 rounded-lg duration-300 ease-in border-3  focus:text-white w-9 h-9 m-1"> G </button>
                            <button className="border-[#2c5596] bg-#9db8e3 hover:bg-[#88a8db] focus:bg-[#182c4d] focus:border-[#071121] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> GG </button>
                        </div>
                        <p className='pt-10 text-green-500 text-2xl font-[700]'>Frete Grátis</p>
                        <p className='pb-9 text-green-500 text-lg font-[600]'> chegará entre .. e ..</p>
                        <div className='flex flex-col items-center'>
                            <button className='bg-[#aacddc] rounded-lg p-2 cursor-pointer font-[700] hover:bg-[#9bbfcf] text-white duration-300 ease-in'> Comprar Agora </button><br></br>
                            <button className='bg-[#7b8ab3] rounded-lg p-2 cursor-pointer font-[700] hover:bg-[#6f7ea8] text-white duration-300 ease-in'> Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </section>
                <div className="infoLoja">
                //icon loja//
                    <p> nome loja</p>
                    <p> formas de pagamento</p>
                //icon de bancos/pix //
                </div>
            </section>
        </section>
        <div className="Avaliações">
            <h2> Avaliações</h2>
            //estrelinhas avaliações ★★★★★
        </div>



    </div>
    )
}
export default ProductDetail