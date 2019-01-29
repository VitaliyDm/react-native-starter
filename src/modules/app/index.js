import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { store } from './store/index';
import { getUserToken } from './store/effects';

class AppComponent extends Component {
    render() {
        return (
        <View>
            <Text>Hello world!</Text>
        </View>);
    }
}

const mapStateToProps = state => ({
    isLogIn: state.auth.isLogIn,
    dispatch: state.dispatch,
});

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

const Index = () =>(
    <Provider store={store}>
        <View style={{flex: 1}}>
            <App />
        </View>
    </Provider>
);

export default Index;


