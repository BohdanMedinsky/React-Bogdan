import React, { Component } from 'react';
import './Music.css';
 

const profile = {
  name: 'СКАЙ',
  genre: 'альтернативний рок поп-рок пост-панк',
  author: 'Олег Собчук Олександр Грищук (Папа)Артем Таланов Олександр Друкер Юрій Мозіль ', 
  autho:'Країна	Україна .',
  authos:'Олег Собчук та Олександр Грищук заснували СКАЙ у 2001 році. Вони поєднали у своїх піснях альтернативний рок, поп-рок і пост-панк. Група доволі швидко стала популярною. Першим знаковим хітом стала пісня "Тебе це може вбити". Трек потрапив в ротацію на більшість радіостанцій України та наполегливо утримував позиції лідера в хіт-парадах. ',
  alboms :'',
  src: 'https://afisha.24tv.ua/resources/photos/news/202110/1768824.jpg?v=1661259374000&w=840&h=472&fit=cover&output=webp&q=50',
  src1:'https://skai.ua/wp-content/uploads/2018/05/rare-birds_349h313.jpg',
  src2:'https://i.scdn.co/image/ab67616d0000b2735a5eab0cac81805e926996c0',
}; 
                        
class Music extends Component {
  render() {
    return (
      <>
      <div class="card">
          <div>
            <img className='music' src={profile.src} alt=''></img>
          </div>
          <div class="container">
            <h2>{profile.name}</h2>
            <p>{profile.genre}</p>
            <p>{profile.autho}</p>
            <p>{profile.author}</p>
            <p>{profile.authos}</p>
          </div>
          <div className='image'>

          <img src={profile.src1} alt='Рідкісні Птахи'></img>
          <img src={profile.src2} alt='Планета'></img>
          </div>
      </div>
      <hr></hr>
      </>
    );
  }
}

export default Music;