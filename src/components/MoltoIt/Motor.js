import React from 'react';
import Nuclear from './MotorNuclear';
import Chemical from './MotorChemical';
import Electric from './MotorElectric';
import { useState } from 'react';
import './../../styles/main.scss';
import { withRouter } from 'react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconMotor from '../../assets/images/icons/MOTOR.svg';
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: '200px',
      width: '100%',
      height: '2px',
      backgroundColor: '#3a59fa;'
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    height: '26px',
    minHeight: '1px',
    fontFamily: 'HelveticaLT',
    minWidth: '20px',
    width: '20px',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(12),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px'
  },
  typography: {
    padding: theme.spacing(1)
  },
  demo2: {
    backgroundColor: 'transaparent',
    textAlign: 'center'
  }
}));

const TabTree = (props) => {
  switch (props.value) {
    case 0:
      return <Nuclear />;
    case 1:
      return <Electric />;
    case 2:
      return <Chemical />;
    default:
      break;
  }
};

const Motor = (props) => {
  const [value, setValue] = useState(1);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabContainer = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {TabTree(props)}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="container__title">
        <img src={IconMotor} alt="config" />
        <p className="Title">SELECT YOUR MOTOR</p>
      </div>

      <div className={classes.root}>
        <div className={classes.demo2}>
          <StyledTabs variant="fullWidth" value={value} onChange={handleChange}>
            <StyledTab
              style={{
                fontFamily: 'AvertaRegular',
                fontSize: '16px',
                backgroundColor: 'transparent'
              }}
              label="Nuclear"
            />
            <StyledTab
              style={{
                fontFamily: 'AvertaRegular',
                fontSize: '16px',
                backgroundColor: 'transparent'
              }}
              label="Electric"
            />
            <StyledTab
              style={{
                fontFamily: 'AvertaRegular',
                fontSize: '16px',
                backgroundColor: 'transparent'
              }}
              label="Chemical"
            />
          </StyledTabs>
        </div>
      </div>
      {<TabContainer value={value} function={handleChange} />}
    </React.Fragment>
  );
};

export default withRouter(Motor);
