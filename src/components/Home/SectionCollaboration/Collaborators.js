import React, {useState} from 'react';
import '../../../styles/main.scss'
import Card from '../SectionCollaboration/CardCollaborators'
import constants from '../../../constants/cardsText.js'
import axios from 'axios'

const getCollaborators = () => {
    let url = 'http://163.117.179.251:5000/collaborators'
    return axios.get(url).then(response => response.data)
}

const Collaboration = (props) => {
    const [collaborators, setCollaborators] = useState({});

getCollaborators().then((data) => {
        setCollaborators(data)
})

    return  <React.Fragment>
            <p>MOLTO is an open source project, so we really appreciate all the effort of everyone working in this project. If you want to join us. <a href="https://github.com/uc3m-aerospace/MOLTO-IT">Click here</a></p>
            <div className="SectionCollaboration">
            {Object.entries(collaborators).map(([key, value]) => {
               return <div className="CardCollaborators">
                         <Card name={value.Nombre} body={value.Descripcion} image={value.Imagen}/>
                </div>
            })
            }
            </div>
          </React.Fragment>
}

export default Collaboration;
