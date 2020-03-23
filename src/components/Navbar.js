import React, { Component } from 'react';
import { Link} from 'react-router-dom';

function NavButton (props) {
    return (
        <Link style={{textDecoration: 'none'}} to={`${props.value.toLowerCase().replace(' ', '-')}`}> 
        <span 
            className='navButton'
            onClick={()=>{props.navigateTo(props.value.toLowerCase().replace(' ', '-'), props.index)}}
            style={props.style}
        >
            {props.value}
        </span>
        </Link>
    )
}

export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selected: 0 
        }
    }
    
    navigateTo = (page, index) => {
        this.setState({
            selected: index
        })
        // console.log(page);
    }

    getNavBarStyle = () =>{
        return {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px 0px'
        }
    }


    render() {
        return (
            <div className="NavBar" style={this.getNavBarStyle()}>
                <div>
                    <Link to="/"><span style={{padding: '5px 10px'}}><img style={{height: '20px'}} src="https://fintechnews.hk/wp-content/uploads/2018/07/SAIF-Partners.png" alt="SaifPartners"/></span></Link>
                </div>
                <div>
                    <NavButton value='Portfolio' index={1} navigateTo={this.navigateTo} 
                        style={this.state.selected===1 ? {fontWeight: 'bold', borderBottom: '1px solid black'}: {} } />
                    <NavButton value='Team' index={2} navigateTo={this.navigateTo} 
                        style={this.state.selected===2 ? {fontWeight: 'bold', borderBottom: '1px solid black'}: {} } />
                    <NavButton value='About' index={3} navigateTo={this.navigateTo} 
                        style={this.state.selected===3 ? {fontWeight: 'bold', borderBottom: '1px solid black'}: {} } />
                    <NavButton value='News' index={4} navigateTo={this.navigateTo} 
                        style={this.state.selected===4 ? {fontWeight: 'bold', borderBottom: '1px solid black'}: {} } />
                    <NavButton value='Reach Us' index={5} navigateTo={this.navigateTo} 
                        style={this.state.selected===5 ? {fontWeight: 'bold', borderBottom: '1px solid black'}: {} } />
                </div>
            </div>
        )
    }
}

export default Navbar
