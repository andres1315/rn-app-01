import { Text, FlatList } from 'react-native'
import repositories from '../data/repositories'
import { ReposityItem } from './RepositoryItem'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <ReposityItem repo={repo} />
      )}
    />
  )
}
