import React, { useEffect } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileDetails from './ProfileDetails';
import ProfileHeader from './ProfileHeader';
import ProfileImage from './ProfileImage';
import { createPrimaryStore } from '../store/ProfileReducer/action'
import styles from './style'

const ProfileScreen = props => {

  const { navigation } = props;

  const profile_id = "random_123"
  const likeData = [
    {
      id: 1,
      img: 'IMG1',
      like: 10,
      liked: true,
      time: "Mon Sep 18 2022 11:10:21",
      coments: [
        {
          profile_id: 'random_123',
          pic: 'PROFILE_PIC',
          text: "Nice Pic",
          time: "Mon Sep 19 2022 11:10:21"
        }
      ]
    },
    {
      id: 2,
      img: 'IMG2',
      like: 36,
      liked: false,
      time: "Mon Sep 17 2022 11:10:21",
      coments: []
    },
    {
      id: 3,
      img: 'IMG3',
      like: 45,
      liked: false,
      time: "Mon Sep 10 2022 11:10:21",
      coments: []
    },
    {
      id: 4,
      img: 'IMG4',
      like: 17,
      liked: false,
      time: "Mon Sep 08 2022 11:10:21",
      coments: []
    },
    {
      id: 5,
      img: 'IMG5',
      like: 108,
      liked: false,
      time: "Mon Sep 15 2022 11:10:21",
      coments: []
    },
    {
      id: 6,
      img: 'IMG6',
      like: 49,
      liked: false,
      time: "Mon Sep 18 2022 11:10:21",
      coments: []
    },
    {
      id: 7,
      img: 'IMG7',
      like: 38,
      liked: false,
      time: "Mon Sep 14 2022 11:10:21",
      coments: []
    },
    {
      id: 8,
      img: 'IMG8',
      like: 18,
      liked: false,
      time: "Mon Sep 12 2022 11:10:21",
      coments: []
    },
    {
      id: 9,
      img: 'IMG9',
      like: 14,
      liked: false,
      time: "Mon Sep 11 2022 11:10:21",
      coments: []
    }
  ];

  useEffect(() => {
    props.actions.createPrimaryStore({
      profile_id,
      likeData
    })
  }, [profile_id])

  return (
    <SafeAreaView style={{marginHorizontal: 16, flex: 1, marginBottom: 8}}>
      <ProfileHeader/>
      <ProfileDetails/>
      <View style={styles.borderStyle}/>
        <Text style={styles.textStyle}> Call </Text>
      <View style={styles.borderStyle}/>
      <ProfileImage navigation={navigation} data={likeData} profile_id={profile_id}/>
    </SafeAreaView>
  )
}

const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(
          {
            createPrimaryStore
          },
          dispatch
      )
  };
};

const mapStateToProps = (state) => {
  return {
    like: state.likeRdeucer.like
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);