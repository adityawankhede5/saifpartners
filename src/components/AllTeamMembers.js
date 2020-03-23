import React, { Component } from 'react'
import MemberCard from './MemberCard'

export class AllTeamMembers extends Component {
    constructor(props) {
        super(props)
    
        this.members = [
            {image: 'http://www.saifpartners.com/wp-content/uploads/Ravi-Adisumalli-1-3.jpg', name: 'Ravi Adusumalli', desig: 'Managing Partner'},
            {image: 'http://www.saifpartners.com/wp-content/uploads/Pazani_Crop-1-1.jpg', name: 'Thirumagen Pazani', desig: ''},
            {image: 'http://www.saifpartners.com/wp-content/uploads/Shafiiq_Crop-1.jpg', name: 'Shafiiq-Ur-Rahmaan', desig: ''},
            {image: 'http://www.saifpartners.com/wp-content/uploads/Mridul-Arora-1.jpg', name: 'Mridul Arora', desig: 'Managing Director'},
            {image: 'http://www.saifpartners.com/wp-content/uploads/No-Glare-2-B3-1.jpg', name: 'Mukul Arora', desig: 'Managing Director'},
            {image: 'http://www.saifpartners.com/wp-content/uploads/Deepak3.jpg', name: 'Deepak Gaur', desig: 'Managing Director'},
            {image: 'http://www.saifpartners.com/wp-content/uploads/Alok-Goel-1.jpg', name: 'Alok Goel', desig: 'Managing Director'}
        ]
    }
    
    render() {
        let delay = 0.3;
        return (
            <div className="AllTeamMembers">
                {this.members.map((member, i)=>{
                    delay=delay+0.2;
                    return <MemberCard member={member} key={i} delay={delay} />
                })}
            </div>
        )
    }
}

export default AllTeamMembers
