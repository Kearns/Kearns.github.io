import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 0, pagePositions: []}
    }

    generatePagePositions() {
        let pagePositions = [];
        Array.prototype.forEach.call(this.pageContainer.children, (el, i) => {
            i == 0 ? pagePositions.push(el.clientHeight) : pagePositions.push(el.clientHeight + pagePositions[i-1])
        })
        this.setState({
            pagePositions: [0, ...pagePositions]
        })
        console.log(pagePositions)
    }

    setActiveTab() {
        let activeTab = 0;
        this.state.pagePositions.forEach((val,i) =>{
            if(window.scrollY > val - 55) {
                activeTab = i
            }
        })
        if(this.state.activeTab !== activeTab) {
            this.setState({
                activeTab: activeTab
            })
        }
    }

    componentDidMount(){
        this.generatePagePositions()
        this.setActiveTab()
        window.addEventListener('resize', (e) => this.generatePagePositions())
        window.addEventListener('scroll', (e) => this.setActiveTab())
    }

    render() {
        return(
            <div>
                <Navigation tabs={['home','about','work']} activeTab={this.state.activeTab}/>
                
                <div className="page-container" ref={(div) => { this.pageContainer = div }}>
                    <Home active={ this.state.activeTab == 0 ? true : false}/>
                    <About active={ this.state.activeTab == 1 ? true : false}/>
                    <Work active={ this.state.activeTab == 2 ? true : false}/>
                </div>
            </div>
        )
    }
}