import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


export class Icon extends React.Component {
  /**
   * Takes the icon type, and any modifier classes, and returns
   * a string of classes for use in the jsx markup
   * @param  {string} type         the icon type (eg. 'heart-heavy')
   * @param  {array} otherClasses  an array of modifier classes for the icon
   * @return {string}              a string of classes for use in the jsx markup
   */
  getIconClasses(type, otherClasses){
    let typeClass = type ? `icon-${type}` : false;
    return cx('icon', [typeClass, otherClasses]);
  }

  /**
   * The icon html generator
   * @return {element}              the icon html markup
   */
  iconHtml(){
    let iconClasses = this.getIconClasses(this.props.type, this.props.classes);
    return (
      <span className={iconClasses}></span>
    );
  }

  render(){
    let iconHtml = this.iconHtml();

    return iconHtml;
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Icon;
