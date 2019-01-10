import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  state = {
    show: null,
    seasons: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then(json => this.setState({ show: json }));

    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
    .then((response) => response.json())
    .then(json => this.setState({ seasons: json }));
  }

  render() {
    const { show, seasons } = this.state;
    console.log(seasons)
    return (
      <div>
        { show === null && <Loader />}
        {
          show !== null 
          &&
          <div>
            <h3>
              <a href={`https://www.imdb.com/title/${show.externals.imdb}/`} target="blank">
                {show.name}
              </a>
            </h3>
            <p>Premier Date: {show.premiered}</p>
            <p>Average IMDB Rating: {show.rating.average}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
            <a href='/'>New search</a>            
          </div>
        }
      </div>
    )
  }
};

export default SingleSeries;