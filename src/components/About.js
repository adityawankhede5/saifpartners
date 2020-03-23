import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component {
    constructor(props) {
        super(props)
        this.sectors = ['Consumer', 'Education', 'Finance', 'Healthcare', 'Industrials', 'Internet', 'IT Services', 'Logistics', 'Mobile', 'SaaS']
        this.feedbacks = [
            {image: 'http://www.saifpartners.com/wp-content/uploads/BMS.png', name: 'ASHISH HEMRAJANI ', desig: 'Founder and CEO, BookMyShow', content: '“SAIF as an organization thinks like us. The team is very grounded and humble; they have a large vision about where they want their companies to go”'},
            {image: 'http://www.saifpartners.com/wp-content/uploads/VSS-Mani-2.jpg', name: 'VSS MANI ', desig: 'Founder and CEO, Justdial', content: '“Other VCs did not give enough time to explain our business. But SAIF agreed to invest in us 24 hours after the first meeting”'}
        ]
    }

    getSector = (sector, key, delay) => {
        return (
            <Link to="/portfolio"><span className="Sector" style={{animationDelay: `${delay}s`}} key={key}>{sector}</span></Link>
        )
    }

    getFeedback = (feedback, key) => {
        return (
            <div className="FeedbackCard">
                <div className="Provider" style={{backgroundImage: `url(${feedback.image})`}}>
                    <div className="ProviderDetails">
                        <div>{feedback.name}</div>
                        <div>{feedback.desig}</div>
                    </div>
                </div>
                <div className="Content">{feedback.content}</div>
            </div>
        )
    }
    
    render() {
        let delay = 0.4;
        return (
            <div className="About">
                <div className="TeamQuote">
                    <span style={{width: '50%'}}>Supporting visionary entrepreneurs across diverse sectors. </span>
                </div>
                <div className="Brief">
                    <div className="Text">Sectors we Invest in</div>
                    <div className="Sectors">
                        {this.sectors.map((sector, i)=>{
                            delay+=0.1;
                            return this.getSector(sector, i, delay);
                        })}
                    </div>
                </div>
                <div className="Feedback">
                    <div className="Text">Customer Feedback</div>
                    <div className="AllFeedbacks">
                        {this.feedbacks.map((feedback, i)=>{
                            return this.getFeedback(feedback, i);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default About
