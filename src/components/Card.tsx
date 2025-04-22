import { CardItem } from '../types';
interface Cards {
    cards: CardItem[] | undefined
}

const Card: React.FC<Cards> = ({ cards }) => {

    return (
        <div className='flex gap-x-6'>
            {
                cards?.map((item) => (
                    <div key={item.id} className="bg-[#FCFCFD] px-1.5 pt-1.5 pb-4 rounded-lg">
                        <img className='h-44 pb-2' src={item.imgCard} alt="img card" />
                        <h3 className='text-xl font-semibold px-1.5 pb-2'>{item.tituloCard}</h3>
                        <p className='text-md px-1.5'>{item.textCard}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;