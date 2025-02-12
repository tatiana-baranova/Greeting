
import s from './ImageCard.module.css'

const ImageCard = ({img, love}) => {
    return (
        <div>
            <h1 className={s.title}>Кохаю Тебе Котику❤️</h1>
            <div className={s.cardImg}>
            <img src={img} alt={love} className={s.card} />
            </div>
            
        </div>
        
    )
}
export default ImageCard;