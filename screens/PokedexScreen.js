import { Pressable, ScrollView } from "react-native-gesture-handler"
import { Text, View } from "react-native-animatable"
import data from '../shared/pokedexData.json'
import { imageSource } from "../shared/spriteRoutes"
import { Image } from "react-native-animatable"
import { useState } from "react"
import { Button, Header } from "react-native-elements"
import { StyleSheet } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable'
import { useRef } from "react"
import { PanResponder } from "react-native"
import TouchableOpacity from "react-native-gesture-handler"



const PokedexScreen = ({ route, navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Bulbasaur', value: 'Bulbasaur' },
    { label: 'Ivysaur', value: 'Ivysaur' },
    { label: 'Venusaur', value: 'Venusaur' },
    { label: 'Charmander', value: 'Charmander' },
    { label: 'Charmeleon', value: 'Charmeleon' },
    { label: 'Charizard', value: 'Charizard' },
    { label: 'Squirtle', value: 'Squirtle' },
    { label: 'Wartortle', value: 'Wartortle' },
    { label: 'Blastoise', value: 'Blastoise' },
    { label: 'Caterpie', value: 'Caterpie' },
    { label: 'Metapod', value: 'Metapod' },
    { label: 'Butterfree', value: 'Butterfree' },
    { label: 'Weedle', value: 'Weedle' },
    { label: 'Kakuna', value: 'Kakuna' },
    { label: 'Beedrill', value: 'Beedrill' },
    { label: 'Pidgey', value: 'Pidgey' },
    { label: 'Pidgeotto', value: 'Pidgeotto' },
    { label: 'Pidgeot', value: 'Pidgeot' },
    { label: 'Rattata', value: 'Rattata' },
    { label: 'Raticate', value: 'Raticate' },
    { label: 'Spearow', value: 'Spearow' },
    { label: 'Fearow', value: 'Fearow' },
    { label: 'Ekans', value: 'Ekans' },
    { label: 'Arbok', value: 'Arbok' },
    { label: 'Pikachu', value: 'Pikachu' },
    { label: 'Raichu', value: 'Raichu' },
    { label: 'Sandshrew', value: 'Sandshrew' },
    { label: 'Sandslash', value: 'Sandslash' },
    { label: 'Nidoran-f', value: 'Nidoran-f' },
    { label: 'Nidorina', value: 'Nidorina' },
    { label: 'Nidoqueen', value: 'Nidoqueen' },
    { label: 'Nidoran-m', value: 'Nidoran-m' },
    { label: 'Nidorino', value: 'Nidorino' },
    { label: 'Nidoking', value: 'Nidoking' },
    { label: 'Clefairy', value: 'Clefairy' },
    { label: 'Clefable', value: 'Clefable' },
    { label: 'Vulpix', value: 'Vulpix' },
    { label: 'Ninetales', value: 'Ninetales' },
    { label: 'Jigglypuff', value: 'Jigglypuff' },
    { label: 'Wigglytuff', value: 'Wigglytuff' },
    { label: 'Zubat', value: 'Zubat' },
    { label: 'Golbat', value: 'Golbat' },
    { label: 'Oddish', value: 'Oddish' },
    { label: 'Gloom', value: 'Gloom' },
    { label: 'Vileplume', value: 'Vileplume' },
    { label: 'Paras', value: 'Paras' },
    { label: 'Parasect', value: 'Parasect' },
    { label: 'Venonat', value: 'Venonat' },
    { label: 'Venomoth', value: 'Venomoth' },
    { label: 'Diglett', value: 'Diglett' },
    { label: 'Dugtrio', value: 'Dugtrio' },
    { label: 'Meowth', value: 'Meowth' },
    { label: 'Persian', value: 'Persian' },
    { label: 'Psyduck', value: 'Psyduck' },
    { label: 'Golduck', value: 'Golduck' },
    { label: 'Mankey', value: 'Mankey' },
    { label: 'Primeape', value: 'Primeape' },
    { label: 'Growlithe', value: 'Growlithe' },
    { label: 'Arcanine', value: 'Arcanine' },
    { label: 'Poliwag', value: 'Poliwag' },
    { label: 'Poliwhirl', value: 'Poliwhirl' },
    { label: 'Abra', value: 'Abra' },
    { label: 'Kadabra', value: 'Kadabra' },
    { label: 'Alakazam', value: 'Alakazam' },
    { label: 'Machop', value: 'Machop' },
    { label: 'Machoke', value: 'Machoke' },
    { label: 'Machamp', value: 'Machamp' },
    { label: 'Bellsprout', value: 'Bellsprout' },
    { label: 'Weepinbell', value: 'Weepinbell' },
    { label: 'Victreebel', value: 'Victreebel' },
    { label: 'Tentacool', value: 'Tentacool' },
    { label: 'Tentacruel', value: 'Tentacruel' },
    { label: 'Geodude', value: 'Geodude' },
    { label: 'Graveler', value: 'Graveler' },
    { label: 'Golem', value: 'Golem' },
    { label: 'Ponyta', value: 'Ponyta' },
    { label: 'Rapidash', value: 'Rapidash' },
    { label: 'Slowpoke', value: 'Slowpoke' },
    { label: 'Slowbro', value: 'Slowbro' },
    { label: 'Magnemite', value: 'Magnemite' },
    { label: 'Magneton', value: 'Magneton' },
    { label: 'Farfetchd', value: 'Farfetchd' },
    { label: 'Doduo', value: 'Doduo' },
    { label: 'Dodrio', value: 'Dodrio' },
    { label: 'Seel', value: 'Seel' },
    { label: 'Dewgong', value: 'Dewgong' },
    { label: 'Grimer', value: 'Grimer' },
    { label: 'Muk', value: 'Muk' },
    { label: 'Shellder', value: 'Shellder' },
    { label: 'Cloyster', value: 'Cloyster' },
    { label: 'Gastly', value: 'Gastly' },
    { label: 'Haunter', value: 'Haunter' },
    { label: 'Gengar', value: 'Gengar' },
    { label: 'Onix', value: 'Onix' },
    { label: 'Drowzee', value: 'Drowzee' },
    { label: 'Hypno', value: 'Hypno' },
    { label: 'Krabby', value: 'Krabby' },
    { label: 'Kingler', value: 'Kingler' },
    { label: 'Voltorb', value: 'Voltorb' },
    { label: 'Electrode', value: 'Electrode' },
    { label: 'Exeggcute', value: 'Exeggcute' },
    { label: 'Exeggutor', value: 'Exeggutor' },
    { label: 'Cubone', value: 'Cubone' },
    { label: 'Marowak', value: 'Marowak' },
    { label: 'Hitmonlee', value: 'Hitmonlee' },
    { label: 'Hitmonchan', value: 'Hitmonchan' },
    { label: 'Lickitung', value: 'Lickitung' },
    { label: 'Koffing', value: 'Koffing' },
    { label: 'Weezing', value: 'Weezing' },
    { label: 'Rhyhorn', value: 'Rhyhorn' },
    { label: 'Rhydon', value: 'Rhydon' },
    { label: 'Chansey', value: 'Chansey' },
    { label: 'Tangela', value: 'Tangela' },
    { label: 'Kangaskhan', value: 'Kangaskhan' },
    { label: 'Horsea', value: 'Horsea' },
    { label: 'Seadra', value: 'Seadra' },
    { label: 'Goldeen', value: 'Goldeen' },
    { label: 'Seaking', value: 'Seaking' },
    { label: 'Staryu', value: 'Staryu' },
    { label: 'Starmie', value: 'Starmie' },
    { label: 'Mr.Mime', value: 'Mr.Mime' },
    { label: 'Scyther', value: 'Scyther' },
    { label: 'Jynx', value: 'Jynx' },
    { label: 'Electabuzz', value: 'Electabuzz' },
    { label: 'Magmar', value: 'Magmar' },
    { label: 'Pinsir', value: 'Pinsir' },
    { label: 'Tauros', value: 'Tauros' },
    { label: 'Magikarp', value: 'Magikarp' },
    { label: 'Gyarados', value: 'Gyarados' },
    { label: 'Lapras', value: 'Lapras' },
    { label: 'Ditto', value: 'Ditto' },
    { label: 'Eevee', value: 'Eevee' },
    { label: 'Vaporeon', value: 'Vaporeon' },
    { label: 'Jolteon', value: 'Jolteon' },
    { label: 'Flareon', value: 'Flareon' },
    { label: 'Porygon', value: 'Porygon' },
    { label: 'Omanyte', value: 'Omanyte' },
    { label: 'Omastar', value: 'Omastar' },
    { label: 'Kabuto', value: 'Kabuto' },
    { label: 'Kabutops', value: 'Kabutops' },
    { label: 'Aerodactyl', value: 'Aerodactyl' },
    { label: 'Snorlax', value: 'Snorlax' },
    { label: 'Articuno', value: 'Articuno' },
    { label: 'Zapdos', value: 'Zapdos' },
    { label: 'Moltres', value: 'Moltres' },
    { label: 'Dratini', value: 'Dratini' },
    { label: 'Dragonair', value: 'Dragonair' },
    { label: 'Dragonite', value: 'Dragonite' },
    { label: 'Mewtwo', value: 'Mewtwo' },
    { label: 'Mew', value: 'Mew' },

  ]);

  const pokemon = route.params
  const region = 'Kanto'

  const [currentPokedex, setCurrentPokedex] = useState(data.find((poke) => poke.name.english === pokemon))

  const formatType = (type) => {
    if (type.length === 2) {
      return type[0] + "/" + type[1]
    }
    return type[0]
  }

  const colorPicker = (type) => {
    switch (type) {
      case "Normal":
      case "Flying":
        return "#b8b8b8"
        break
      case "Water":
      case "Ice":
        return "#38cdf2"
        break
      case "Grass":
      case 'Bug':
        return "#32a852"
        break
      case 'Fire':
        return "#ff432e"
        break
      case 'Poison':
      case 'Ghost':
        return "#b22eff"
        break
      case 'Psychic':
        return "#d639db"
        break
      case "Rock":
      case "Ground":
        return "#875d26"
        break
      case "Fighting":
        return "#bf7617"
        break
      case 'Dragon':
        return "#ccc850"
      case 'Electric':
        return "#ebe534"
      default:
        return "#b8b8b8"
    }
  }

  const view = useRef();

  const isLeftSwipe = ({ dx }) => dx < -35;
  const isRightSwipe = ({ dx }) => dx > 35;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      view.current


    },
    onPanResponderEnd: (e, gestureState) => {
      console.log('pan responder end', gestureState);
      if (isLeftSwipe(gestureState) && currentPokedex.id != 151) {
        setCurrentPokedex(data.find((poke) => poke.id === currentPokedex.id + 1))
      } else if (isRightSwipe(gestureState) && currentPokedex.id != 1) {

        setCurrentPokedex(data.find((poke) => poke.id === currentPokedex.id - 1))
      }
    }
  });




  return (

    <ScrollView style={[styles.main,]}>
      <View>
        <Header
          leftComponent={{ icon: 'map', onPress: () => navigation.navigate('Kanto', { region }), color: 'white' }}
          centerComponent={{ text: "#" + currentPokedex.id + " " + currentPokedex.name.english, style: { color: 'white', fontSize: 25 } }}
          backgroundColor="#676e6e"
        />
      </View>
      <View style={styles.dropContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onSelectItem={(item) => {
            setCurrentPokedex(data.find((poke) => poke.name.english === item.value))

          }}
          placeholder="Pokedex Entries"
          style={{ backgroundColor: 'grey', borderColor: 'white' }}
        />
      </View>
      <View
        style={[styles.container, { backgroundColor: colorPicker(currentPokedex.type[0]) }]}>
        <Text style={{ alignSelf: 'center', color: 'white', marginTop: 10, fontSize: 15 }}>Swipe on Pokemon to Change Entry!</Text>
        <Animatable.View
          ref={view}
          {...panResponder.panHandlers}>
          <Image source={imageSource[currentPokedex.name.english.toLowerCase()]} style={styles.image} />
        </Animatable.View>
        <Text style={styles.type}>{"Type: " + formatType(currentPokedex.type)}</Text>
        <Text style={styles.statHeader}>Base Stats: </Text>
        <View style={styles.statContainer}>
          <Text style={styles.stat}>{"HP: " + currentPokedex.base.HP}</Text>
          <Text style={styles.stat}>{"Attack: " + currentPokedex.base.Attack}</Text>
          <Text style={styles.stat}>{"Defense: " + currentPokedex.base.Defense}</Text>
          <Text style={styles.stat}>{"Sp.Attack: " + currentPokedex.base["Sp. Attack"]}</Text>
          <Text style={styles.stat}>{"Sp.Defense: " + currentPokedex.base["Sp. Defense"]}</Text>
          <Text style={styles.stat}>{"Speed: " + currentPokedex.base.Speed}</Text>
        </View>
        {currentPokedex.Evolutions && <Text style={styles.statHeader}>Evolution Line:</Text>}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10, zIndex: 2 }}>
          {currentPokedex.Evolutions && currentPokedex.Evolutions.map((evo) => {
            return (
              <Pressable onPress={() => { setCurrentPokedex(data.find((poke) => poke.name.english === evo)) }}>
                <Image source={imageSource[evo.toLowerCase()]} />
              </Pressable>
            )
          })}
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    flex: 1,
    backgroundColor: "#676e6e",
    paddingBottom: 30
  },
  container: {
    borderWidth: 2,
    borderColor: "white",
    width: 350,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 15,
    marginBottom: 25,
  },
  dropContainer: {
    marginTop: 35,
    width: 350,
    alignSelf: 'center',
    zIndex: 2
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',

  },
  type: {
    alignSelf: 'center',
    fontSize: 40,
    marginBottom: 20
  },
  statHeader: {
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: 25
  },
  stat: {
    alignSelf: 'center',
    fontSize: 15,
  },
  statContainer: {
    marginBottom: 20
  }
})

export default PokedexScreen