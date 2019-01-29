import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator,
} from 'react-native';

export const Spinner = props => {

    const {
        loading,
        style,
        ...attributes
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {console.log('close modal');}}>
            <View style={{...styles.modalBackground, ...style}}>
                <View style={{...styles.activityIndicatorWrapper, ...style}}>
                    <ActivityIndicator size="large"
                        color="#2195f2"
                        animating={loading} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff60',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
