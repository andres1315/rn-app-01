import { StyleSheet, TextInput, View } from 'react-native'

export function StyledTextInput ({ style = {}, error, ...props }) {
  const inputStyles = [
    styles.TextInput,
    style,
    error && styles.error
  ]
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
  },
  error: {
    borderColor: 'red'
  }
})
