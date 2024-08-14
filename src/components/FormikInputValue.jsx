import { useField } from 'formik'
import { StyledTextInput } from './StyledTextInput'
import { StyledText } from './StyledText'
import { StyleSheet } from 'react-native'

export const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledTextInput value={field.value} error={meta.error} onChangeText={value => helpers.setValue(value)} {...props} />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 15
  }
})
