import React, { Component } from 'react';
import { Widget, addResponseMessage,renderCustomComponent } from 'react-chat-widget';
// import { Chat, HeroCard } from '@progress/kendo-react-conversational-ui';
// import * as AdaptiveCards from "adaptivecards";
import 'react-chat-widget/lib/styles.css';
 import './App.css'
import logo from './logo.svg';
import Cards from './Card';

class App extends Component {
 

  componentDidMount(props) {
    addResponseMessage("Welcome Type python developer!");
  }
 
  handleNewUserMessage = (newMessage,props) => {


   

    // console.log(`New message incoming! ${newMessage}`);
    // let adaptiveCard = new AdaptiveCards.AdaptiveCard();
    //  let attachment = newMessage.item;
    // let adaptiveCard = new AdaptiveCards.AdaptiveCard();
    // var n = newMessage.search('python developer');
  
    if( newMessage==='hi'){
      addResponseMessage('hi');
    }
    if( newMessage==='hello'){
      addResponseMessage('hello');
    }
    if( newMessage==='how are you'){
      addResponseMessage('fine, and you ?');
    }
    if( newMessage==='fine'){
      addResponseMessage('glad to here that!');
    }
    if( newMessage==='good'){
      addResponseMessage('its nice!');
    }
    if( newMessage==='thanks'){
      addResponseMessage('welcome,! type python devloper');
    }
    if( newMessage==='my name is shivnath'){
      addResponseMessage('hello shivnath');
    }
    if( newMessage==='my name is tejas'){
      addResponseMessage('hi tejas');
    }
    if( newMessage==='my name is prasad'){
      addResponseMessage('your are great prasad');
    }
    if( newMessage==='my name is vrushali'){
      addResponseMessage('your wonderfull vrushali');
    }
    if( newMessage==='what is your name'){
      addResponseMessage('Im ChatBot from Telemerge');
    }
   
    if (newMessage==='python developer'){
        // adaptiveCard.parse(attachment.content);
        addResponseMessage("Here Are My best Suggestions For You");
        renderCustomComponent(Cards);                            // ) ;
      // "ok there are no results found now I'll inform you as soon as I found them."
    }
    

      

    
    
  }
 
  render() {
    return (
      <div className="App">
         <h1>Chatbot</h1>
         <h5>Telemerge</h5>
        <Widget
          
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Telemerge Chatbot"
          subtitle="Welcome to Bot Recruiter"
        />
      </div>
    );
  } 
}
 
export default App;