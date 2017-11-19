import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Switch, Route } from 'react-router-dom'

const NavBarItem = ({ title, pagedest, history }) => (
    <FlatButton onClick={() => history.push(pagedest)}>
        {title}
    </FlatButton>
);

const ExtraNav = () => (
    <div>
        <Route path="/" render={(props) => 
            <NavBarItem {...props} title="Need Help Overview" 
            pagedest='NeedHelpOverview'/>} />
        <Route path="/" render={(props) => 
            <NavBarItem {...props} title="Want to Help Overview" 
            pagedest='WantToHelpOverview'/>} />
    </div>
);

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (//needs proper navbar styling
    <div>
        <AppBar 
            style={{ position: 'fixed', top: 0 }}
            className="nav"
            titleStyle={{ textAlign: 'center' }}
            showMenuIconButton={false}
            className="header"
            title="Lifemesh"
            titleStyle={{ textAlign: 'left' }}

            children={
                <div className="nav" style={{ position: 'fixed', top: 20, right: 20 }}>
                    <Route path="/" render={(props) => 
                        <NavBarItem {...props} title="Home" 
                        pagedest=''/>} />
                    <Route path="/" render={(props) => 
                        <NavBarItem {...props} title="Overview" 
                        pagedest='googlemap'/>} />
                    <Route path="/" render={(props) => 
                        <NavBarItem {...props} title="   Need Help   " 
                        pagedest='NewHelpPage'/>} />
                    <Route path="/" render={(props) => 
                        <NavBarItem {...props} title="   Want to Help   " 
                        pagedest='NewWantPage'/>} />
                    
                </div>
            }
        />
        
    </div>
)

export default Header
