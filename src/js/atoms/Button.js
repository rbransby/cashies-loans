import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

class Button extends Component {
  /**
   * takes an icon type and return the icon HTML
   * @param  {string} icon  type of the icon
   * @return {string}       icon HTML
   */
  iconHTML(icon) {
    return <Icon type={icon} />;
  }

  render() {
    const { action, type, className, href, name, id, variant, size, iconPlacement, icon, text, target, disabled, onClick } = this.props;

    if (action) {
      return (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={`button ${className} ${variant ? 'button--' + variant : null} ${size ? 'button--' + size : null}`}
          data-automation={`${name}-${id}`}
        >
          { iconPlacement === 'before' && this.iconPlacement(icon) }
          <span class="button__text">{text}</span>
          { iconPlacement === 'after' && this.iconPlacement(icon) }
        </button>
      );
    }

    return (
      <a
        href={href}
        type={type}
        disabled={disabled}
        role="button"
        className={`button ${className} ${variant ? 'button--' + variant : null} ${size ? 'button--' + size : null}`}
        data-automation={`${name}-${id}`}
        target={target}
      >
        { iconPlacement === 'before' && this.iconPlacement(icon) }
        <span class="button__text">{text}</span>
        { iconPlacement === 'after' && this.iconPlacement(icon) }
      </a>
    );
  }
}


Button.propTypes = {
  icon: PropTypes.string,
  iconPlacement: PropTypes.oneOf(['before', 'after']),
  text: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.oneOf(['_target', '_self']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
