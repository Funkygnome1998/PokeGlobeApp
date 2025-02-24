import { useState } from "react"
import AreaModal from "../features/areas/AreaModal"
import RegionMap from "../features/regions/RegionMap"
import { kanto } from "../shared/regionObjects/kanto"
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-animatable";
import { Header } from "react-native-elements";
import { imageSource } from "../shared/spriteRoutes";
import { Image } from "react-native-animatable";


const RegionMapScreen = ({ navigation }) => {


  const [modalShow, setModalShow] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(kanto.locations.pallet)
  const locations = kanto.locations


  return (
    <>
      <Header centerComponent={{ text: "Kanto", style: { color: "white", fontSize: 20 } }} backgroundColor="grey" />
      <View style={{ backgroundColor: "#676e6e", height: '100%', alignSelf: "center" }}>
        <View style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}>
          <Image source={imageSource['pikachu']} />
          <Image source={imageSource['bulbasaur']} />
          <Image source={imageSource['squirtle']} />
          <Image source={imageSource['charmander']} />
          <Image source={imageSource['eevee']} />
        </View>
        <View style={{ marginTop: 50, borderWidth: 2, padding: 10, backgroundColor: 'grey' }}>
          <RegionMap locations={locations} setLocation={(loc) => setCurrentLocation(loc)} openModal={(modal) => setModalShow(modal)} />
          <Text style={{ alignSelf: 'center', paddingTop: 5, color: 'white' }}>Press On Map Locations To See The Habitants!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPressIn={() => {
          navigation.navigate('Pokedex', 'Bulbasaur')
        }}>
          <Text style={styles.text}>Click For Pokedex Mode</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 80, alignSelf: "center" }}>
          <Image source={imageSource['pikachu']} />
          <Image source={imageSource['bulbasaur']} />
          <Image source={imageSource['squirtle']} />
          <Image source={imageSource['charmander']} />
          <Image source={imageSource['eevee']} />
        </View>
      </View>
      <AreaModal
        onClose={() => setModalShow(!modalShow)}
        showModal={modalShow}
        location={currentLocation}
        nav={navigation}
      />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: 275,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 75
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    color: 'white'
  }
});


export default RegionMapScreen