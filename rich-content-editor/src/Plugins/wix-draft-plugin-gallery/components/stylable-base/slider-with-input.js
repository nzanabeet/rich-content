import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'stylable-components/dist/src/components/slider';
import { input } from 'stylable-components/dist/src/components/input';

import { mergeStyles } from '~/Utils';
import styles from './slider-with-input.scss';

class SliderWithInput extends Component {

  constructor(props) {
    super(props);
    this.styles = mergeStyles({ styles, theme: props.theme });
  }
  render() {
    const { label, value, min, max, onChange } = this.props;
    return (
      <div>
        {label ? <label className={this.styles.sliderWithInput_label}>{label}</label> : null}
        <div className={this.styles.sliderWithInput_content}>
          <Slider value={value} onChange={onChange} min={min} max={max} className={this.styles.sliderWithInput_slider} />
          <input value={Math.floor(value)} onChange={onChange} className={this.styles.sliderWithInput_input}/>
        </div>
      </div>
    );
  }
}

SliderWithInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

SliderWithInput.defaultProps = {
  min: 0,
  max: 100,
};

export default SliderWithInput;