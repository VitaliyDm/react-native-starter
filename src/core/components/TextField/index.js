import React  from 'react';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';


export class TextField extends TextField {

  static propTypes = {
      theme: PropTypes.string,
  };

  constructor(props){
      super(props);

  }

  updateRef(name, ref) {
      this[name] = ref;
  }


  render(){
      let {theme,  ...props} = this.props;
      let forTheme = {};


      if (theme === 'light') {
          forTheme = {
              baseColor: 'rgba(0, 0, 0, .54)',
              textColor: 'rgba(0, 0, 0, .87)',
              placeholderColor: 'rgba(0, 0, 0, .50)',
              underlineColor: 'rgba(0, 0, 0, .42)',
              ...forTheme,
          };
      }
      if (theme === 'dark'){
          forTheme = {
              baseColor: 'rgba(255, 255, 255, .70)',
              textColor: '#fff',
              placeholderColor: 'rgba(255, 255, 255, .50)',
              ...forTheme,
          };
      }

      forTheme = {...props, ...forTheme};

      return (
          <TextField
              ref={this.updateRef}
              {...forTheme}
              allowFontScaling={false}
          />
      );
  }

}
