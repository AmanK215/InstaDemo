import React from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import { Images } from '../../images'
import styles from "./style";

const ProfileHeader = props => {

  const  no_posts = 27;
  const no_follower = 283;
  const np_following = 356;

  return (
    <View style={{ flexDirection: 'row', marginTop: 16 }}>
      <View>
        <Image
          style={{ width: 80, height: 80, borderRadius: 100, marginEnd: 28 }}
          source={Images['PROFILE_PIC']}
        />
      </View>
      <View style={{ flex: 1 , justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.textStyle}>
            <Text style={{ color: 'black' }}>
              {no_posts}
            </Text>
            <Text style={styles.text}>
              Posts
            </Text>
          </View>

          <View style={styles.textStyle}>
            <Text style={{ color: 'black' }}>
              {no_follower}
            </Text>
            <Text style={styles.text}>
              Followers
            </Text>
          </View>

          <View style={styles.textStyle}>
            <Text style={{ color: 'black' }}>
              {np_following}
            </Text>
            <Text style={styles.text}>
              Following
            </Text>
          </View>
        </View>
        <View>
          <Button
            style={{flex: 1}}
            title={'Follow'}
          />
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileHeader;