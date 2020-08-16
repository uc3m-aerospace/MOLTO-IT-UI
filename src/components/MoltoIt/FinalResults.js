import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/core';

const FinalResults = (props) => {
  const data = useSelector((state) => state.moltoItConfig);
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setLoader(data.response);
    let dataRaw = data.response;
    let base64 = dataRaw.split(',')[1];

    setUrl(base64);
  }, [data.response]);
  console.log(`data:image/png;base64," + ${url}`);
  return (
    <React.Fragment>
      {loader ? null : (
        <div className="loader">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
      <p className="TitleFinalResults">RESULTS</p>

      <div className="ResultsContainer">
        <div style={{ flex: 1, backgroundColor: 'transparent' }} />

        <div
          style={{ margin: '20px', flex: 3, backgroundColor: 'transparent' }}
        >
          <img
            src={data.response}
            width="100%"
            height="100%"
            alt="image_orbit"
          />
        </div>

        <div style={{ flex: 1, backgroundColor: 'transparent' }}>
          <p
            className="TitleFinalResults"
            style={{
              fontSize: '14px',
              marginLeft: '60px',
              marginRight: '60px'
            }}
          >
            Options
          </p>

          <button className="buttonTabsResults">
            <a href={`data:image/png;base64,${url}`} download="orbit.png">
              Download Image
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FinalResults;
