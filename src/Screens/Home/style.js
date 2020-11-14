import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    ImageStyle: {
        alignSelf: 'stretch',
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: '80%',
        width: '100%',
        padding: 50,
        marginLeft: 25,
        marginRight: 25 
    },
    text :{
        height: '100%',
        width: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginLeft: 25,
        marginRight: 25,
        color: '#fff',
        fontSize: 40, 
        position: 'absolute'
    },
    safeArea: {
        flex: 1, 
        backgroundColor:'#1428DD', 
        paddingTop: 50
    },
    view: {
        flex: 2,
        flexDirection:'column',
        justifyContent: 'center' 
    },
    containerStyle:{
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    } ,
    dotStyle :{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
    }

});

export default styles;