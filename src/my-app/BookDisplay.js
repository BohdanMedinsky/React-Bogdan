import React, { Component } from 'react';
import './BookDisplay.css';
 

const profile = {
  date: 'Рік видання 30 липня 2016 р ',
  name: 'Гаррі Потер і прокляте диття',
  pages: 'Кількість сторінок 302',
  genre: 'Жанр фентезі ', 
  garri:' Про книгу : Гаррі Поттер і прокляте дитя» — пєса в двох частинах британської письменниці Джоан Роулінг; написана в співавторстві зі сценаристом Джеком Торном і режисером Джоном Тіффані.',
  author: 'Автор Джуан Роулінг', 
  src: 'https://upload.wikimedia.org/wikipedia/uk/f/fe/HP_and_the_Cursed_Child_UKR.png',
}; 
                        
class BookDisplay extends Component {
  render() {
    return (
      <>
      <div class="card">
          <div>
            <img src={profile.src} alt=''></img>
          </div>
          <div class="container">
            <h2>{profile.name}</h2>
            <p>{profile.date}</p>
            <p>{profile.pages}</p>
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

export default BookDisplay;