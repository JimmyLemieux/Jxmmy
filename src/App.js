import React, {Component} from 'react';
import {Jumbotron, Grid,Row,Col,Image} from 'react-bootstrap';
import CustomNav from './components/CustomNav.js';
import Typing from 'react-typing-animation';
import ListLang from './components/ListLang.js';
import Email from './components/Email.js';
import vid from './head.mp4';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div className="App">
      <CustomNav/>
        <Jumbotron>
          <video className="video-header" loop muted autoPlay>
            <source src={vid} type="video/mp4"/>
            <source src={vid} type="video/ogg"/>
          </video>
          <Typing speed={100} loop={false}>
            <span><h3 className="head-txt"> Hello, my name is Jxmmy</h3></span>
            <Typing.Delay ms={10000}/>
          </Typing>

          <Typing speed={100} loop={false}>
            <span><p className="head-syn">Business Email Inquires Below!</p></span>
            <Typing.Delay ms={10000}/>
          </Typing>
        </Jumbotron>
      <h2 className="title-head"> Brief Introduction </h2>
      <p className="title-txt"> I am becoming proffecient in full stack website development with a library named Meteor.js as well as React.js. I am also into Data Analysis in Python and a slick C programmer ( If I can remember to free memory ;) )
          <br/> A Computer Science / Mathematics student going into second year at the University of Guelph Co-op program.
      </p>
      <h2 className="title-head">Website Development</h2>
      <p className="title-txt2"> This website is pretty cool and the best thing? It did not take me that long to make. I could do the same for you with the benefit of little to no cost. <br/> I also have experience with.. </p>
      <ListLang/>
      <h2 className="title-head">Interested In A Website?</h2>
      <Email/>
        <h2 className="title-head"> Music Production </h2>
        <p className="title-txt2"> I have also been getting into beat production and sound engineering. I use a program called Fl Studio as a step sequencer where I can draw and articulate notes to make amazing sounds.
          <br/>I mainly make hip-hop beats with a couple of VST instruments such as Nexus, Harmor, Poizone and Dune 2.
          <br/> Here is some of my favourite beats that I have produced..
        </p>
        <iframe width="100%" height="100" scrolling="no" position="relative" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465566208&color=%23262832&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <iframe width="100%" height="100" scrolling="no" position="relative" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/462994980&color=%23615c58&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <h2 className="title-head">Artist Hit My Line!</h2>
        <Email/>
      </div>
    );
  }
}
