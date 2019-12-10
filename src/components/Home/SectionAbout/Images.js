import React, {useEffect, useState } from 'react';
import '../../../styles/main.scss'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import constants from '../../../constants/cardsText';
import Typer from './Typer'
import axios from 'axios'

const getSlider = async () => {
let url = 'http://163.117.179.251:5000/sliders'
  return await axios.get(url).then(response => response.data)
}

const Images = () => {
  const [slides, setSlides] = useState({});
  useEffect(() => {
    getSlider().then((data) => {
        setSlides(data)
    })  
  })
  
  return  <React.Fragment>
                <Slider className="slider-wrapper" autoplay="4000">
                {Object.entries(slides).map(([key, value]) => { return <div>
                      <div
                        key={key}
                        style={{ textAlign: "center", alignContent: "center", height: "100vh",alignSelf: "center", background: `url(${value.image}) no-repeat center center fixed`, backgroundSize: "cover" }}
                      >
                          <div className="inner">
                              <Typer
                                  dataText={value.title.split(',')} 
                              />
                            <p>{value.description}</p>
                          </div>

                      </div>

                  </div>
                }
                )
              }
                </Slider>
                
          </React.Fragment>
}

export default Images;
