import s from './Header.module.css'
import { motion } from "framer-motion";

const LoveHeader = () => {
  return (
    <header style={headerStyle}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={titleStyle}
      >
        💖 Кохаю Тебе Котику 💖
      </motion.div>
        <div className={s.card}>
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        style={heartStyle}
      >
        ❤️
      </motion.div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        style={heartStyle}
      >
        💌
      </motion.div>
        </div>
      
    </header>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "20vh",
  flexDirection: "column",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "5px",
};

const heartStyle = {
  fontSize: "2rem",
  margin: "4px",
};

export default LoveHeader;
