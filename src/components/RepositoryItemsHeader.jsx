import { Image, View } from 'react-native'
import { StyledText } from './StyledText'

export const RepositoryItemsHeader = ({ ownerAvatarUrl, fullName, description, language, styles, id }) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{id}</StyledText>
        {/*         <StyledText fontWeight='bold' color='secondary'>{fullName}</StyledText> */}
        <StyledText>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}
