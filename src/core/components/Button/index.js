import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet, ViewPropTypes} from 'react-native';


export class Button extends TouchableOpacity {
  static propTypes = {
      ...TouchableOpacity.propTypes,
      theme: PropTypes.string,
      disable: PropTypes.bool,
      styleText: Text.propTypes.style,
      styleButton: ViewPropTypes.style,
  }

  render(){
      let {theme, disable, styleButton, styleText, children, ...props} = this.props;

      let forStyleButton = {
              alignItems: 'center',
              borderRadius: 4,
              margin: 15,
          },
          forStyleText = {
              padding: 10,
              fontSize: 16,
              fontFamily: 'LOProFont-Regular',
          };

      if (theme === 'primary') {
          forStyleButton = {
              ...forStyleButton,
              backgroundColor: '#2195f2',
          };

          forStyleText = {
              ...forStyleText,
              color: '#fff',
          };
      }

      if (theme === 'primary-text'){
          forStyleButton = {
              ...forStyleButton,
          };

          forStyleText = {
              color: disable ? 'rgba(0, 0, 0, .24)' : '#2195f2',
              ...forStyleText,
          };
      }

      if (theme === 'secondary-text'){
          forStyleText = {
              color: disable ? 'rgba(0, 0, 0, .24)' : 'rgba(255, 255, 255, .70)' ,
              ...forStyleText,
          };
      }

      let styles = StyleSheet.create({
          button:{
              ...forStyleButton,
              ...styleButton,
          },
          buttonText: {
              ...forStyleText,
              ...styleText,
          },
      });
      return (
          <TouchableOpacity {...props}>
              <View style={styles.button}>
                  <Text style={styles.buttonText} allowFontScaling={false}>{children}</Text>
              </View>
          </TouchableOpacity>
      );
  }

}

