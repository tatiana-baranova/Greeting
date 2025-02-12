import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import s from './HeartButton.module.css'
import { BsPersonHearts } from "react-icons/bs";

const HeartButton = () => {
    const [hearts, setHearts] = useState([]);

    const handleClick = () => {
    const id = Math.random();
    setHearts([...hearts, { id }]);

    setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 2000);
    };

    return (
    <div className="relative flex flex-col items-center justify-center h-screen">
        <h3 className={s.text}>Твоя Булочка <BsPersonHearts size='20' color='red'/></h3>
        <button
        className={s.btn}
        onClick={handleClick}
        >
        💖 Дякую Тобі
        </button>
        {hearts.map(({ id }) => (
        <motion.div
            key={id}
            initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100, x: Math.random() * 100 - 50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute text-red-500 text-3xl"
            style={{ bottom: 50 }}
        >
            <Heart size={30} color="red"/>
        </motion.div>
        ))}
    </div>
    );
};

export default HeartButton;
