import React, { Component } from 'react'

export class MemberCard extends Component {
    render() {
        return (
            <div className="MemberCard" style={{backgroundImage: `url(${this.props.member.image})`, animationDelay: `${this.props.delay}s`}}>
                <div className="MemberDetail">
                    <div>{this.props.member.name}</div>
                    <div>{this.props.member.desig}</div>
                </div>
            </div>
        )
    }
}

export default MemberCard
