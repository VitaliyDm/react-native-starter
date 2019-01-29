import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Text,
} from 'react-native';
import { Button } from "../Button";
import PropTypes from 'prop-types';

export class Alert extends Component {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        setVisible: PropTypes.func.isRequired,
        displayInfo: PropTypes.string.isRequired,
        acceptAction: PropTypes.func.isRequired,
    };

    constructor(props){
        super();

        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { acceptAction } = this.props;

        acceptAction();
        this.closeModal();
    }

    closeModal(){
        const { setVisible } = this.props;

        setVisible();
    }

    render(){
        const { visible, setVisible, displayInfo } = this.props;

        return(
            <Modal
                transparent={false}
                animationType={"fade"}
                visible={visible}
                onRequestClose={setVisible}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.contentWrapper}>
                        <Text style={styles.content}>{displayInfo}</Text>
                        <View style={styles.footer}>
                            <Button
                                theme='primary-text'
                                style={{flex: 1}}
                                styleButton={{margin: 0}}
                                onPress={this.closeModal}
                            >
                                Назад
                            </Button>
                            <Button
                                theme='primary-text'
                                styleButton={{margin: 0}}
                                onPress={this.handleSubmit}
                            >
                                Выбрать
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#5D5D5D',
    },
    contentWrapper: {
        height: 250,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        fontSize: 13,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 120,
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingRight: 10,
    },
});
