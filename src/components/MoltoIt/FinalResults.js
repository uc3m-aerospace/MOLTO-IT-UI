import React from 'react'
import Orbit from '../../assets/images/orbit.png'
import {useSelector} from 'react-redux'

const FinalResults = (props) => {  
    const data = useSelector(state => state.moltoItData);

    return  <React.Fragment>
            <p className="TitleFinalResults">RESULTS</p>
            
            <div className="ResultsContainer">
                <div style={{flex: 1, backgroundColor:"transparent"}}/>
                
                <div style={{flex: 3, backgroundColor:"transparent"}}>
                    <img src={/*data.response.image*/Orbit} width="100%" height="100%" alt="image_collaborator"/>
                </div>

                <div style={{flex: 1, backgroundColor:"transparent"}}>
                <p className="TitleFinalResults" style={{fontSize: "14px", marginLeft: "60px", marginRight: "60px"}}>Options</p>
                    <button className="buttonTabsResults">DOWNLOAD RESULTS</button>
                    <button className="buttonTabsResults">SHARE RESULTS</button>
                </div>
            </div>
                
            </React.Fragment>
  }
  
  export default FinalResults;