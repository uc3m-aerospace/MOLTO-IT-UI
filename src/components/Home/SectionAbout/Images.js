import React, { Fragment } from 'react';
import Image1 from '../../../assets/images/sky3.jpeg'
import Image2 from '../../../assets/images/Sky.jpeg'
import Image3 from '../../../assets/images/sky3.jpeg'
import '../../../styles/main.scss'

const Images = () => {
  return  <React.Fragment>
            <div className="SectionImages">
                <img src={Image1}/>
                <img src={Image2} />
                <img src={Image3}/>
            </div>
          </React.Fragment>
}

export default Images;
