import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation, Hue, EditableInput } from 'react-color/lib/components/common';
import HuePointer from '../components/hue-pointer';
import SaturationPointer from '../components/saturation-pointer';
import styles from '../../statics/styles/custom-color-picker.scss';
class CustomColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.inlineStyles = {
      hue: {
        height: '12px',
        position: 'relative',
        marginTop: '6px',
      },
      saturation: {
        width: '100%',
        height: '112px',
        position: 'relative',
      },
      input: {
        position: 'relative',
        width: '100%',
        border: 'none',
        paddingTop: '13px',
        fontSize: '14px',
      },
    };
  }
  render() {
    const { t } = this.props;
    return (
      <div className={styles.container}>
        <div style={this.inlineStyles.saturation}>
          <Saturation style={{ saturation: this.inlineStyles.saturation }} pointer={() => <SaturationPointer />} {...this.props} />
        </div>
        <div style={this.inlineStyles.hue}>
          <Hue style={{ hue: this.inlineStyles.hue }} {...this.props} pointer={() => <HuePointer />} />
        </div>
        <div className={styles.editable_input_container}>
          <div className={styles.input_label}>
            {t('ButtonModal_Color_Input_Label')}
          </div>
          <div className={styles.input}>
            <EditableInput
              style={{ input: this.inlineStyles.input }}
              value={this.props.color}
              {...this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomPicker(CustomColorPicker);