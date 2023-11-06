import { StyleSheet } from "react-native";
import { box_height } from "./stylesDimension";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const stylesListScreen = StyleSheet.create({
    container: {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : 'black',
    },
    secundaryContainer: {
        flexDirection   : 'column',
        marginbutton    : 5,
    },
    box: {
        height: box_height,
    },
    boxBody : {
        flex            : 1,
        justifyContent  : 'center',
    },
    buttonContainer: {
        flexDirection   : 'row',
        justifyContent  : 'space-evenly',
        alignItems      : 'center',
    },
    button:{
        backgroundColor: 'blue',
        padding         : 5,
        margin          : 50,
        borderRadius    : 30,
        shadowRadius    : 5,
    },
    textButton:{
        color           : 'white',
        fontWeight      : 'bold',
        textAlign       : 'center',
        textTransform   : 'uppercase',
    },
    title: {
        fontSize        : 35,
        fontWeight      : 'bold',
        textAlign       : 'center',
        color           : 'white',
    },
    labelScreen                 : {
        color             : 'white',
        fontWeight        : '600',
        fontSize          : 20,
        marginTop         : 10,
        marginLeft        : 20,
        marginRight       : 20,
    },
    textInput                   : {
        color             : Colors.dark,
        backgroundColor   : 'white',
        fontSize          : 18,
        marginTop         : 10,
        marginLeft        : 10,
        marginRight       : 10,
        marginBottom      : 10,
        fontWeight        : '600',
        paddingLeft       : 15,
        borderWidth       : 1,
        borderRadius      : 10,
        borderColor       : Colors.black,
        paddingRight      : 10,
    },
})