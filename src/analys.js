import React, { Component } from 'react';

import firebase from 'firebase';

class Analys extends Component {
  constructor(){
    super();
    this.state = {
      // namn:'default',
      betyg:[]
    }
  }

  componentDidMount(){


    const rootRef = firebase.database().ref().child('topborn');

    const domanRef = rootRef.child('betyg');

    domanRef.on('value',snap => {

      this.setState({
        betyg:snap.val()
      });

    });



  }

total(){
  const x = this.state.betyg.titel +
            this.state.betyg.h1h2 +
             this.state.betyg.meta +
             this.state.betyg.url +
             this.state.betyg.omdirigrening +
             this.state.betyg.undersidor +
             this.state.betyg.textvolym +
             this.state.betyg.textrelavans +
             this.state.betyg.kallkod +
             this.state.betyg.alttag +
             this.state.betyg.design +
            this.state.betyg.kontakt +
            this.state.betyg.geografisk +
            this.state.betyg.sociala +
            this.state.betyg.uppfatning


  const y = x / 16;
  const total = y.toFixed(1);
  return total
}


addClassTitel(){
if(this.state.betyg.titel <= 3){
  return( "red" )
} else if(this.state.betyg.titel <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.titel > 7) {
      return( "green" )
    }

}

addClassH1h2(){
if(this.state.betyg.h1h2 <= 3){
  return( "red" )
} else if(this.state.betyg.h1h2 <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.h1h2 > 7) {
      return( "green" )
    }

}

addClassMeta(){
if(this.state.betyg.meta <= 3){
  return( "red" )
} else if(this.state.betyg.meta <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.meta > 7) {
      return( "green" )
    }

}

addClassUrl(){
if(this.state.betyg.url <= 3){
  return( "red" )
} else if(this.state.betyg.url <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.url > 7) {
      return( "green" )
    }

}
addClassOm(){
if(this.state.betyg.omdirigrening <= 3){
  return( "red" )
} else if(this.state.betyg.omdirigrening <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.omdirigrening > 7) {
      return( "green" )
    }

}
addClassRel(){
if(this.state.betyg.undersidor <= 3){
  return( "red" )
} else if(this.state.betyg.undersidor <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.undersidor > 7) {
      return( "green" )
    }

}
addClassTexv(){
if(this.state.betyg.textvolym <= 3){
  return( "red" )
} else if(this.state.betyg.textvolym <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.textvolym > 7) {
      return( "green" )
    }

}
addClassTexr(){
if(this.state.betyg.textrelavans <= 3){
  return( "red" )
} else if(this.state.betyg.textrelavans <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.textrelavans > 7) {
      return( "green" )
    }

}
addClassKall(){
if(this.state.betyg.kallkod <= 3){
  return( "red" )
} else if(this.state.betyg.kallkod <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.kallkod > 7) {
      return( "green" )
    }

}
addClassAlt(){
if(this.state.betyg.alttag <= 3){
  return( "red" )
} else if(this.state.betyg.alttag <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.alttag > 7) {
      return( "green" )
    }

}
addClassDes(){
if(this.state.betyg.design <= 3){
  return( "red" )
} else if(this.state.betyg.design <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.design > 7) {
      return( "green" )
    }

}
addClassRes(){
if(this.state.betyg.responsiv <= 3){
  return( "red" )
} else if(this.state.betyg.responsiv <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.responsiv > 7) {
      return( "green" )
    }

}
addClassKont(){
if(this.state.betyg.kontakt <= 3){
  return( "red" )
} else if(this.state.betyg.kontakt <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.kontakt > 7) {
      return( "green" )
    }

}

addClassGeo(){
if(this.state.betyg.geografisk <= 3){
  return( "red" )
} else if(this.state.betyg.geografisk <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.geografisk > 7) {
      return( "green" )
    }

}
addClassSoc(){
if(this.state.betyg.sociala <= 3){
  return( "red" )
} else if(this.state.betyg.sociala <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.sociala > 7) {
      return( "green" )
    }

}
addClassUpp(){
if(this.state.betyg.uppfatning <= 3){
  return( "red" )
} else if(this.state.betyg.uppfatning <= 7) {
    return( "yellow" )
  } else if(this.state.betyg.uppfatning > 7) {
      return( "green" )
    }

}




