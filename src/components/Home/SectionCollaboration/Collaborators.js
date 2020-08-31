import React, { useState, useEffect } from 'react';
import '../../../styles/main.scss';
import Card from '../SectionCollaboration/CardCollaborators';
import { withHomeApiClient } from './../../apiHOCs';
import { getCookie } from './../../../helpers';
import { Spinner } from '@chakra-ui/core';

const Collaboration = ({ homeApiClient }) => {
  const [collaborators, setCollaborators] = useState([
    {
      photo: '',
      name: '',
      description: ''
    }
  ]);
  const [isLoading, setIsLoading] = useState();

  const getToken = async () => {
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
