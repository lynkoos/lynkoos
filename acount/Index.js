// AcountScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';


const AcountScreen = () => {
    const [step, setStep] = useState(1);
    const [logoScale] = useState(new Animated.Value(1));
    const navigation = useNavigation();

    useEffect(() => {
        animateLogo();
    }, []);

    const animateLogo = () => {
        Animated.timing(logoScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(logoScale, {
                            toValue: 0.95,
                            duration: 2000,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }),
                        Animated.timing(logoScale, {
                            toValue: 1,
                            duration: 2000,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }),
                    ]),
                ).start();
            }, 5000);
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleRegisterNavigation = () => {
        navigation.navigate('Register');
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View style={[styles.container, styles.center]}>
                        <View style={styles.contentContainer}>
                            <Animated.Image source={require('../assets/icon.png')} style={[styles.image, { transform: [{ scale: logoScale }] }]} />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>¡Bienvenido a Lynkoos!</Text>
                                <Text style={styles.description}>
                                    En Lynkoos, nos enfocamos en que nuestros usuarios se sientan lo más cómodos posible. Trabajamos día a día para ofrecerte lo mejor de nosotros.
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={nextStep}>
                            <Text style={styles.buttonText}>Seguir</Text>
                        </TouchableOpacity>
                    </View>
                );
            case 2:
                return (
                    <View style={[styles.container, styles.center]}>
                        <View style={styles.contentContainer}>
                            <Animated.Image source={require('../assets/LogoRed.png')} style={[styles.image, { transform: [{ scale: logoScale }] }]} />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Comparte</Text>
                                <Text style={styles.description}>
                                    La idea de Lynkoos es que puedas compartir información relevante sobre ti y tus intereses, para que así más personas se fijen en ti. ¡Destaca y hazte notar!
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={prevStep}>
                                <Text style={styles.buttonText}>Volver</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={nextStep}>
                                <Text style={styles.buttonText}>Seguir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case 3:
                return (
                    <View style={[styles.container, styles.center]}>
                        <View style={styles.contentContainer}>
                            <Animated.Image source={require('../assets/LogoBlue.png')} style={[styles.image, { transform: [{ scale: logoScale }] }]} />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Conexión</Text>
                                <Text style={styles.description}>
                                    Lynkoos te ayuda a conectarte con grandes oportunidades creando tu propio portafolio personal o profesional de forma gratuita. Lynkoos: ¡compartir te conecta!
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={prevStep}>
                                <Text style={styles.buttonText}>Volver</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={handleRegisterNavigation}>
                                <Text style={styles.buttonText}>Empezar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderStep()}
        </View>
    );
};

export default AcountScreen;
