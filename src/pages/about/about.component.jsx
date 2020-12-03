import React from 'react';
import './about.styles.scss';

import ItemCard from '../../components/item-card/item-card.component';

const About = (props) => (
  <div className="container">
    <h1 className="section-title">ABOUT</h1>
    <div className="info">
      <h2>Languages & Frameworks</h2>
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
      <div className="items">
        <ItemCard
          name="name"
          price="23"
          imageUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
        <ItemCard
          name="name"
          price="23"
          imageUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
        <ItemCard
          name="name"
          price="23"
          imageUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
        <ItemCard
          name="name"
          price="23"
          imageUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
      </div>
    </div>
  </div>
);

export default About;
