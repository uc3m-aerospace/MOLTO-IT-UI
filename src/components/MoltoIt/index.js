import React, {useState} from 'react';
//import {useStyle} from 'react';
import './../../styles/main.scss'
import { withRouter } from "react-router";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabDecision from './Tabs'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FinalResults from './FinalResults'



const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        maxWidth: '90px',
        width: '100%',
        height: '2px',
        backgroundColor: '#70C483',
      },
    },
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      height: '26px',
      minHeight: '1px',
      fontFamily: "HelveticaLT",
      minWidth: '20px',
      width: '20px',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(12),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: '40px'
    },
    typography: {
      padding: theme.spacing(3),
    },
    demo2: {
      backgroundColor: 'transparent',
      textAlign: 'center'
    },
  }));


  const MoltoIt = (props) => {  
        const [value, setValue] = useState(0);
        const classes = useStyles();
        
      
        const handleChange = (event, newValue) => {

            if (newValue === 9) {
              window.location.reload()
              props.history.push('/moltoit')
            }


            setValue(newValue)
        }

        const TabContainer = (props) => {
            return (
              <div className="SectionTabs">
                 <TabDecision value={props.value} function={props.function} />
              </div>
            );
        }

        return (  
            <React.Fragment>
          
              {value !== 8 ?
                    <div className={classes.root}>
                        <div className={classes.demo2}>
                            <StyledTabs variant="fullWidth" value={value} onChange={handleChange}>
                                <StyledTab label="Configuration" />
                                <StyledTab label="Launch Window" />
                                <StyledTab label="From" />
                                <StyledTab label="Destination" />
                                <StyledTab label="Mission Type" />
                                <StyledTab label="Motor" />
                                <StyledTab label="Flight Time" />
                                <StyledTab label="Pareto Front" />
                            </StyledTabs>
                        </div>
                    </div>
                :
                <FinalResults/>
              } 
                    {<TabContainer value={value} function={handleChange}/>}

                    {value === 0 || value === 6 || value === 7 ? null : <button className="buttonTabs" onClick={() => handleChange(null, value !== 7 ? value + 1 : value + 1)}>{value === 8 ? "NEW MISSION" : "SUBMIT"}</button>}
                    
                    {value === 8 ? <button className="buttonTabs" style={{left: 0, backgroundColor: 'gray', marginLeft: "60px" }} onClick={() => handleChange(null, value - 1)}>BACK</button> : null}
            
            </React.Fragment>
          
        );
}

export default withRouter(MoltoIt);
