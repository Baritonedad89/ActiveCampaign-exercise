import React, { Component } from 'react';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import GridWrapper from './GridWrapper'





const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = process.env.REACT_APP_ACTIVE_CAMPAIGN_API_KEY;
const BASE_URL = 'https://lamppoststudios.activehosted.com/api/3/contacts';

const options = {
  headers: {
    'Api-Token': `${API_KEY}`
  }
}

export default class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.getContactsFromAPI();
  }

  async getContactsFromAPI() {
    try {
      const resolve = await fetch(`${PROXY_URL}${BASE_URL}`, options);

      const contacts = await resolve.json();
      console.log(contacts);

      this.setState({ contacts: contacts.contacts });
    } catch (err) {
      console.log('err', err);
    }
  }

  render() {
    const {contacts} = this.state;
    return(
      <React.Fragment>
         <NavBar/>
      <JumboTron logo={'https://d226aj4ao1t61q.cloudfront.net/kmybs7sk5_share-default.png'}/>
      <GridWrapper>
      <h1>Contacts</h1>
        <ul className='collection'>
          {contacts.map(contact => 

          <li key={contact.id} className="collection-item">
            <span className="title">Name: {!contact.firstName && !contact.lastName ? 'unknown' : `${contact.firstName} ${contact.lastName}`}</span>
            <p>Email: {contact.email}</p>
            <p>Phone: {!contact.phone  ? 'n/a' : contact.phone}</p>

          </li>
          )}
        </ul>
      </GridWrapper>
      

      </React.Fragment>

     
    )
    
  }
}
