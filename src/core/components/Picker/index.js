import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TextInput,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Button } from "../Button";
import PropTypes from 'prop-types';
import {LoTextField} from "../TextField";

export class Picker extends Component {
    static propTypes = {
        selectItem: PropTypes.func.isRequired,
        availableItems: PropTypes.array.isRequired,
        visible: PropTypes.bool.isRequired,
        setVisible: PropTypes.func.isRequired,
        searchBarPlaceholder: PropTypes.string.isRequired,
    };

    constructor(props){
        super(props);
        const { visible } = this.props;

        this.state = {
            desiredItem: '',
            selectedItem: '',
        };

        this.handleSearchItem = this.handleSearchItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSearchItem(desiredItem){
        this.setState({desiredItem});
    }

    handleSelectItem(selectedItem){
        this.setState({selectedItem});
    }

    handleSubmit(){
        const { selectItem } = this.props;
        const { selectedItem } = this.state;

        console.log('selectItem',selectItem);
        selectItem(selectedItem);
        this.closeModal();
    }

    closeModal(){
        const { setVisible } = this.props;

        setVisible();
    }

    render(){
        const { availableItems, visible, setVisible, searchBarPlaceholder } = this.props;
        const { selectedItem, desiredItem }  = this.state;

        console.log(visible);
        return(
            <Modal
                transparent={false}
                animationType={"fade"}
                visible={visible}
                onRequestClose={setVisible}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.pickerWrapper}>
                        <View style={styles.pickerSearch}>
                            <TextField
                                label={searchBarPlaceholder}
                                keyboardType="default"
                                textContentType="name"
                                keyboardAppearance="light"
                                returnKeyType="done"
                                returnKeyLabel="done"
                                blurOnSubmit={false}
                                theme="light"
                                multiline={false}
                                onChangeText={this.handleSearchItem}
                                style
                            />
                        </View>
                        <ScrollView>
                            {
                                availableItems
                                    .filter(item => item.name.startsWith(desiredItem) || desiredItem === '')
                                    .map(item =>
                                        <TouchableOpacity
                                            key={item.id}
                                            onPress={() => this.handleSelectItem(item.name)}
                                            style={[styles.pickerItem, item.name === selectedItem && styles.selectedItem]}
                                        >
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>)
                            }
                        </ScrollView>
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
    pickerWrapper: {
        height: 400,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    pickerSearch: {
        borderBottomColor: '#D2D2D2',
        borderBottomWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    footer: {
        borderTopColor: '#D2D2D2',
        borderTopWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 120,
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingRight: 10,
    },
    pickerItem: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    selectedItem:{
        backgroundColor: "#2196F3",
        borderRadius: 5,
    },
});
