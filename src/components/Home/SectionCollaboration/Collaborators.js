import React, {useState, useEffect} from 'react';
import '../../../styles/main.scss'
import Card from '../SectionCollaboration/CardCollaborators'
import { withHomeApiClient } from './../../apiHOCs';

const Collaboration = ({ homeApiClient }) => {

    const [collaborators, setCollaborators] = useState([{
        "photo": "",
        "name": "",
        "description": ""
    }]);
    const [isLoading, setIsLoading] = useState()
 
    useEffect(() => {
  
      const fetch = async () => {
          setIsLoading(true);
          try {
            const res = await homeApiClient.getCollaborators();
            setCollaborators(res.data);
            setIsLoading(false);
            
          } catch (error) {
            setCollaborators([{
                "photo": "",
                "collaborator_name": "",
                "description": "",
                "twitter": "",
                "linkedin": ""
            }]);
            setIsLoading(false);
          }
        };
        fetch();
      }, []);
      
    return  <div className="constrain">
                <p>MOLTO is an open source project, so we really appreciate all the effort of everyone on this team. If you want to join us. <a href="https://github.com/uc3m-aerospace/MOLTO-IT">Click here</a></p>
                <div className="SectionCollaboration">
                    { isLoading ?
                        <div style={{display: 'flex', justifyContent: 'center', width: "100%"}}>    
                            <img style={{position: 'relative', width: "10%", marginBottom: "230px", marginTop: "210px"}} src={'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'} alt="loading..." />                            
                        </div>                       
                        :    
                        Object.entries(collaborators).map(([key, value]) => {
                            console.log(value)
                            return  <div className="CardCollaborators" key={key}>
                                        <Card name={value.collaborator_name} body={value.description} image={value.photo.url} twitter={value.twitter} linkedin={value.linkedin}/>
                                    </div>
                        })                
                    }   
                </div>
           </div>
}

export default withHomeApiClient(Collaboration);
