import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TouchableHighlight, Text } from 'react-native';



const RegionMap = (props) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Map_Kanto.png')}
                style={styles.image}
            />

            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.palletbutton}
                onPress={() => {
                    props.setLocation(props.locations.pallet);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route1button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute1);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.viridianbutton}
                onPress={() => {
                    props.setLocation(props.locations.viridiancity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route22button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute22);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route23button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute23);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.victoryroadbutton}
                onPress={() => {
                    props.setLocation(props.locations.kantovictoryroad2);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route2button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute2);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.viridianforestbutton}
                onPress={() => {
                    props.setLocation(props.locations.viridianforest);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.pewterbutton}
                onPress={() => {
                    props.setLocation(props.locations.pewtercity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route3button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute3);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.mtmoonbutton}
                onPress={() => {
                    props.setLocation(props.locations.mtmoon);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route4button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute4);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.ceruleanbutton}
                onPress={() => {
                    props.setLocation(props.locations.ceruleancity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route24button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute24);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route25button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute25);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route9button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute9);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.rocktunnelbutton}
                onPress={() => {
                    props.setLocation(props.locations.rocktunnel);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.powerplantbutton}
                onPress={() => {
                    props.setLocation(props.locations.powerplant);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.fuchsiabutton}
                onPress={() => {
                    props.setLocation(props.locations.fuchsia);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route10button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute10);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.pokemontowerbutton}
                onPress={() => {
                    props.setLocation(props.locations.pokemontower);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route12button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute12);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route8button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute8);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.saffronbutton}
                onPress={() => {
                    props.setLocation(props.locations.saffroncity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route5button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute5);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route7button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute7);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.celadonbutton}
                onPress={() => {
                    props.setLocation(props.locations.celadoncity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route16button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute16);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route17button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute17);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route18button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute18);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.fuchsiabutton}
                onPress={() => {
                    props.setLocation(props.locations.fuchsia);
                    props.openModal(true)

                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route19button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute19);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route20button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute20);
                    props.openModal(true)

                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.seafoambutton}
                onPress={() => {
                    props.setLocation(props.locations.seafoamislands);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.cinnabarbutton}
                onPress={() => {
                    props.setLocation(props.locations.cinnabar);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route21button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute21);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route15button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute15);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route14button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute14);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route13button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute13);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route6button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute6);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.vermillionbutton}
                onPress={() => {
                    props.setLocation(props.locations.vermillioncity);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.diggletscavebutton}
                onPress={() => {
                    props.setLocation(props.locations.diggletscave);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.route11button}
                onPress={() => {
                    props.setLocation(props.locations.kantoroute11);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="white"
                style={styles.ceruleancavebutton}
                onPress={() => {
                    props.setLocation(props.locations.ceruleancave);
                    props.openModal(true)
                }}
            >
                <Text></Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    image: {
        width: 395,
        height: 273,
    },
    palletbutton: {
        position: 'absolute',
        top: 199,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 20,
        width: 20
    },
    route1button: {
        position: 'absolute',
        top: 170,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 29
    },
    viridianbutton: {
        position: 'absolute',
        top: 150,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    route22button: {
        position: 'absolute',
        top: 150,
        left: 48,
        padding: 10,
        borderRadius: 5,
        width: 32,
        height: 20,
    },
    route23button: {
        position: 'absolute',
        top: 100,
        left: 48,
        padding: 10,
        borderRadius: 5,
        height: 50,
    },
    victoryroadbutton: {
        position: 'absolute',
        top: 68,
        left: 48,
        padding: 10,
        borderRadius: 5,
        height: 33
    },
    route2button: {
        position: 'absolute',
        top: 120,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 30
    },
    viridianforestbutton: {
        position: 'absolute',
        top: 100,
        left: 80,
        padding: 10,
        height: 20,
        borderRadius: 5,
    },
    pewterbutton: {
        position: 'absolute',
        top: 75,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 25
    },
    route3button: {
        position: 'absolute',
        top: 65,
        left: 100,
        padding: 10,
        borderRadius: 5,
        height: 45,
        width: 60
    },
    mtmoonbutton: {
        position: 'absolute',
        top: 65,
        left: 160,
        padding: 10,
        borderRadius: 5,
        height: 30,
        width: 25
    },
    route4button: {
        position: 'absolute',
        top: 65,
        left: 185,
        padding: 10,
        borderRadius: 5,
        width: 60,
        height: 25
    },
    ceruleanbutton: {
        position: 'absolute',
        top: 65,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 25
    },
    ceruleancavebutton: {
        position: 'absolute',
        top: 45,
        left: 220,
        padding: 10,
        borderRadius: 5,
        height: 25,
        borderWidth: 1,
        borderColor: 'white'
    },
    route24button: {
        position: 'absolute',
        top: 35,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 30
    },
    route25button: {
        position: 'absolute',
        top: 35,
        left: 265,
        padding: 10,
        borderRadius: 5,
        height: 25,
        width: 35
    },
    route9button: {
        position: 'absolute',
        top: 65,
        left: 265,
        padding: 10,
        borderRadius: 5,
        height: 25,
        width: 45
    },
    route9button: {
        position: 'absolute',
        top: 65,
        left: 265,
        padding: 10,
        borderRadius: 5,
        height: 25,
        width: 45
    },
    rocktunnelbutton: {
        position: 'absolute',
        top: 65,
        left: 310,
        padding: 10,
        borderRadius: 5,
        height: 23,
        width: 25
    },
    powerplantbutton: {
        position: 'absolute',
        top: 88,
        left: 310,
        padding: 10,
        borderRadius: 5,
        width: 25,
        height: 20
    },
    fuchsiabutton: {
        position: 'absolute',
        top: 165,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 25
    },
    route10button: {
        position: 'absolute',
        top: 98,
        left: 310,
        padding: 10,
        borderRadius: 5,
        width: 25,
        height: 5
    },
    pokemontowerbutton: {
        position: 'absolute',
        top: 118,
        left: 310,
        padding: 10,
        borderRadius: 5,
        width: 25,
        height: 5
    },
    route12button: {
        position: 'absolute',
        top: 138,
        left: 310,
        padding: 10,
        borderRadius: 5,
        width: 25,
        height: 90
    },
    route8button: {
        position: 'absolute',
        top: 118,
        left: 265,
        padding: 10,
        borderRadius: 5,
        width: 45,
        height: 25
    },
    saffronbutton: {
        position: 'absolute',
        top: 118,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    route5button: {
        position: 'absolute',
        top: 88,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 32
    },
    route7button: {
        position: 'absolute',
        top: 118,
        left: 215,
        padding: 10,
        borderRadius: 5,
        width: 30,
        height: 25
    },
    celadonbutton: {
        position: 'absolute',
        top: 118,
        left: 195,
        padding: 10,
        borderRadius: 5,
        height: 25
    },
    route16button: {
        position: 'absolute',
        top: 118,
        left: 130,
        padding: 10,
        borderRadius: 5,
        height: 25,
        width: 67
    },
    route17button: {
        position: 'absolute',
        top: 140,
        left: 130,
        padding: 10,
        borderRadius: 5,
        height: 100,
        width: 25
    },
    route18button: {
        position: 'absolute',
        top: 215,
        left: 150,
        padding: 10,
        borderRadius: 5,
        height: 25,
        width: 60
    },
    fuchsiabutton: {
        position: 'absolute',
        top: 215,
        left: 210,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    route19button: {
        position: 'absolute',
        top: 235,
        left: 210,
        padding: 10,
        borderRadius: 5,
        height: 35
    },
    route20button: {
        position: 'absolute',
        top: 250,
        left: 100,
        padding: 10,
        borderRadius: 5,
        height: 20,
        width: 110
    },
    seafoambutton: {
        position: 'absolute',
        top: 250,
        left: 135,
        padding: 10,
        borderRadius: 5,
        width: 30,
        height: 20,
    },
    cinnabarbutton: {
        position: 'absolute',
        top: 250,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    route21button: {
        position: 'absolute',
        top: 217,
        left: 80,
        padding: 10,
        borderRadius: 5,
        height: 35
    },
    route15button: {
        position: 'absolute',
        top: 215,
        left: 230,
        padding: 10,
        borderRadius: 5,
        width: 35,
        height: 20,
    },
    route14button: {
        position: 'absolute',
        top: 200,
        left: 260,
        padding: 10,
        borderRadius: 5,
        height: 40
    },
    route13button: {
        position: 'absolute',
        top: 200,
        left: 280,
        padding: 10,
        borderRadius: 5,
        width: 30,
        height: 20,
    },
    route6button: {
        position: 'absolute',
        top: 138,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 30
    },
    vermillionbutton: {
        position: 'absolute',
        top: 168,
        left: 245,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    diggletscavebutton: {
        position: 'absolute',
        top: 168,
        left: 265,
        padding: 10,
        borderRadius: 5,
        height: 20,
    },
    route11button: {
        position: 'absolute',
        top: 168,
        left: 285,
        padding: 10,
        borderRadius: 5,
        width: 27,
        height: 20,
    },
});

export default RegionMap