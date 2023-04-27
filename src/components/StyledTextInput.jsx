import { StyleSheet, TextInput, View } from 'react-native'

export function StyledTextInput ({ style = {}, ...props }) {
  const inputStyles = {
    ...styles.TextInput,
    ...style
  }
  return (
    <View>
      <TextInput style={inputStyles} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  TextInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  }
})
