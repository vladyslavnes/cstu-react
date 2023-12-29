// Import necessary libraries
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    // Slick settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mt-3">
            <h2>Home</h2>
            <h2>Welcome to Our University React Site</h2>
            <p>
                Explore the boundless possibilities of learning and innovation with our university-inspired React site.
                Immerse yourself in a digital ecosystem that mirrors the vibrancy of our academic community. As you
                navigate through the captivating carousel, envision the dynamic journey that awaits you on this virtual
                campus.
            </p>
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/1/800/400" alt="Slide 1"/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/2/800/400" alt="Slide 2"/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/3/800/400" alt="Slide 3"/>
                </div>
                {/* Add more slides as needed */}
            </Slider>
            <div style={{ height: 40 }}></div>
            <p>
                The slideshow captures moments of discovery, echoes of lectures, and the essence of collaboration. Each
                slide tells a story, inviting you to delve into the realms of knowledge and creativity. Whether you're a
                student, faculty member, or a curious visitor, this platform is designed to inspire, educate, and
                connect minds across the digital landscape.
            </p>
            <p>
                Join us on this exciting expedition where technology meets academia. Engage with interactive content,
                stay informed about the latest research, and embrace the spirit of continuous learning. This is more
                than a website; it's a gateway to a world where ideas flourish, and the pursuit of knowledge knows no
                bounds.
            </p>
        </div>
    );
};

export default Home;
