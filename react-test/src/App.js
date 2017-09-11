import React, { Component } from 'react';
import './App.css';

const initState = {
  words: [
 { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },

   { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },

  { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },

   { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },

   { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },

   { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },

   { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },

   { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },

    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },

    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  input:'',
  answer:[],
  value:'en',
  translating:'sp',
  startLanguage:[],
  endLanguage:[],
  correct:0
}
class App extends Component {
  constructor(){
    super();
    this.state = initState;
  
  }

      handleChange = (event) => {
    this.setState({value: event.target.value});
  }
    handleTranslation = (event) =>{
          this.setState({translating: event.target.value});
    }
    
    userInput = (event) => {
      let input = event.target.value;
      this.setState({
        input:input
      })
    }

    languageChosen = (event) => {
      let state = Object.assign({}, this.state);
      let value = state.value
      let translating = state.translating
          state.words.filter(function(obj){
            if(value === 'en'){
                state.startLanguage.push(obj.en);
            }
            if(value === 'fr'){
                state.startLanguage.push(obj.fr);
            }
            if(value === 'sp'){
              state.startLanguage.push(obj.sp);
            }
            if(value === 'de'){
               state.startLanguage.push(obj.de);
            }
              return obj;

          })

          this.setState({state})
        
        //End language is also added 
          state.words.filter(function(obj){  
             if(translating === 'en'){
                state.endLanguage.push(obj.en);
            }
            if(translating === 'fr'){
                state.endLanguage.push(obj.fr);
            }
            if(translating === 'sp'){
              state.endLanguage.push(obj.sp);
            }
            if(translating === 'de'){
               state.endLanguage.push(obj.de);
            } 
              return obj;
          })
          this.setState({state})  
    }

     resetApp = () => {
       this.setState({
  words: [
 { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },

   { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },

  { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },

   { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },

   { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },

   { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },

   { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },

   { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },

    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },

    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  input:'',
  answer:[],
  value:'en',
  translating:'sp',
  startLanguage:[],
  endLanguage:[],
  correct:0
   })
     }

    correctAnswer = () =>{
        let state = Object.assign({}, this.state);
        let input = state.input;
        let endLanguage = this.state.endLanguage
        let check= state.answer
         input.toLowerCase();
        state.answer.push(input);
              this.setState({state})
        }

      
  render(){
     const startLanguage = this.state.startLanguage.map(function(word,i){
       
       return(
        <div className="words" key={i}>
          <li>{word}</li>
        </div>
       )

      });


 
    
    return (
      <div className="App">
        <div>
           <h2> Start language </h2>
            <select value={this.state.value} onChange={this.handleChange}  >
               <option value="en">English</option> 
               <option value="de">German</option>
               <option value="fr">French</option>
              <option value="sp">Spanish</option>
           </select>
           <h2> Translate language </h2>
             <select value={this.state.translating} onChange={this.handleTranslation}>
              <option value="en">English</option>
              <option value="de">German</option>
               <option value="fr">French</option>
               <option value="sp">Spanish</option>
            </select>
            <button onClick={this.languageChosen}> submit</button>
        </div>
        <div>
            <h3> Reset </h3>
           <button onClick={this.resetApp}>Reset</button>
       </div>
       
       <input type="text"  onChange={this.userInput}  />
       <button   onClick={this.correctAnswer}>Attempt</button>
       <h3>Score</h3>
        {this.state.correct}
        {startLanguage}
      </div>
    );
  }
}


export default App;



// <!-- Create a vocabulary study app that allows users to select a language and then get a series of flashcards of words. The user must be able to write the translation of the word and the app will tell them if they are right or wrong. If they are wrong, the correct translation must be shown. Allow the user to loop through the deck as many times as necessary until they get them all correct. Allow the user to reset at any time.

// Step 1:
// Ask user which language they would like to show on the cards and then ask what language they will be translating to.

// Step 2:
// Show user the first word and provide an input to have them type the translation & submit.

// Step 3:
// Evaluate the answer. Make sure that you account for extra white spaces at the beginning or end of the submitted word and also make your evaluation case insensitive. In other words, "TEST", " Test " and "test" would all be evaluated the same.

// Step 4: 
// If the user gets the answer correct, take the word out of the deck for this round and show the user how many words correct out of how many words in the deck.

// Step 5:
// When the user has gotten all words correct, congratulate them and ask if they want to reset.

// Step 6:
// The user should be able to reset to Step 1 at any time. -->