import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";


export function Home() {

  function handleAddParticipant() {
    return console.log("Adicionado")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 21 de Janeiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}