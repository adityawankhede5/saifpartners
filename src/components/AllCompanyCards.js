import React, { Component } from 'react'
import CompanyCard from './CompanyCard';

export class AllCompanyCards extends Component {
    constructor(props) {
        super(props)
        this.companies = [
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/Acko-grey.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Acko-_-white-1.png', onHoverColor: '#455a64'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/Autoninja_Grey.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Autoninja_White-1.png', onHoverColor: '#df3526'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/Aye_Finance_grey.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Aye_Finance_white.png', onHoverColor: '#00baf2'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/bobble_grey.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Bobble_white-1.png', onHoverColor: '#00b9b7'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/Bookmyshow-logo-gret.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Bookmyshow-logo-white-1.png', onHoverColor: '#dd3333'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/CFBW2.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/CFW2.png', onHoverColor: '#00c0f2'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/care24_grey.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/care24_white.png', onHoverColor: '#00baf2'},
            {defaultIcon: 'http://www.saifpartners.com/wp-content/uploads/Chaayos-1.png', onHoverIcon: 'http://www.saifpartners.com/wp-content/uploads/Chaayos_w-1.png', onHoverColor: '#577c39'}
        ];
    }
    
    render() {
        let delay=0.5;
        return this.companies.map((comp, i)=>{
            delay=delay+0.2;
            return <CompanyCard company={comp} key={i} delay={delay} />
        })
    }
}

export default AllCompanyCards
