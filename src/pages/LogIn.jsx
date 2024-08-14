import { Button, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import { FormikInputValue } from '../components/FormikInputValue'
import { LoginSchema } from '../dto/loginSchema'
const initialValues = {
  email: '',
  password: ''
}

export function LogInPage () {
  return (
    <Formik validationSchema={LoginSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder='email' name='email' />
            <FormikInputValue placeholder='password' name='password' secureTextEntry />
            <Button onPress={handleSubmit} title='Ingresar' />
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})
