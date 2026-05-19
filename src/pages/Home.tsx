
import useNavigation from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";

const Home =({...props})=>{
    const { goToProduct} = useNavigation()
    const { products, loading,  } = useStore();
    if(loading)return<div>Loading</div>
    return(
        <div {...props} className="flex flex-col">


          <div className="flex flex-wrap gap-4">
              {products.length>0 && products.map((item)=>(

                <div key={item.id} className="w-40 border-2 p-2 cursor-pointer flex items-center flex-col" onClick={()=>goToProduct(item.id.toString())}>
                   <img src={item.images[0]} alt={item.title} className="w-32 h-32 object-cover" />
                    <p className="font-[600]">{item.title}</p> 
                    <p>R${item.price},00</p> 
                </div>





            )
        )}
       
        </div>
        </div>
    )
}
export default Home