import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'
import {saveState} from '../services/appState'


class AppRouter extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                    <Route component={App}/>
            </BrowserRouter>
        )
    }

    componentDidUpdate(prevProps) {
        if(this.props.admin !== prevProps.admin){
            saveState("admin",this.props.admin);
        }

    }
}

export default connect(state => ({
    admin: state.admin,
}))(AppRouter)