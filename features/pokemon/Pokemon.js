import React, { useRef, useState } from 'react';
import { Pressable, View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native'



const Pokemon = (props) => {


  const imageSource = {
    bulbasaur: require(`../../assets/pokemonSprites/1.png`),
    ivysaur: require(`../../assets/pokemonSprites/2.png`),
    venusaur: require(`../../assets/pokemonSprites/3.png`),
    charmander: require(`../../assets/pokemonSprites/4.png`),
    charmeleon: require(`../../assets/pokemonSprites/5.png`),
    charizard: require(`../../assets/pokemonSprites/6.png`),
    squirtle: require(`../../assets/pokemonSprites/7.png`),
    wartortle: require(`../../assets/pokemonSprites/8.png`),
    blastoise: require(`../../assets/pokemonSprites/9.png`),
    caterpie: require(`../../assets/pokemonSprites/10.png`),
    metapod: require(`../../assets/pokemonSprites/11.png`),
    butterfree: require(`../../assets/pokemonSprites/12.png`),
    weedle: require(`../../assets/pokemonSprites/13.png`),
    kakuna: require(`../../assets/pokemonSprites/14.png`),
    beedrill: require(`../../assets/pokemonSprites/15.png`),
    pidgey: require(`../../assets/pokemonSprites/16.png`),
    pidgeotto: require(`../../assets/pokemonSprites/17.png`),
    pidgeot: require(`../../assets/pokemonSprites/18.png`),
    rattata: require(`../../assets/pokemonSprites/19.png`),
    raticate: require(`../../assets/pokemonSprites/20.png`),
    spearow: require(`../../assets/pokemonSprites/21.png`),
    fearow: require(`../../assets/pokemonSprites/22.png`),
    ekans: require(`../../assets/pokemonSprites/23.png`),
    arbok: require(`../../assets/pokemonSprites/24.png`),
    pikachu: require(`../../assets/pokemonSprites/25.png`),
    raichu: require(`../../assets/pokemonSprites/26.png`),
    sandshrew: require(`../../assets/pokemonSprites/27.png`),
    sandslash: require(`../../assets/pokemonSprites/28.png`),
    'nidoran-f': require(`../../assets/pokemonSprites/29.png`),
    nidorina: require(`../../assets/pokemonSprites/30.png`),
    nidoqueen: require(`../../assets/pokemonSprites/31.png`),
    'nidoran-m': require(`../../assets/pokemonSprites/32.png`),
    nidorino: require(`../../assets/pokemonSprites/33.png`),
    nidoking: require(`../../assets/pokemonSprites/34.png`),
    clefairy: require(`../../assets/pokemonSprites/35.png`),
    clefable: require(`../../assets/pokemonSprites/36.png`),
    vulpix: require(`../../assets/pokemonSprites/37.png`),
    ninetales: require(`../../assets/pokemonSprites/38.png`),
    jigglypuff: require(`../../assets/pokemonSprites/39.png`),
    wigglytuff: require(`../../assets/pokemonSprites/40.png`),
    zubat: require(`../../assets/pokemonSprites/41.png`),
    golbat: require(`../../assets/pokemonSprites/42.png`),
    oddish: require(`../../assets/pokemonSprites/43.png`),
    gloom: require(`../../assets/pokemonSprites/44.png`),
    vileplume: require(`../../assets/pokemonSprites/45.png`),
    paras: require(`../../assets/pokemonSprites/46.png`),
    parasect: require(`../../assets/pokemonSprites/47.png`),
    venonat: require(`../../assets/pokemonSprites/48.png`),
    venomoth: require(`../../assets/pokemonSprites/49.png`),
    diglett: require(`../../assets/pokemonSprites/50.png`),
    dugtrio: require(`../../assets/pokemonSprites/51.png`),
    meowth: require(`../../assets/pokemonSprites/52.png`),
    persian: require(`../../assets/pokemonSprites/53.png`),
    psyduck: require(`../../assets/pokemonSprites/54.png`),
    golduck: require(`../../assets/pokemonSprites/55.png`),
    mankey: require(`../../assets/pokemonSprites/56.png`),
    primeape: require(`../../assets/pokemonSprites/57.png`),
    growlithe: require(`../../assets/pokemonSprites/58.png`),
    arcanine: require(`../../assets/pokemonSprites/59.png`),
    poliwag: require(`../../assets/pokemonSprites/60.png`),
    poliwhirl: require(`../../assets/pokemonSprites/61.png`),
    poliwrath: require(`../../assets/pokemonSprites/62.png`),
    abra: require(`../../assets/pokemonSprites/63.png`),
    kadabra: require(`../../assets/pokemonSprites/64.png`),
    alakazam: require(`../../assets/pokemonSprites/65.png`),
    machop: require(`../../assets/pokemonSprites/66.png`),
    machoke: require(`../../assets/pokemonSprites/67.png`),
    machamp: require(`../../assets/pokemonSprites/68.png`),
    bellsprout: require(`../../assets/pokemonSprites/69.png`),
    weepinbell: require(`../../assets/pokemonSprites/70.png`),
    victreebell: require(`../../assets/pokemonSprites/71.png`),
    tentacool: require(`../../assets/pokemonSprites/72.png`),
    tentacruel: require(`../../assets/pokemonSprites/73.png`),
    geodude: require(`../../assets/pokemonSprites/74.png`),
    graveler: require(`../../assets/pokemonSprites/75.png`),
    golem: require(`../../assets/pokemonSprites/76.png`),
    ponyta: require(`../../assets/pokemonSprites/77.png`),
    rapidash: require(`../../assets/pokemonSprites/78.png`),
    slowpoke: require(`../../assets/pokemonSprites/79.png`),
    slowbro: require(`../../assets/pokemonSprites/80.png`),
    magnemite: require(`../../assets/pokemonSprites/81.png`),
    magneton: require(`../../assets/pokemonSprites/82.png`),
    farfetchd: require(`../../assets/pokemonSprites/83.png`),
    doduo: require(`../../assets/pokemonSprites/84.png`),
    dodrio: require(`../../assets/pokemonSprites/85.png`),
    seel: require(`../../assets/pokemonSprites/86.png`),
    dewgong: require(`../../assets/pokemonSprites/87.png`),
    grimer: require(`../../assets/pokemonSprites/88.png`),
    muk: require(`../../assets/pokemonSprites/89.png`),
    shellder: require(`../../assets/pokemonSprites/90.png`),
    cloyster: require(`../../assets/pokemonSprites/91.png`),
    gastly: require(`../../assets/pokemonSprites/92.png`),
    haunter: require(`../../assets/pokemonSprites/93.png`),
    gengar: require(`../../assets/pokemonSprites/94.png`),
    onix: require(`../../assets/pokemonSprites/95.png`),
    drowzee: require(`../../assets/pokemonSprites/96.png`),
    hypno: require(`../../assets/pokemonSprites/97.png`),
    krabby: require(`../../assets/pokemonSprites/98.png`),
    kingler: require(`../../assets/pokemonSprites/99.png`),
    voltorb: require(`../../assets/pokemonSprites/100.png`),
    electrode: require(`../../assets/pokemonSprites/101.png`),
    exeggcute: require(`../../assets/pokemonSprites/102.png`),
    exeggutor: require(`../../assets/pokemonSprites/103.png`),
    cubone: require(`../../assets/pokemonSprites/104.png`),
    marowak: require(`../../assets/pokemonSprites/105.png`),
    hitmonlee: require(`../../assets/pokemonSprites/106.png`),
    hitmonchan: require(`../../assets/pokemonSprites/107.png`),
    lickitung: require(`../../assets/pokemonSprites/108.png`),
    koffing: require(`../../assets/pokemonSprites/109.png`),
    weezing: require(`../../assets/pokemonSprites/110.png`),
    rhyhorn: require(`../../assets/pokemonSprites/111.png`),
    rhydon: require(`../../assets/pokemonSprites/112.png`),
    chansey: require(`../../assets/pokemonSprites/113.png`),
    tangela: require(`../../assets/pokemonSprites/114.png`),
    kangaskhan: require(`../../assets/pokemonSprites/115.png`),
    horsea: require(`../../assets/pokemonSprites/116.png`),
    seadra: require(`../../assets/pokemonSprites/117.png`),
    goldeen: require(`../../assets/pokemonSprites/118.png`),
    seaking: require(`../../assets/pokemonSprites/119.png`),
    staryu: require(`../../assets/pokemonSprites/120.png`),
    starmie: require(`../../assets/pokemonSprites/121.png`),
    mrmime: require(`../../assets/pokemonSprites/122.png`),
    scyther: require(`../../assets/pokemonSprites/123.png`),
    jynx: require(`../../assets/pokemonSprites/124.png`),
    electabuzz: require(`../../assets/pokemonSprites/125.png`),
    magmar: require(`../../assets/pokemonSprites/126.png`),
    pinsir: require(`../../assets/pokemonSprites/127.png`),
    tauros: require(`../../assets/pokemonSprites/128.png`),
    magikarp: require(`../../assets/pokemonSprites/129.png`),
    gyarados: require(`../../assets/pokemonSprites/130.png`),
    lapras: require(`../../assets/pokemonSprites/131.png`),
    ditto: require(`../../assets/pokemonSprites/132.png`),
    eevee: require(`../../assets/pokemonSprites/133.png`),
    vaporeon: require(`../../assets/pokemonSprites/134.png`),
    jolteon: require(`../../assets/pokemonSprites/135.png`),
    flareon: require(`../../assets/pokemonSprites/136.png`),
    porygon: require(`../../assets/pokemonSprites/137.png`),
    omanyte: require(`../../assets/pokemonSprites/138.png`),
    omastar: require(`../../assets/pokemonSprites/139.png`),
    kabuto: require(`../../assets/pokemonSprites/140.png`),
    kabutops: require(`../../assets/pokemonSprites/141.png`),
    aerodactyl: require(`../../assets/pokemonSprites/142.png`),
    snorlax: require(`../../assets/pokemonSprites/143.png`),
    articuno: require(`../../assets/pokemonSprites/144.png`),
    zapdos: require(`../../assets/pokemonSprites/145.png`),
    moltres: require(`../../assets/pokemonSprites/146.png`),
    dratini: require(`../../assets/pokemonSprites/147.png`),
    dragonair: require(`../../assets/pokemonSprites/148.png`),
    dragonite: require(`../../assets/pokemonSprites/149.png`),
    mewtwo: require(`../../assets/pokemonSprites/150.png`),
    mew: require(`../../assets/pokemonSprites/151.png`),
  }

  


  // const sounds = [];
  // soundFiles.forEach((soundFile, index) => {
  //   sounds[index] = new Sound(soundFile, (error) => {
  //     if (error) {
  //       console.log('failed to load the sound', error);
  //       return;
  //     }
  //   });
  // });

  const playSound = (index) => {
    // if (sounds[index]) {
    //   sounds[index].play((success) => {
    //     if (!success) {
    //       console.log('playback failed due to audio decoding errors');
    //     }
    //   });
    // }
    console.log('playing sound')
  };

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const animatedStyle1 = {
    transform: [{ translateX: shakeAnimation }],
  };

  const [elevation, setElevation] = useState(new Animated.Value(10));

  const handlePressIn = () => {
    Animated.timing(elevation, {
      toValue: 8,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(elevation, {
      toValue: 2,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle2 = {
    elevation: elevation,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: elevation },
    shadowOpacity: 0.2,
    shadowRadius: elevation,
  };

  const colorPicker = (color) => {
    switch(color){
        case "grey":
            return "#b8b8b8"
            break
        case "blue":
            return "#38cdf2"
            break
        case 'green':
            return "#32a852"
            break
        case 'red':
            return "#ff432e"
            break
        case 'purple':
            return "#b22eff"
            break
        case 'pink':
            return "#d639db"
            break
        case "brown":
            return "#875d26"
            break
        case "light brown":
            return "#bf7617"
            break
        case 'gold':
            return "#ccc850"
        case 'yellow':
            return "#ebe534"
        default:
            return "#b8b8b8"
    }
}


  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={()=>{props.nav.navigate('Pokedex',(props.pokemon.name.charAt(0).toUpperCase()+ props.pokemon.name.slice(1))) 
        props.close()}}
    >
      <Animated.View style={[styles.div, styles.pokemon, animatedStyle2, {backgroundColor: colorPicker(props.pokemon.background)}]}>
        <TouchableOpacity onPress={() => {
          startShake()
          playSound()
        }}>
          <Animated.View style={[styles.box, animatedStyle1]}>
            <Image source={imageSource[props.pokemon.name]} style={styles.image} />
          </Animated.View>
        </TouchableOpacity>
        <View style={styles.column}>
          <Text style={styles.name}>{props.pokemon.name} </Text>
          <Text style={styles.text}>{`Encounter Method: ${props.pokemon.encountermethod}`}</Text>
          <Text style={styles.text}>{`Encounter Rate: ${props.pokemon.encounterchance}`}</Text>
        </View>

      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create(
  {
    div:{
      borderColor: "black",
      borderWidth: 1
    },
    pokemon: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-between',
      padding: 20,
      margin: 10,
      borderBottomWidth: 0.5,
      alignItems: 'center',
      borderRadius: 10,
      
    },
    image: {
      width: 100,
      height: 100
    },
    column: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 250
    },
    text: {
      padding: 5,
      fontSize:10,
      color: 'white'
    },
    name: {
      fontSize: 30,
      textTransform: 'capitalize',
      color: 'white'
    }
  }
)
export default Pokemon