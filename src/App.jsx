import  img1 from './assets/img1.jpg';
import './App.css'
import ImageCard from './components/ImageCard/ImageCard'
import InfoCard from './components/InfoCard/InfoCard';
import HeartButton from './components/HeartButton/HeartButton';

function App() {
  return (
    <>
    <ImageCard img={img1} love="Котик" />
    <InfoCard/>
    <HeartButton />
    </>
  )
}

export default App
