import React, { Component } from 'react'

export class News extends Component {

    constructor(props) {
        super(props)
    
        this.presses = [
            {date: 'Aug 16, 2019', content: 'Twitter leads USD 100Mn round in Sharechat'},
            {date: 'Aug 12, 2019', content: 'Meesho raises USD 125Mn from Naspers, Facebook'},
            {date: 'Aug 02, 2019', content: 'UrbanClap raises USD 75Mn'},
            {date: 'Jul 30, 2019', content: 'Rivigo gets US Patent for driver relay tech'},
            {date: 'Jul 29, 2019', content: "Ravi, Deepak and Mukul in India's top 25 VCs"},
            {date: 'Jul 19, 2019', content: 'Mukul nominated for Midas Touch award'},
        ]

        this.insights = [
            {date: "Aug 06, 2019", content: "Betting early and helping startups grow"},
            {date: "Aug 02, 2019", content: "Extremely bullish on SaaS startups"},
            {date: "Jul 14, 2019", content: "SAIF Partners catches them young"},
            {date: "Jul 16, 2019", content: "The N.I.K.E framework for content in India"},
            {date: "Feb 02, 2018", content: "The making of Sharechat"},
            {date: "Oct 13, 2017", content: "Watch out content creators"},
        ]
    }

    getPress = (press, key, delay) => {
        return (
            <div className="PressCard" key={key} style={{animationDelay: `${delay}s`}}>
                <div className="PressCardText">{press.content}</div>
                <div className="PressCardDate">{press.date}</div>
            </div>
        )
    }

    getAllPresses =  () => {
        let delay=0.3;
        return this.presses.map((press, i)=>{
            delay+=0.2;
            return this.getPress(press, i, delay)
        })
    }

    getInsight = (insight, key, delay) => {
        return (
            <div className="InsightCard" key={key} style={{animationDelay: `${delay}s`}}>
                <div className="InsightCardText">{insight.content}</div>
                <div className="InsightCardDate">{insight.date}</div>
            </div>
        )
    }
    
    getAllInsights =  () => {
        let delay = 0.3;
        return this.presses.map((insight, i)=>{
            delay+=0.2;
            return this.getInsight(insight, i, delay)
        })
    }

    render() {
        return (
            <div className="News">
                <div className="NewsQuote">
                    <span style={{width: '50%'}}>Get the latest updates and insights about our company.</span>
                </div>
                <div className="AllNewsContainer">
                    <div className="AllPresses">
                        <div className="HeaderText">Press</div>
                        {this.getAllPresses()}
                    </div>
                    <div className="AllInsights">
                        <div className="HeaderText">Insights</div>
                        {this.getAllInsights()}
                    </div>
                </div>

                
            </div>
        )
    }
}

export default News
