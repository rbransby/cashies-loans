import React from 'react';
import PropTypes from 'prop-types';

export class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.loaded = this.loaded.bind(this);
  }

  loaded() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    return (
      <img {...this.props} onLoad={this.loaded} />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
