import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { mergeStyles } from '../Utils/mergeStyles';
import styles from '../../statics/styles/tooltip.scss';

// TODO: add tooltip configuration ability
class TooltipHost extends PureComponent {
  render() {
    const mergedStyles = mergeStyles({ styles, theme: this.props.theme });
    return <ReactTooltip className={mergedStyles.tooltip} effect={'solid'} delayShow={300} />;
  }
}

TooltipHost.propTypes = {
  theme: PropTypes.object,
};

export default TooltipHost;
