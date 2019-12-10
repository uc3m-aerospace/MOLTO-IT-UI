import React from 'react';
import '../../../styles/main.scss'

class Typer extends React.Component {

    static defaultProps = {
      heading: '',
      dataText: []
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150
      }
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });
  
      if (!isDeleting && text === fullText) {
        
        setTimeout(() => this.setState({ isDeleting: true }), 500);
        
      } else if (isDeleting && text === '') {
        
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
        
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
          <React.Fragment>
        <div style={{display: "flex", flexDirection: "column", paddingLeft:"60px", textAlign: "center", alignContent:"center"}}>
                
            <p style={{marginBottom: "0px", fontFamily: "HelveticaLT", fontStyle: "normal", fontSize: "35px"}}> { this.props.heading }&nbsp; </p>
                <h1 style={{ marginBottom: "20px", paddingRight: "9px"}}>        
                    <span style={{fontSize: "60px", fontFamily: "HelveticaLT", color:"#32ff7e", fontStyle: "Bold"}}>{ this.state.text }</span>
                    <span id="cursor"/>
                </h1>
            <p style={{ marginTop: "0px",fontFamily: "HelveticaLT", fontStyle: "normal", fontSize: "35px"}}>  { this.props.heading2 }&nbsp; </p>
        </div>
        </React.Fragment>
            
      );
      
    }
  }

  export default Typer