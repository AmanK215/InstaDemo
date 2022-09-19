import get from "lodash/get";
import React from "react";
import { FlatList, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Images } from "../../images";

const windowWidth = Dimensions.get('window').width

const ProfileImage = props => {

  const { navigation, data, profile_id } = props

  return(
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={item=> item.id}
      renderItem={(row) => {
        return(
          <TouchableOpacity 
            onPress={() => navigation.navigate('Posts', {
              item: row.item,
              data: data,
              profile_id: profile_id
            })}
          >
            <Image
              style={{ height: 150, width: (windowWidth-16)/3  }}
              source={Images[row.item['img']]}
            />
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default ProfileImage;