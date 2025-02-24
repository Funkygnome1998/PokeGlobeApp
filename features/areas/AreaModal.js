import { Modal } from "react-native"
import { useEffect } from "react"
import { View } from "react-native-animatable"
import { Button, Header } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import Pokemon from "../pokemon/Pokemon"
import { useState } from "react"

const AreaModal = (props) => {



    useEffect(() => {
        setEncounters(props.location.encounters)
    })
    const [encounters, setEncounters] = useState(props.location.encounters)
    console.log(props.location.encounters)

    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={props.showModal}
            onRequestClose={props.onClose}
            style={{ backgroundColor: "#676e6e", }}
        >
            <Header centerComponent={{ text: props.location.name, style: { color: "white", fontSize: 20 } }} backgroundColor="grey" leftComponent={{ icon: 'map', onPress: () => props.onClose(), color: 'white' }} />
            <ScrollView style={{ backgroundColor: "#676e6e", }}>

                {
                    encounters.map((encounter) => {
                        return (
                            <Pokemon pokemon={encounter} nav={props.nav} close={props.onClose} />
                        )
                    })
                }

            </ScrollView>
        </Modal>
    )
}

export default AreaModal