import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then(json => this.setState({ show: json }))
  }

  render() {
    const { show } = this.state;
    console.log(show)
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
            <p>Average Rating: {show.rating.average}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>            
          </div>
        }
      </div>
    )
  }
};

export default SingleSeries;