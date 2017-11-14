import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (//needs proper navbar styling
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/googlemap'>Overview</Link></li>
        <li><Link to='/NewHelpPage'>Need Help</Link></li>
        <li><Link to='/NewWantPage'>Want to Help</Link></li>
        <li><Link to='/NeedHelpOverview'>NeedHelpOverview</Link></li>
        <li><Link to='/WantToHelpOverview'>WantToHelpOverview</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
