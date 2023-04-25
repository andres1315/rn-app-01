import { View } from 'react-native'
import { StyledText } from './StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

export const RepositoryStats = repo => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars: </StyledText>
        <StyledText align='center'>{parseThousands(repo.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks: </StyledText>
        <StyledText align='center'>{parseThousands(repo.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Review: </StyledText>
        <StyledText align='center'>{repo.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating: </StyledText>
        <StyledText align='center'>{repo.ratingAverage}</StyledText>
      </View>
    </View>
  )
}
