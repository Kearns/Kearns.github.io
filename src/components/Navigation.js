import React from 'react'

const Navigation = ({tabs, activeTab})=> {


    let navigationTabElements = tabs.map((tab, i) => {
        return (
            <li className={(activeTab == i) ? 'active' : ''} key={i}>
                <a href={'#' + tab}>{tab}</a>
            </li>
        )
    })
    
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"> &lt;Patrick Kearns/&gt; </a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            {
                navigationTabElements
            }
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navigation