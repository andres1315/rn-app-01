import { View, StyleSheet, Platform } from 'react-native'
import { RepositoryItemsHeader } from './RepositoryItemsHeader'
import { RepositoryStats } from './RepositoryStats'
import { theme } from '../theme'

export const ReposityItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemsHeader ownerAvatarUrl={repo.ownerAvatarUrl} fullName={repo.fullName} language={repo.language} id={repo.id} styles={styles} description={repo.description} />
      <RepositoryStats {...repo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 15,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purp´le'
    }),
    alignSelf: 'flex-start',
    borderRadius: 6,
    marginVertical: 5,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }

})
