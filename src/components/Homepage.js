import React, { Component } from 'react';

function Partners(props){
    // console.log(props.about, props.stats, props.quote);
    return (
        <div style={props.style} className="BriefIntro">
            <div className="Brief">
                <div className="About">{props.about}</div>
                <div className="Stats">
                    <div className="Card stats-card-1">
                        <div className="Qty">{props.stats[0].qty}</div>
                        <div className="Desc">{props.stats[0].desc}</div>
                    </div>
                    <div className="Card stats-card-2">
                        <div className="Qty">{props.stats[1].qty}</div>
                        <div className="Desc">{props.stats[1].desc}</div>
                    </div>
                </div>
                <div className="Quote">
                    <div className="Text" style={{fontSize: 'x-large'}}>"{props.quote.text}"</div>
                    <div className="By" style={{fontWeight: 'bold'}}>{props.quote.by}</div>
                    <div className="Designation">{props.quote.desi}</div>
                </div>
            </div>
            <div className="MoreButtonContainer">
                <div className="MoreButton">Learn More <i className="material-icons">arrow_forward_ios</i></div>
            </div>
        </div>
    )
}

export class Homepage extends Component {

    constructor(props) {
        super(props);
        this.gradients = [
            'linear-gradient(-45deg, rgba(179,40,37,0.8575630081134016) 0%, rgba(255,255,255,1) 25%)', 
            'linear-gradient(-45deg, rgba(0,186,242,1) 0%, rgba(255,255,255,1) 25%)',
            'linear-gradient(-45deg, rgba(235,34,38,0.7427170697380514) 0%, rgba(255,255,255,1) 25%)', 
            'linear-gradient(-45deg, rgba(252,128,25,1) 0%, rgba(255,255,255,1) 25%)', 
            'linear-gradient(-45deg, rgba(227,56,58,0.8211484422870711) 0%, rgba(255,255,255,1) 25%']
        this.state = {
             selected: 0
        }
    }

    componentDidMount = () => {
        this.startSlideShow();
    }

    startSlideShow = () => {
        this.slideShow =  setInterval(()=>{
            const currentSlide = this.state.selected;
            this.setState({
                selected: (currentSlide+1)%5
            })
        },5000)
    }

    stopSlideShow = (selected) => {
        this.setState({
            selected: selected
        });
        clearInterval(this.slideShow);

    }

    render() {
        return (
            <div className="Homepage" style={{background: this.gradients[this.state.selected]}}>
                <div className="Body">

                    <Partners 
                        about={'We help exceptional companies grow from concept to IPO.'}
                        stats={[{qty: '100', desc: 'Companies Funded'}, {qty: '$3B', desc: 'Assests Under Management'}]}
                        quote={{text: "The harder I work, the luckier I get.", by: 'Samuel Goldwyn', desi: ''}}
                        style={{display: this.state.selected===0 ? 'flex' : 'none'}}
                    />
                    <Partners 
                        about={'Paytm. Changing the way India transacts online'}
                        stats={[{qty: '220M', desc: 'Wallet Users'}, {qty: '5M', desc: 'Transactions/day'}]}
                        quote={{text: "SAIF Partners is absolutely the best partner to start a business in India.", by: 'Vijay Shekhar Sharma', desi: 'Founder and CEO'}}
                        style={{display: this.state.selected===1 ? 'flex' : 'none'}}
                    />
                    <Partners 
                        about={"MakeMyTrip. Face of India's online travel sector"}
                        stats={[{qty: '34.1M', desc: "Transactions in FY'16"}, {qty: '48%', desc: 'Market Share in OTA'}]}
                        quote={{text: "I was skeptical about listing on Nasdaq but Ravi was emphatic about it and convinced me. The rest, as they say, is history.", by: 'Deep Kalra', desi: 'Founder and Group CEO'}}
                        style={{display: this.state.selected===2 ? 'flex' : 'none'}}
                    />
                    <Partners 
                        about={"Swiggy. Changing the way India eats"}
                        stats={[{qty: '2.7M', desc: 'Deliveries/month'}, {qty: '12000', desc: 'Restaurants'}]}
                        quote={{text: "Working with SAIF has been a true delight, their conviction and relentless support has been a gamechanger.", by: 'Sriharsha Majety', desi: 'Founder'}}
                        style={{display: this.state.selected===3 ? 'flex' : 'none'}}
                    />
                    <Partners 
                        about={"Rivigo. Making logistics human"}
                        stats={[{qty: '3000', desc: 'Driver Pilots'}, {qty: '2100', desc: 'Trucks'}]}
                        quote={{text: "SAIF Partners is an exceptional partner to get on board. They are humble, helpful and bring a touch of magic with them!", by: 'Deepak Garg', desi: 'Co-Founder'}}
                        style={{display: this.state.selected===4 ? 'flex' : 'none'}}
                    />


                </div>
                <div className="SideBar">
                    <div className="Item" id="itemhome">
                        <span>{this.state.selected===0 ? 'Home' : ''}</span>
                        <i onClick={()=>{this.stopSlideShow(0)}} className="material-icons">{this.state.selected===0 ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
                    </div>
                    <div className="Item" id="itempaytm">
                        <span>{this.state.selected===1 ? 'Paytm' : ''}</span>
                        <i onClick={()=>{this.stopSlideShow(1)}} className="material-icons">{this.state.selected===1 ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
                    </div>
                    <div className="Item" id="itemmmt">
                        <span>{this.state.selected===2 ? 'MakeMyTrip' : ''}</span>
                        <i onClick={()=>{this.stopSlideShow(2)}} className="material-icons">{this.state.selected===2 ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
                    </div>
                    <div className="Item" id="itemswiggy">
                        <span>{this.state.selected===3 ? 'Swiggy' : ''}</span>
                        <i onClick={()=>{this.stopSlideShow(3)}} className="material-icons">{this.state.selected===3 ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
                    </div>
                    <div className="Item" id="itemrivigo">
                        <span>{this.state.selected===4 ? 'Rivigo' : ''}</span>
                        <i onClick={()=>{this.stopSlideShow(4)}} className="material-icons">{this.state.selected===4 ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage
