import React from 'react';

import Paragraph from '../Paragraph';
import Item from '../Item';

import MainImg from './main-img.jpg'

import './styles.css';

class Main extends React.Component {

  addParagraph(title, text) {
    return <Paragraph title={title} text={text} />
  }

  addItems(name, description) {
    return <Item name={name} description={description}/>
  }

  render() {
    return (
      <main className='main'>
        <img src={MainImg} alt={MainImg} className='main-img' />
        {this.addParagraph('How does yoga work?', 'Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation.')}
        {this.addParagraph(null, 'Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.')}
        {this.addParagraph(null, 'There are several types of yoga and many disciplines within the practice.')}
        {this.addParagraph(null, 'This article explores the history, philosophy, health and wellness benefits, and various branches of yoga.')}
        {this.addParagraph('What is yoga?', 'Yoga is an ancient practice that involves physical poses, concentration, and deep breathing.')}
        {this.addParagraph(null, 'A regular yoga practice can promoteTrusted Source endurance, strength, calmness, flexibility, and well-being.')}
        {this.addParagraph(null, 'Yoga is now a popular form of exercise around the world. According to a 2017 national survey, one in seven adults in the United States practiced yoga in the past 12 months.')}
        {this.addParagraph('Philosophy', 'The overall philosophy of yoga is about connecting the mind, body, and spirit.')}
        {this.addParagraph(null, 'There are six branches of yoga. Each branch represents a different focus and set of characteristics.')}
        {this.addParagraph(null, 'The six branches are:')}
        <div className='container'>
          {this.addItems('Hatha yoga', 'This is the physical and mental branch that aims to prime the body and mind.')}
          {this.addItems('Raja yoga', 'This branch involves meditation and strict adherence to a series of disciplinary steps known as the eight limbs of yoga.')}
          {this.addItems('Karma yoga', 'This is a path of service that aims to create a future free from negativity and selfishness.')}
          {this.addItems('Bhakti yoga', 'This aims to establish the path of devotion, a positive way to channel emotions and cultivate acceptance and tolerance.')}
          {this.addItems('Jnana yoga', 'This branch of yoga is about wisdom, the path of the scholar, and developing the intellect through study.')}
          {this.addItems('Tantra yoga', 'This is the pathway of ritual, ceremony, or consummation of a relationship.')}
        </div>
      </main>
    );
  }
}

export default Main;