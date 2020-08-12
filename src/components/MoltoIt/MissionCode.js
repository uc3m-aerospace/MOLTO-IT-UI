import React, {useState, useEffect, useRef} from 'react'
import {withRouter} from 'react-router-dom';
import { withMoltoItClient } from './../apiHOCs';
import { useToast } from "@chakra-ui/core";
import {Link} from "react-router-dom";
import Results from './Results'
import ModalResults from './ModalResults';

const MissionCode = ({moltoItApiClient, props}) => {  

    const [code, setCode] = useState('')
    const toast = useToast()    
    const [status, setStatus] = useState(false)

    const handleClick = () => {
        fetch(code)
    }

    const handleEvent = (event) => {
        setCode(event.target.value)
    }

    const fetch = async (code) => {
        try {
            const res = await moltoItApiClient.getMissionByCode(code);            
            console.log(res)

            if (res.status === 200 & res.data.length > 0 ) {
                toast({
                    position: "top",
                    title: "Mission found",
                    description: `We have found a mission with your code and its status is ${res.data[0].status}.`,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                })
                
                setStatus(true)
            } else if (res.data.length <= 0) {
                toast({
                    position: "top",
                    title: "Mission not found",
                    description: "We haven't found a mission with your code.",
                    status: "warning",
                    duration: 9000,
                    isClosable: true,
                })
            }
        } catch (error) {
            console.log(error)
            toast({
                position: "top",
                title: "Mission not found.",
                description: error,
                status: "error",
                duration: 9000,
                isClosable: true,
            })

        }
    };

    console.log(code)
    return  <React.Fragment>
                <div className="SectionTabs">
                    <p className="Title">Do you have a mission code?</p>
                    <p style={{color: "white"}}>If you have a mission code, please introduce it within the next input, if not please continue and click the create button.</p>
                    <input style={{borderBottom: "2px solid green"}} type="text" value={code} onChange={(event) => handleEvent(event) } placeholder="Introduce your code"/>
                    <button onClick={() => handleClick()}>Send</button>
                    <Link to='moltoit/new'><button>Create</button></Link>
               </div>
               {status ?
                <ModalResults isOpen={true} code={code}/> :
                null
               }
            </React.Fragment>
    }

  export default withMoltoItClient(withRouter(MissionCode));