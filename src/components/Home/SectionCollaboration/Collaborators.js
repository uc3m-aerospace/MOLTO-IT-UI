import React, { useState, useEffect } from 'react';
import '../../../styles/main.scss';
import Card from '../SectionCollaboration/CardCollaborators';
import { withHomeApiClient } from './../../apiHOCs';
import { getCookie } from './../../../helpers';
import { Spinner } from '@chakra-ui/core';

const Collaboration = ({ homeApiClient }) => {
  const [collaborators, setCollaborators] = useState([
    {
      photo: 'https://drive.google.com/file/d/1KLcRIt4Fs9QRSNQrdY863OQbOnLW6DQR/view?usp=sharing',
      name: 'Brandon Escamilla',
      description: 'Space Engineering student, who contribute in Google Summer of Code collaborating in MOLTO. His areas of interest are focused in astrodynamics, space systems, and space propulsion.'
    },
    {
      photo: 'https://drive.google.com/file/d/1LJSqAe_-ov0Sm_sYZOcH5zGW1cygrS8k/view?usp=sharing',
      name: "Dr. David Morante",
      description: "Aerospace Engineer, currently doing a PhD on Space Trajectory Optimization, developing new tools that could make interplanetary missions more affordable in terms of travel time or propellant consumed. He is fascinated by the cutting-edge technology developed by the space sector and willing to use this knowledge to help others.  He is also passionate about Astronomy and the mysteries of outer space."
    },
    {
      photo: 'https://i1.rgstatic.net/ii/profile.image/370721810337794-1465398375177_Q128/Manuel-Sanjurjo-Rivo.jpg',
      name: "Dr. Manuel Sanjurjo",
      description: "Dr. Manuel Sanjurjo Rivo is an assistant professor at the Aerospace Department of UC3M. His research interests range from celestial mechanics to space tether dynamics or trajectory optimization. He teaches several grade and master courses in flight dynamics and astrodynamics."
    }
  ]);
  const [isLoading, setIsLoading] = useState();

  /*const getToken = async () => {
    try {
      return await getCookie('jwt');
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const token = await getToken();

      if (token) {
        try {
          const res = await homeApiClient.getCollaborators();
          setCollaborators(res.data);
          setIsLoading(false);
        } catch (error) {
          setCollaborators([
            {
              photo: '',
              collaborator_name: '',
              description: '',
              twitter: '',
              linkedin: ''
            }
          ]);
          setIsLoading(false);
        }
      }
    };
    fetch();
  }, []);
  */
  return (
    <div className="constrain">
      <p>
        MOLTO is an open source project, so we really appreciate all the effort
        of everyone on this team. If you want to join us.{' '}
        <a
          style={{ color: '#3a59fa' }}
          href="https://github.com/uc3m-aerospace/MOLTO-IT"
        >
          Click here
        </a>
      </p>
      <div className="SectionCollaboration">
        {isLoading ? (
          <div className="loader__collaborators">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          Object.entries(collaborators).map(([key, value]) => {
            return (
              <div className="CardCollaborators" key={key}>
                <Card
                  name={value.collaborator_name}
                  body={value.description}
                  image={value.photo.url}
                  twitter={value.twitter}
                  linkedin={value.linkedin}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default withHomeApiClient(Collaboration);
