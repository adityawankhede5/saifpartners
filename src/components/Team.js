import React, { Component } from 'react'
import AllTeamMembers from './AllTeamMembers'

export class Team extends Component {
    render() {
        return (
            <div className="Team">
                <div className="TeamQuote">
                    <span style={{width: '50%'}}>We believe in entrepreneurial spirit and bring a full range of experience.</span>
                </div>
                <AllTeamMembers />
            </div>
        )
    }
}

export default Team
