import React, {useEffect, useState } from 'react';
import '../../../styles/main.scss'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import constants from '../../../constants/cardsText';
import Typer from './Typer'
import { withHomeApiClient } from './../../apiHOCs';

const Hero = ({ homeApiClient }) => {
  
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
        
            <Typer
                dataText={"MOLTO is the best Open Source mission tool,Optimize your mission today.".split(',')/*value.title.split(',')*/}
            />
        
          </React.Fragment>
}

export default withHomeApiClient(Hero);
