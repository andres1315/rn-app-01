import { Text, FlatList } from 'react-native'
import { ReposityItem } from './RepositoryItem'
import { useRepositories } from '../hooks/useRepositories'

export const RepositoryList = () => {
  const { repositories } = useRepositories()
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
