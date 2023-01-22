import { Text, TouchableOpacity, View } from "react-native";
import { participantStyles } from "./styles";


export function Participant() {

  function handleRemoveParticipant() {
    
  }

  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>Rodrigo Gonçalves</Text>

      <TouchableOpacity
          style={participantStyles.button}
          onPress={handleRemoveParticipant}
        >
          <Text style={participantStyles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}