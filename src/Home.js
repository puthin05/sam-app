import React from 'react';
import './style.css'; // Import your CSS file

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: [
        {
          title: 'Naruto',
          description: 'Follow the journey of Naruto Uzumaki, a young ninja with dreams of becoming the Hokage.',
        },
        {
          title: 'One Piece',
          description: 'Join Monkey D. Luffy and his crew on their epic quest to find the One Piece treasure.',
        },
        {
          title: 'Attack on Titan',
          description: 'Humanity fights for survival against giant humanoid creatures known as Titans.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="anime-homepage">
        <h1>Anime Homepage</h1>
        <ul className="anime-list">
          {this.state.animeList.map((anime, index) => (
            <li key={index} className="anime-item">
              <h2>{anime.title}</h2>
              <p>{anime.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
