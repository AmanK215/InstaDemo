import React from "react";
import { View, Image, Text } from "react-native";
import { Images } from "../../images";

const PostHeader = props => {

  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <Image
          style={{ width: 40, height: 40, borderRadius: 100, marginEnd: 8 }}
          source={Images['PROFILE_PIC']}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '600', color: 'black' }}>
          random_123
        </Text>
        <Text style={{ color: 'black' }}>
          Bihar, India
        </Text>
      </View>
    </View>
  )
}

export default PostHeader;