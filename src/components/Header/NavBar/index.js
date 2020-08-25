import React, { useState } from 'react';
import Logo from '../../../assets/images/molto-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { withRouter } from 'react-router';
import '../../../styles/main.scss';
import { useWindowSize } from '../../Hooks/useWindowSize';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const pathname = window.location.pathname;

  const menu = {
    close: { y: 0 },
    open: { y: -8 }
  };

  const menuContainer = {
    initial: { opacity: 0, y: -480 },
    closed: { opacity: 0, zIndex: -7, transition: { duration: 0.5 } },
    open: { opacity: 1, y: 270, zIndex: 7, transition: { duration: 0.5 } }
  };

  const first = {
    close: { opacity: 1, rotate: 0 },
    open: { opacity: 0, transition: { duration: 0.1 } }
  };

  const second = {
    initial: { opacity: 1, rotate: 0 },
    close: { opacity: 1, rotate: 0, y: 0 },
    open: { opacity: 1, rotate: -45, y: 8 }
  };

  const third = {
    close: { opacity: 1, rotate: 0 },
    open: { opacity: 1, rotate: 45 }
  };

  const getLogo = () => {
    return Logo;
  };

  return (
    <React.Fragment>
      <div className="Header">
        {size.width > 1024 ? (
          <>
            <a href="/">
              <img
                src={getLogo()}
                style={{ height: '60px', marginRight: '40px' }}
                alt="logo"
              />
            </a>
            <ul>
              <li>
                <a href="/#About" target="_self">
                  About Us
                </a>
              </li>

              <li>
                <a href="/#Missions" target="_self">
                  Space Missions
                </a>
              </li>

              <li>
                <a href="/#Collaboration" target="_self">
                  Collaboration
                </a>
              </li>

              <li>
                <a href={pathname + '#Contact'} target="_self">
                  Contact
                </a>
              </li>

              <ul className="fixedIcons">
                <li style={{ width: '40px' }}>
                  <a href="https://github.com/uc3m-aerospace/MOLTO-IT">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
              </ul>
            </ul>
          </>
        ) : (
          <ul>
            <img src={getLogo()} style={{ height: '45px' }} alt="logo" />

            <motion.div
              variants={menu}
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
              animate={isOpen ? 'open' : 'close'}
              whileHover={{ scale: 1.2, opacity: 1 }}
              style={{ right: 0, width: '30px', height: '30px' }}
            >
              <motion.div
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                variants={first}
                style={{
                  width: '100%',
                  marginBottom: '6px',
                  height: '2px',
                  backgroundColor: 'white'
                }}
              ></motion.div>
              <motion.div
                style={{
                  width: '100%',
                  marginBottom: '6px',
                  height: '2px',
                  backgroundColor: 'white'
                }}
                initial="initial"
                animate={isOpen ? 'open' : 'close'}
                variants={second}
              ></motion.div>
              <motion.div
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'white'
                }}
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                variants={third}
              ></motion.div>
            </motion.div>

            <ContainerHeader
              initial="initial"
              animate={isOpen ? 'open' : 'closed'}
              variants={menuContainer}
            >
              <UnorderedList>
                <List whileHover={{ scale: 1.2 }}>
                  <ListLink whileHover={{ color: '#3a59fa' }} href="/#Missions">
                    Space Missions
                  </ListLink>
                </List>
                <List whileHover={{ scale: 1.2 }}>
                  <ListLink
                    whileHover={{ color: '#3a59fa' }}
                    href="/#Collaboration"
                  >
                    Collaborators
                  </ListLink>
                </List>
                <List whileHover={{ scale: 1.2 }}>
                  <ListLink whileHover={{ color: '#3a59fa' }} href="/moltoit">
                    MOLTO-IT
                  </ListLink>
                </List>
                <List whileHover={{ scale: 1.2 }}>
                  <ListLink
                    whileHover={{ color: '#3a59fa' }}
                    href="https://github.com/uc3m-aerospace/MOLTO-IT"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </ListLink>
                </List>
              </UnorderedList>
            </ContainerHeader>
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

const ListLink = styled(motion.a)`
  color: white;
  font-size: 22px !important;
`;
const ContainerHeader = styled(motion.div)`
  width: 100vw;
  height: 400px;
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  left: 0;
  right: 0;
  margin: auto;
`;

const UnorderedList = styled(motion.ul)`
  display: flex;
  flex-direction: column !important;
  width: 100% !important;
  height: 100%;
`;

const List = styled(motion.li)`
  display: flex !important;
  align-self: center !important;
  width: 100% !important;
  justify-content: center !important;
  align-items: center !important;
  font-size: 22px !important;
`;

export default withRouter(NavBar);