  render(){
    return (
<div>
  
      <table>
              <thead>
                <tr>
                <th colSpan="5"><strong>OPTIMERING.</strong> För att din sida skall fungera optimalt för sökmotorer och därigenom få en så bra position som möjligt är det framförallt de nedanstående delar som vi tittar på:</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Titel</td>
                  <td>{this.state.betyg.titel}/10</td>
                  <td><div className={this.addClassTitel()}></div></td>
                </tr>




                <tr>
                  <td>H1/H2</td>
                  <td>{this.state.betyg.h1h2}/10</td>
                  <td><div className={this.addClassH1h2()}></div></td>
                </tr>





                <tr>
                  <td>Meta</td>
                  <td>{this.state.betyg.meta}/10</td>
                  <td><div className={this.addClassMeta()}></div></td>
                </tr>





                <tr>
                  <td>URL</td>
                  <td>{this.state.betyg.url}/10</td>
                  <td><div className={this.addClassUrl()}></div></td>
                </tr>

                <tr>
                  <td>301 Omdirigrening</td>
                  <td>{this.state.betyg.omdirigrening}/10</td>
                  <td><div className={this.addClassOm()}></div></td>
                </tr>

                <tr>
                  <td>Relevanta Undersidor</td>
                  <td>{this.state.betyg.undersidor}/10</td>
                  <td><div className={this.addClassRel()}></div></td>
                </tr>

                <tr>
                  <td>Textvolym</td>
                  <td>{this.state.betyg.textvolym}/10</td>
                  <td><div className={this.addClassTexv()}></div></td>
                </tr>

                <tr>
                  <td>Textrelavans</td>
                  <td>{this.state.betyg.textrelavans}/10</td>
                  <td><div className={this.addClassTexr()}></div></td>
                </tr>

                <tr>
                  <td>Källkod</td>
                  <td>{this.state.betyg.kallkod}/10</td>
                  <td><div className={this.addClassKall()}></div></td>
                </tr>

                <tr>
                  <td>Alt.tag</td>
                  <td>{this.state.betyg.alttag}/10</td>
                  <td><div className={this.addClassAlt()}></div></td>
                </tr>

                </tbody>
                </table>


                <div className="konvertering">
                  <p><strong>KONVERTERING.</strong> När din sida ligger topp 10 är det viktigt att besökaren känner att denne kommit helt rätt. För att uppnå detta är det ett par saker som är extra viktiga</p>
                </div>




                <table>
                <tbody>


                <tr>
                  <td>Design/Layout</td>
                  <td>{this.state.betyg.design}/10</td>
                  <td><div className={this.addClassDes()}></div></td>
                </tr>

                <tr>
                  <td>Responsiv design</td>
                  <td>{this.state.betyg.responsiv}/10</td>
                  <td><div className={this.addClassRes()}></div></td>
                </tr>

                <tr>
                  <td>Kontaktmöjligheter</td>
                  <td>{this.state.betyg.kontakt}/10</td>
                  <td><div className={this.addClassKont()}></div></td>
                </tr>

                <tr>
                  <td>Geografisk presentation</td>
                  <td>{this.state.betyg.geografisk}/10</td>
                  <td><div className={this.addClassGeo()}></div></td>
                </tr>

                <tr>
                  <td>Sociala Medier</td>
                  <td>{this.state.betyg.sociala}/10</td>
                  <td><div className={this.addClassSoc()}></div></td>
                </tr>

                <tr>
                  <td>Uppfattning</td>
                  <td>{this.state.betyg.uppfatning}/10</td>
                  <td><div className={this.addClassUpp()}></div></td>
                </tr>




              </tbody>
            </table>



              <div className="total">

                <h3>Totalt:  {this.total()}</h3>

              </div>
              <h3 className="obsen">OBS! MISSA INTE ER DETALJERADE ÅTGÄRDSPLAN PÅ NÄSTA SIDA</h3>

              <div className="virek">

                <p>{this.state.betyg.obs} {this.state.betyg.text1} {this.state.betyg.text2} {this.state.betyg.text3} {this.state.betyg.text4}
                {this.state.betyg.text5} {this.state.betyg.text6}</p>

              </div>

</div>








    );
  }
}

export default Analys;
