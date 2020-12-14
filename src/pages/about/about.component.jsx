import React from 'react';
import './about.styles.scss';

import ItemCard from '../../components/item-card/item-card.component';

//IMAGES
import HTML from '../../assets/images/Html_logo.png';
import CSS from '../../assets/images/Css_logo.png';
import SCSS from '../../assets/images/Sass_logo.png';
import JavaScript from '../../assets/images/JavaScript_logo.png';
import Node from '../../assets/images/Node_logo.png';
import Reactjs from '../../assets/images/React_logo.png';
import API from '../../assets/images/API_logo.png';
import Python from '../../assets/images/Python_icon.png';
import Pandas from '../../assets/images/Pandas_logo.png';
import Matplotlib from '../../assets/images/Matplotlib_logo.png';
import Mongodb from '../../assets/images/Mongodb_logo.png';
import Firebase from '../../assets/images/Firebase_logo.png';

const About = (props) => (
  <div className="container">
    <h1 className="section-title">ABOUT</h1>
    <div className="info">
      <p>
        Hi, my name is Jarrod Savard and I'm a software engineer that
        specializes in JavaScript and Python located in Torrance, CA.
        <br />
        <br />
        While coding in JavaScript I use frameworks such as Node.js and Reactjs.
        Node.js is great for use cases that require a backend to be linked such
        as a database, files to be read and/or written, and for APIs to be used
        or written. Reactjs is a great framework used to improve performance by
        breaking web applications up into components and rendering them as a
        single html file.
        <br />
        <br />
        While using Python I use frameworks Pandas and Matplotlib. Pandas is
        great to create and modify databases in a csv format. Matplotlib is
        mainly used to plot data into a visual representation using graphs such
        as plot, bar, and pie charts.
      </p>
      <h2>Languages & Frameworks</h2>
      <div className="items">
        <ItemCard name="HTML" imageUrl={HTML} />
        <ItemCard name="CSS" imageUrl={CSS} />
        <ItemCard name="SCSS" imageUrl={SCSS} />
        <ItemCard name="JavaScript" imageUrl={JavaScript} />
        <ItemCard name="Node" imageUrl={Node} />
        <ItemCard name="Reactjs" imageUrl={Reactjs} />
        <ItemCard name="API" imageUrl={API} />
        <ItemCard name="Python" imageUrl={Python} />
        <ItemCard name="Pandas" imageUrl={Pandas} />
        <ItemCard name="Matplotlib" imageUrl={Matplotlib} />
        <ItemCard name="Mongodb" imageUrl={Mongodb} />
        <ItemCard name="Firebase" imageUrl={Firebase} />
      </div>
    </div>
  </div>
);

export default About;
