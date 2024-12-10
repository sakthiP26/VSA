import React from 'react';
import './Home.css';


import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [c1, c2, c3]; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>❮</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="carousel-button next" onClick={handleNext}>❯</button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <Carousel />
      </div>
      <div className="right-side">
        <h1>Welcome to Software Academy</h1>
        <p>
          At Software Academy, we offer comprehensive courses in software development,
          machine learning, and much more. Our mission is to empower learners with the
          skills and knowledge to excel in the tech industry.
        </p>
        <ul>
          <li>Hands-on coding experience</li>
          <li>Expert instructors</li>
          <li>Industry-leading curriculum</li>
          <li>Collaborative learning environment</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
