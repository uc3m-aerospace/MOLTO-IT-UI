import React, {useEffect, useState } from 'react';
import '../../../styles/main.scss'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import constants from '../../../constants/cardsText';
import Typer from './Typer'
import { withHomeApiClient } from './../../apiHOCs';

const Images = ({ homeApiClient }) => {
  
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
  
    const fetch = async () => {
        setIsLoading(true);
        try {
          const res = await homeApiClient.getSliders();
          setSlides(res.data);
          setIsLoading(false);
          
        } catch (error) {
          setSlides([]);
          setIsLoading(false);
        }
      };
      fetch();
    }, []);

  return  <React.Fragment>
                
            <Slider className="slider-wrapper" autoplay="4000"> 
              { isLoading ?
                <div style={{display: 'flex', justifyContent: 'center', width: "100%"}}>    
                  <img style={{position: 'relative', width: "10%", marginBottom: "230px", marginTop: "210px"}} src={'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'} alt="loading..." />                            
                </div>                 
                : 
                slides ?         
                    Object.entries(slides).map(([key, value]) => { 
                      return <div key={key}>
                                <div key={key} style={{ textAlign: "center", alignContent: "center", height: "100vh",alignSelf: "center", background: `url(${value['images']['0']['url']}) no-repeat center center fixed`, backgroundSize: "cover" }}>
                                  <div className="inner" key={key}>
                                      <Typer
                                          dataText={value.title.split(',')} 
                                      />
                                      <p key={key}>{value.description}</p>
                                  </div>

                                </div>
                              </div>
                    })
                      :
                      <p>No data.</p>
                
              }       
            </Slider>
                  
          </React.Fragment>
}

export default withHomeApiClient(Images);
