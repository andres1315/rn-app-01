import { Text, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'
import { Route, Routes } from 'react-router-native'

const Signin = () => {
  return (
    <Text>Working on it</Text>
  )
}
const notFound = () => {
  return (
    <Text>No exist</Text>
  )
}

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact Component={RepositoryList} />
        <Route path='/signin' exact Component={Signin} />
        <Route path='*' Component={notFound} />
      </Routes>
    </View>
  )
}
