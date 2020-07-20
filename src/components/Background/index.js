import Particles from 'react-particles-js';
import React from 'react'

const Background = () => {
  
    return (
        <Particles width="100%" height="100%" style={{position: 'absolute', zIndex: -2}}
        params={{
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "line_linked": {
                    "enable": true,
                    "opacity": 0.13
                },
                "move": {
                    "direction": "right",
                    "speed": 0.35
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1.8,
                        "opacity_min": 0.1
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }} />
    );
};

export default Background;