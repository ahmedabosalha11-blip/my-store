import './hero.css';
import heroImage from '../../img/p.png';

function HeroSection() {
  return (
    <div className='hero container'>
       <div className="hero-section d-flex align-items-center justify-content-between">
          <div className="info h-100">
            <h3 className='text-primary fw-bold'>All-in-One Essentials for Your Daily Routine</h3>
            <p className='text-black-50'>Experience the perfect blend of crystal-clear sound, seamless productivity on the go, and your favorite cup of coffee to kickstart your day with energy and focus. Designed specifically to complement your modern lifestyle.</p>
          </div>
          <div className="image-box w-75 h-100">
            <img className='img-fluid' src={heroImage} alt="" />
          </div>
       </div>
    </div>
  )
}

export default HeroSection


