import React, {useState, useEffect} from 'react'
import Orbit from '../../assets/images/orbit.png'
import {useSelector} from 'react-redux'

const FinalResults = (props) => {  
    const data = useSelector(state => state.moltoItData);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        console.log(data.response)
        setLoader(data.response)
    })

    return  <React.Fragment>
           { loader ?
                     null
                        :    
                    <div>
                        <div style={{backgroundColor: 'black', opacity: 0.9, position: "absolute", zIndex: 995, top: 0, right: 0, bottom: 0, left: 0}}></div>
                        <img style={{position: 'absolute', width: "10%", left: "45%", top:"22%", zIndex: 999}} src={'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'} alt="loading..." />
                    </div> 
            }
            <p className="TitleFinalResults">RESULTS</p>
            
            <div className="ResultsContainer">
                <div style={{flex: 1, backgroundColor:"transparent"}}/>
                
                <div style={{flex: 3, backgroundColor:"transparent"}}>
                    <img src={data.response} width="100%" height="100%" alt="image_orbit"/>
                </div>

                <div style={{flex: 1, backgroundColor:"transparent"}}>
                <p className="TitleFinalResults" style={{fontSize: "14px", marginLeft: "60px", marginRight: "60px"}}>Options</p>
                    <button className="buttonTabsResults"><a href={"data:image/png;base64," + data.response} download="orbit.png">DOWNLOAD RESULTS</a></button>
                    <button className="buttonTabsResults">SHARE RESULTS</button>
                </div>
            </div>
                





                
            </React.Fragment>
  }
  
  export default FinalResults;