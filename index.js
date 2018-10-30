
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

const { QDProgressHud } = NativeModules;


export default class QDProgressHud extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            modal: false,
            text:props.text
        }
    }

    show(){
        this.setState({modal:true});
    }
    close(){
        this.setState({modal:false});
    }
    render() {
        const visible = this.state.modal; 
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={visible}
                onRequestClose={() => { console.log('close modal') }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator animating={true} />
                            <Text style={styles.textStyle}>
                                {this.state.text}
                                </Text>
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
        justifyContent: 'center',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textStyle:{
        marginTop: 10,
    }
})
