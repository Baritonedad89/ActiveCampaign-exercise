import React, { Component, Fragment } from 'react';
import ContactDetail from './ContactDetail';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import GridWrapper from './GridWrapper'





const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = process.env.REACT_APP_ACTIVE_CAMPAIGN_API_KEY;
const BASE_URL = 'https://lamppoststudios.activehosted.com/api/3/contacts';

export default class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.getContactsFromAPI();
  }

  async getContactsFromAPI() {
    try {
      const resolve = await fetch(`${PROXY_URL}${BASE_URL}`, {
        headers: {
          // I tried to secure this api key but my template literals just wouldn't work for some reason
          'Api-Token': '1471c7fb120a56a502b871f5c0cf858024b24efd21de6b9a881bbca604ecea678b8cb3bb'
        }
      });
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
      <JumboTron logo={'https://d3rxaij56vjege.cloudfront.net/media/logo.gif'}/>
      <GridWrapper>
        <ul className='collection'>
          {contacts.map(contact => 

          <li className="collection-item">
            <span class="title">Name: {!contact.firstName && !contact.lastName ? 'Unknown' : `${contact.firstName} ${contact.lastName}`}</span>
            <p>Email: {contact.email}</p>
          </li>
          )}
        </ul>
      </GridWrapper>
      

      </React.Fragment>

     
    )
    
  }
}
