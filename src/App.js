import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';


import Analys from './analys.js';
import './App.css';
var uuid = require('uuid');
var firebase = require('firebase');


var config = {
    apiKey: "AIzaSyDXRuk7_9feWL_1wpuWRaf1GX1tVUkl80I",
    authDomain: "toni-7698c.firebaseapp.com",
    databaseURL: "https://toni-7698c.firebaseio.com",
    storageBucket: "toni-7698c.appspot.com",
    messagingSenderId: "346071305707"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
       id:uuid.v1(),
        name:'',
        betyg: {
          titel:0,
          h1h2:0,
          meta:0,
          url:0,
          omdirigrening:0,
          undersidor:0,
          textvolym:0,
          textrelavans:0,
          kallkod:0,
          alttag:0,
          design:0,
          responsiv:0,
          kontakt:0,
          geografisk:0,
          sociala:0,
          uppfatning:0,
          obs:"Vi rekommenderar att ordna till Titel, Huvudrubriker och Description för de sökord ni vill hittas på så att exakta sökfraser hamnar så tidigt som möjligt.",
          text1:"",
          text2:"",
          text3:"",
          text4:"",
          text5:"",
          text6:""


        },
        submitted: false
      }

      this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event){
    var name = this.refs.name.value;
    this.setState({name:name}, function(){
      console.log(this.state);
    });
    event.preventDefault();
  }

  handleQuestionSubmit(event){
    firebase.database().ref('/topborn').set({
      name: this.state.name,
      betyg:this.state.betyg
    });

    this.setState({submitted:true}, function(){
      console.log('Questions Submitted...');
    });
    event.preventDefault();
  }

  handleQuestionChange(event){
    var betyg = this.state.betyg;
    if(event.target.name === 'titel'){
      betyg.titel = Number(event.target.value);

    } else if(event.target.name === 'h1h2'){
      betyg.h1h2 = Number(event.target.value);

    } else if(event.target.name === 'meta'){
      betyg.meta = Number(event.target.value);

    } else if(event.target.name === 'url'){
      betyg.url = Number(event.target.value);

    } else if(event.target.name === 'omdirigrening'){
     betyg.omdirigrening = Number(event.target.value);

    } else if(event.target.name === 'undersidor'){
      betyg.undersidor = Number(event.target.value);

    } else if(event.target.name === 'textvolym'){
      betyg.textvolym = Number(event.target.value);

    } else if(event.target.name === 'textrelavans'){
      betyg.textrelavans = Number(event.target.value);

    } else if(event.target.name === 'kallkod'){
      betyg.kallkod = Number(event.target.value);

    } else if(event.target.name === 'alttag'){
      betyg.alttag = Number(event.target.value);

    } else if(event.target.name === 'design'){
      betyg.design = Number(event.target.value);

    } else if(event.target.name === 'responsiv'){
      betyg.responsiv = Number(event.target.value);

    } else if(event.target.name === 'kontakt'){
      betyg.kontakt = Number(event.target.value);

    } else if(event.target.name === 'geografisk'){
      betyg.geografisk = Number(event.target.value);

    } else if(event.target.name === 'sociala'){
      betyg.sociala = Number(event.target.value);

    } else if(event.target.name === 'uppfatning'){
      betyg.uppfatning = Number(event.target.value);

    } else if(event.target.name === 'obs'){
      betyg.obs = event.target.value;

    }

    else if(event.target.name === 'text1'){
      betyg.text1 = event.target.value;

    }

    else if(event.target.name === 'text2'){
      betyg.text2 = event.target.value;

    }

    else if(event.target.name === 'text3'){
      betyg.text3 = event.target.value;

    }

    else if(event.target.name === 'text4'){
      betyg.text4 = event.target.value;

    }

    else if(event.target.name === 'text5'){
      betyg.text5 = event.target.value;

    }

    else if(event.target.name === 'text6'){
      betyg.text6 = event.target.value;

    }





    this.setState({betyg:betyg},function(){
      console.log(this.state);
    });
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false){
      user = <h2 >Kundnummer:  {this.state.name}</h2>
      questions = <span>

        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div className="input-nr">

              <div className="row">
                <div className="col-sm-12">

                        <p className="col-sm-12">
                            <input type="number"
                                name="titel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.titel}
                                onChange={this.handleQuestionChange} />Titel<br />
                        </p>

                        <p className="col-sm-12">
                            <input type="number"
                                name="h1h2"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.h1h2}
                                onChange={this.handleQuestionChange} />H1-H2<br />
                         </p>

                        <p className="col-sm-12">
                            <input type="number"
                                name="meta"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.meta}
                                onChange={this.handleQuestionChange} />Meta description<br />
                        </p>
                </div>
              </div>

              <div className="row">
                    <div className="col-sm-12">

                        <p className="col-sm-12">
                            <input type="number"
                                  name="url"
                                  pattern="[0-9]*"
                                  inputMode="numeric"
                                  min="0" max="10"
                                  value={this.state.url}
                                  onChange={this.handleQuestionChange} />URL<br />
                        </p>

                        <p className="col-sm-12">
                          <input type="number"
                                  name="omdirigrening"
                                  pattern="[0-9]*"
                                  inputMode="numeric"
                                  min="0" max="10"
                                  value={this.state.titel}
                                  onChange={this.handleQuestionChange} />301 Omdirigrening<br />
                        </p>

                        <p className="col-sm-12">
                            <input type="number"
                                  name="undersidor"
                                  pattern="[0-9]*"
                                  inputMode="numeric"
                                  min="0" max="10"
                                  value={this.state.undersidor}
                                  onChange={this.handleQuestionChange} />Relevanta undersidor<br />
                        </p>
                  </div>
              </div>


              <div className="row">
                    <div className="col-sm-12">

                      <p className="col-sm-12">

                          <input type="number"
                                name="textvolym"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.textvolym}
                                onChange={this.handleQuestionChange} />Textvolym<br />

                      </p>

                      <p className="col-sm-12">
                          <input type="number"
                                name="textrelavans"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.textrelavans}
                                onChange={this.handleQuestionChange} />Textrelavans<br />
                      </p>

                      <p className="col-sm-12">
                          <input type="number"
                                name="kallkod"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.kallkod}
                                onChange={this.handleQuestionChange} />Källkod<br />
                      </p>
                  </div>
              </div>


              <div className="row">
                    <div className="col-sm-12">

                      <p className="col-sm-12">

                          <input type="number"
                                name="alttag"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.alttag}
                                onChange={this.handleQuestionChange} />Alt-tag<br />
                      </p>

                      <p className="col-sm-12">

                          <input type="number"
                                name="design"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                min="0" max="10"
                                value={this.state.design}
                                onChange={this.handleQuestionChange} />Design<br />


                                </p>

                        <p className="col-sm-12">

                        <input type="number"
                              name="responsiv"
                              pattern="[0-9]*"
                              inputMode="numeric"
                              min="0" max="10"
                              value={this.state.responsiv}
                              onChange={this.handleQuestionChange} />Responsiv design<br />

                              </p>
                            </div>
                        </div>



                        <div className="row">
                              <div className="col-sm-12">

                                <p className="col-sm-12">
                                  <input type="number"
                                        name="kontakt"
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                        min="0" max="10"
                                        value={this.state.kontakt}
                                        onChange={this.handleQuestionChange} />Kontaktmöjligheter<br />

                                        </p>

                                <p className="col-sm-12 ">
                                  <input type="number"
                                        name="geografisk"
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                        min="0" max="10"
                                        value={this.state.geografisk}
                                        onChange={this.handleQuestionChange} />Geografisk presentation<br />



                                </p>

                                <p className="col-sm-12 ">

                               <input type="number"
                                    name="sociala"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    min="0" max="10"
                                    value={this.state.sociala}
                                    onChange={this.handleQuestionChange} />Sociala Medier<br />

                                  </p>
                            </div>
                        </div>

                        <div className="row">
                              <div className="col-sm-12">



                                <p className="col-sm-12">
                                  <input type="number"
                                      name="uppfatting"
                                      pattern="[0-9]*"
                                      inputMode="numeric"
                                      min="0" max="10"
                                      value={this.state.uppfating}
                                      onChange={this.handleQuestionChange} />Uppfattning<br />

                                    </p>
                </div>
            </div>

          </div>

          <div>
                  <div>
                        <textarea type="text"
                                  name="obs"
                                  value={this.state.betyg.obs}
                                  onChange={this.handleQuestionChange}></textarea>

                  </div>

                  <div>
                          <div className="row">

                                  <p className="checkbox-p col-sm-4">
                                      <input type="checkbox"
                                         name="text1"
                                         value="Vi rekommenderar också att ha en tydligare geografisk presentation i form av en karta eller liknande."
                                         onChange={this.handleQuestionChange} />Geografisk</p>

                                  <p className="checkbox-p col-sm-4">
                                      <input type="checkbox"
                                        name="text2"
                                        value="I övrigt rekommenderar vi att bygga en välbyggd och  en genomtänkt responsiv hemsida som är anpassad även för mobila enheter som smartphones och surfplattor, dessa står idag för närmare 40% av all internettrafik i Sverige."
                                        onChange={this.handleQuestionChange} />Responsivitet</p>

                                <p className="checkbox-p col-sm-4">
                                      <input type="checkbox"
                                           name="text3"
                                           value="Vi rekommenderar också att göra en 301 Omdirigering så att webbsidan går till samma adress oavsett om du skriver med eller utan www i adressfältet."
                                           onChange={this.handleQuestionChange} />301</p>

                          </div>




                          <div className="row">

                                 <p className="checkbox-p col-sm-4">
                                      <input type="checkbox"
                                          name="text4"
                                          value="Det blir allt mer viktigt att ha relevanta undersidor med på sin hemsida då Google alltid vill visa besökaren den mest relevanta informationen utifrån vad besökaren söker efter. Med tanke på de fraser ni har så rekommenderar vi även att bygga nya, relevanta undersidor på er hemsida, och på så sätt öka chansen till bättre positioner."
                                          onChange={this.handleQuestionChange} />Rel. undersidor</p>


                                  <p className="checkbox-p col-sm-4">
                                      <input type="checkbox"
                                           name="text5"
                                           value="Vi rekommenderar också att försöka utöka textvolymen på er hemsida för att på så sätt få fram mer relevant information. Detta gör i sin tur att det i de flesta fall blir lättare för sökmotorer att hitta relevant information på hemsidan vilket kan leda till bättre positioner."
                                           onChange={this.handleQuestionChange} />Textvolym</p>

                                   <p className="checkbox-p col-sm-4">
                                        <input type="checkbox"
                                            name="text6"
                                            value="Att integrera och vara aktiva på sociala medier som till exempel Facebook är också något ni skulle kunna dra nytta av."
                                            onChange={this.handleQuestionChange} />Sociala medier</p>

                            </div>

                                        <button type="submit" value="Submit" className="btn btn-block">Skapa</button>
                  </div>
                </div>




        </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false){
      user = <span>
        <h2>Fyll in kundnummer</h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Kundnummer" ref="name" />
        </form>
      </span>;
      questions = '';
    } else if(this.state.submitted === true){
      user = <Analys namn={this.state.name} />
    }
    return (
      <div className="App">
        <div className="App-header text-center">
        



        </div>
        <div className="text-center">
          <h1>Hemsideanalys</h1>
          {user}
        </div>
        <div className="container">
          {questions}
        </div>


      </div>
    );
  }
}

export default App;
