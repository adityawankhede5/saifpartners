import React, { Component } from 'react';

export class ReachUs extends Component {
    render() {
        return (
            <div className="ReachUs">
                <div className="ReachUsQuote">
                    <span style={{width: '50%'}}>Have a question or proposal in mind?<br />Get in touch with us.</span>
                </div>
                <div className="Details">
                <div className="DetailsCard">
                        <div className="TextDetails">
                        <div className="Address">
                            <span style={{fontWeight: 'bold'}}>Address</span>
                            <span>Unit 1502, 15th Floor, One Horizon Tower, Sector 43, DLF Phase V, Golf Course Road, Gurgaon 122002, Haryana, India</span>
                        </div>
                        <div className="Email">
                            <span style={{fontWeight: 'bold'}}>Email</span>
                            <span>info@saifpartners.com</span>
                        </div>
                        <div className="Phone">
                            <span style={{fontWeight: 'bold'}}>Phone</span>
                            <span>+91 124 4965500</span>
                        </div>
                        </div>
                        <div className="MapDetails">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9364186633547!2d77.09582781507855!3d28.451332982489667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19775327fa3f%3A0x1d76bb8b778bb88f!2sSAIF%20Partners!5e0!3m2!1sen!2sin!4v1584941170652!5m2!1sen!2sin" width="800" height="350" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                        </div>
                    </div>
                    <div className="DetailsCard">
                        <div className="TextDetails">
                        <div className="Address">
                            <span style={{fontWeight: 'bold'}}>Address</span>
                            <span>SAIF Partners, Indiqube, Leela Galleria, Sixth Floor, No. 23/4, 6th Cross, 60ft Road, Kodihalli, Old Airport Road, Ward No. 88 (Old No. 74), Bengaluru 560008</span>
                        </div>
                        <div className="Phone">
                            <span style={{fontWeight: 'bold'}}>Phone</span>
                            <span>080-46184600</span>
                        </div>
                        </div>
                        <div className="MapDetails">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.183610689202!2d77.64643161482185!3d12.960099890863384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14067c0ad14b%3A0xa8af64faf54940d8!2sIndiQube%20The%20Leela!5e0!3m2!1sen!2sin!4v1584941752867!5m2!1sen!2sin" width="800" height="350" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReachUs
