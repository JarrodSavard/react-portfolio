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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quas dignissimos voluptas rem soluta, minima sint voluptate labore
        ratione impedit magnam amet quis, in ex aliquam velit voluptatum omnis
        accusantium? Vero quis eum, quaerat odio adipisci blanditiis sequi
        doloremque architecto ducimus! Repellat rem libero ducimus quia esse,
        debitis rerum eveniet alias non ab. In natus, laborum incidunt, aliquid
        temporibus minus reiciendis ut perspiciatis corporis mollitia ullam,
        consequuntur voluptates nam omnis quae iste fuga? Laudantium ut
        accusantium ex? Repellat ipsam ad, nobis labore voluptatum praesentium
        iste voluptate deleniti sapiente laborum quis voluptatibus earum
        quibusdam maiores. Amet dolores maiores itaque repellendus voluptatum
        consectetur excepturi
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
