import { StyleSheet } from 'react-native';

// helper 
import { getScaleSize, getFontStyle, colors } from '../../../utils/index';

//  define your styles 
export default StyleSheet.create({
    mainTitle: {
        fontSize: getScaleSize(18),
        fontFamily: getFontStyle().bold.fontFamily,
        color: colors.black,
        marginTop: getScaleSize(30),
        alignSelf: 'center',
    },
    buttonView:{
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    imageView:{
        height: getScaleSize(250),
        width: getScaleSize(250),
        borderRadius: getScaleSize(125),
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: getScaleSize(20),
        borderWidth: getScaleSize(2),
        borderColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 5,
        shadowRadius: 10,  
        elevation: 2,
        backgroundColor: colors.white
    },
    image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: getScaleSize(100),
    }
});
