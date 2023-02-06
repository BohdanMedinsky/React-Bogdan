import React, { Component } from 'react';
import './Cooks.css';
 

const profile = {
  name: 'Рецепт Кексів',
  genre: 'Борошно – 230 г цукор – 150 г кефір – 130 мл вершкове масло – 100 г яйця – 2 шт. розпушувач – 10 г ванільний цукор – 1 ч.л.сіль – невелика дрібкародзинки (за бажанням) – 100 г цедра невеликого лимона (за бажанням)', 
  garri:'У мисці змішуємо просіяне борошно, розпушувач, сіль і цукор. Сир розминаємо і додаємо до нього молоко, яйця і масло. Перемішуємо.Змішуємо рідку і суху частину. Додаємо в готове тісто вишню і розкладаємо його по формах. Силіконові форми можна не змащувати. Випікаємо кексики в розігрітій до 200°С духовці близько 30 хвилин.',
  author: 'Сайт : UNIAN ', 
  src: 'https://images.unian.net/photos/2020_04/1588074701-1747.jpg?0.4933549169097746',
}; 
                        
class Cooks extends Component {
  render() {
    return (
      <>
      <div class="card">
          <div>
            <img src={profile.src} alt=''></img>
          </div>
          <div class="container">
            <h2>{profile.name}</h2>
            <p>{profile.author}</p>
            <p>{profile.genre}</p>
            <p>{profile.garri}</p>
          </div>
      </div>
      <hr></hr>
      </>
    );
  }
}

export default Cooks;