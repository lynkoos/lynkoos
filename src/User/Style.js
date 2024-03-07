// Style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    bannerUser: {
        height: 200,
        marginBottom: 20,
    },
    profileImageContainer: {
        position: 'absolute',
        top: '20%',
        left: '2%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        display: 'grid',
        gridColum: '1',
    },
    verifiedIcon: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        backgroundColor: '#000',
        borderRadius: 50,
        borderWidth: 1,
        padding: 5,
    },
    verifiedBanner: {
        position: 'absolute',
        top: '40%',
        backgroundColor: '#009688',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        zIndex: 9,
    },
    verifiedText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    usernameContainer: {
        left: '20%',
        top: '10%',
        borderColor: 'black',
        borderRadius: 10,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    Nickusername: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    verifiedUserBusiness: {
        position: 'absolute',
        bottom: -5,
        right: '100%',
        backgroundColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        padding: 5,
    },
    ImagenUser: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#009688',
        padding: 10,
        borderRadius: 5,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    extraBadge: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        // padding: 2,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
    },
    socialIcon: {
        marginHorizontal: 10,
    },
    DescriptionUser: {
        flex: 1,
        padding: 20,
    },
    userDescription: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: '#009688',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
});

export default styles;