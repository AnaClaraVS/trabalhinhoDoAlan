interface HomeCardsProps {
    item: {
        id: number;
        title: string;
        price: number;
        images: string[];
    };
}
const HomeCards = ({ item }: HomeCardsProps) => {
    return (
        <div key={item.id} className="w-30 p-2 cursor-pointer flex justify-center items-center flex-col">
            <img src={item.images[0]} alt={item.title} className="w-32 h-32 object-cover" />
            <p className="font-[600]">{item.title}</p>
            <p>R${item.price},00</p>
        </div>
    );
};

export default HomeCards;