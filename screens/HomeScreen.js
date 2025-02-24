import { Text, Image } from "react-native-animatable"
import { TouchableOpacity } from "react-native"
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Animated } from "react-native";
import { useRef, Easing } from "react";

const HomeScreen = ({ navigation }) => {
    const region = 'Kanto'
    const titleImage = require('../assets/title.png')
    const pokeballImage = require('../assets/pokeball.png')

    const rotationValue = useRef(new Animated.Value(0)).current;
    const interpolatedRotation = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const animatedStyle = {
        transform: [{ rotate: interpolatedRotation }],
    };

    const rotateAnimation =
        Animated.timing(rotationValue, {
            toValue: 2,
            duration: 500,
            useNativeDriver: true,
        })

    return (
        <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => {
                rotateAnimation.start();
                setTimeout(() => {
                    rotateAnimation.stop()
                    navigation.navigate('Kanto')
                }, 500)
            }}
        >
            <Animatable.View animation='fadeInUp' duration={2000} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Image source={pokeballImage} style={[styles.topLeft, animatedStyle]} />
                <Image source={pokeballImage} style={[styles.topRight, animatedStyle]} />
                <Image source={pokeballImage} style={[styles.bottomLeft, animatedStyle]} />
                <Image source={pokeballImage} style={[styles.bottomRight, animatedStyle]} />
                <Image source={titleImage} style={styles.image} />
                <Text style={styles.text}>Touch To Start</Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        image: {
            width: 350,
            height: 200
        },
        topLeft: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 100,
            height: 100,
        },
        topRight: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: 100,
            height: 100,
        },
        bottomLeft: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 100,
            height: 100,
        },
        bottomRight: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 100,
            height: 100,
        },
        text: {
            top:200,
            fontSize: 20
        },
    }
)

export default HomeScreen