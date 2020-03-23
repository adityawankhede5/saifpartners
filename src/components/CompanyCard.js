import React, { Component } from 'react'

export class CompanyCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isHovered: false
        }
    }
    
    mouseEntered =()=>{
        this.setState({
            isHovered: true
        })
    }

    mouseLeft = () =>{
        this.setState({
            isHovered: false
        })
    }

    render() {
        return (
            <div className="CompanyCard" onMouseEnter={this.mouseEntered} onMouseLeave={this.mouseLeft} 
                style={this.state.isHovered ? {backgroundImage: `url(${this.props.company.onHoverIcon})`, backgroundColor: this.props.company.onHoverColor, animationDelay: `${this.props.delay}s`} : {backgroundImage: `url(${this.props.company.defaultIcon})`, animationDelay: `${this.props.delay}s`}}>
            </div>
        )
    }
}

export default CompanyCard
