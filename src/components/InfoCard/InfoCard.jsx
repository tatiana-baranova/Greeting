import { GiLoveInjection, GiLoveLetter, GiLovers, GiStrongMan } from 'react-icons/gi';
import s from './InfoCard.module.css';
import { IoAccessibility, IoBatteryFull, IoCafeOutline, IoExtensionPuzzle, IoGift, IoHeartCircleOutline, IoPeopleSharp, IoShieldHalf, IoStorefront } from 'react-icons/io5';
import { ImInfinite } from 'react-icons/im';

const InfoCard = () => {
    return (
        <div>
            <h2 className={s.title}>За що я тебе Кохаю <GiLoveLetter size='30' color='red'/></h2> 
            <ul className={s.list}>
                <li className={s.text}>Ти дуже мужній <GiStrongMan size='30' color='red'/></li>
                <li className={s.text}>Ти дуже сміливий <IoShieldHalf size='30' color='red'/></li>
                <li className={s.text}>Ти дуже милий <IoHeartCircleOutline size='30' color='red'/></li>
                <li className={s.text}>Ти дуже турботливий <IoStorefront size='30' color='red'/></li>
                <li className={s.text}>Я дуже пишаюся тобою <IoAccessibility size='30' color='red'/></li>
                <li className={s.text}>Я ціную твою підтримку <IoPeopleSharp size='30' color='red'/></li>
                <li className={s.text}>Я дякую тобі за всі подарунки <IoGift size='30' color='red'/></li>
                <li className={s.text}>Ти частинка мене <IoExtensionPuzzle size='30' color='red'/></li>
                <li className={s.text}>Ти ліки від смутку <GiLoveInjection size='30' color='red'/></li>
                <li className={s.text}>Ти мооя батарейка <IoBatteryFull size='30' color='red'/></li>
                <li className={s.text}>Хочу зранку пити каву разом <IoCafeOutline size='30' color='red'/></li>
                <li className={s.text}>Хочу з тобою все життя <ImInfinite size='30' color='red'/>
                </li>
                <li className={s.text}>Завжди чекаю вдома <GiLovers size='30' color='red'/></li>
            </ul>
                {/* <button type='submit' className={s.btn}>Дякую Тобі</button> */}
        </div>
    )
}
export default InfoCard;