import React, { Component } from 'react'
import AllCompanyCards from './AllCompanyCards'

export class Portfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             companyType: 0
        }
    }

    setCompanyType = (type) => {
        this.setState({
            companyType: type
        })
    }
    
    render() {
        return (
            <div className="Portfolio">

                <div className="PortfolioQuote">
                    <span style={{width: '50%'}}>We partner with game changing companies to help realize their vision.</span>
                </div>
                <div className="Header">
                    <div onClick={()=>{this.setCompanyType(0)}} style={this.state.companyType===0 ? {opacity: 1, backgroundColor: '#333333', color: 'white'} : {}}>Public Companies</div>
                    <div onClick={()=>{this.setCompanyType(1)}} style={this.state.companyType===1 ? {opacity: 1, backgroundColor: '#333333', color: 'white'} : {}}>Private Companies</div>
                </div>

                {/* Public Companies */}
                <div className="PublicComp Companies" style={this.state.companyType === 0 ? {display: 'flex'} : {display: 'none'}}>
                    <AllCompanyCards />
                </div>

                {/* Private Companies */}
                <div className="PrivateComp Companies" style={this.state.companyType === 1 ? {display: 'flex',flexDirection: 'row-reverse'} : {display: 'none'}}>
                    <AllCompanyCards />
                </div>
            </div>
        )
    }
}

export default Portfolio
