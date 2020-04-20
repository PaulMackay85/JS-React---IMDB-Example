import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
  render(){
    const filmNodes = this.props.films.map((film) => {
      return <Film key={film.id}><a href={film.url} target="_blank"> {film.name} </a></ Film>
    })

    return (
      <ul>
      {filmNodes}
      </ul>
    )
  }
}

export default FilmList;
