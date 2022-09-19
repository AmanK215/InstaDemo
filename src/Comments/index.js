import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, TextInput, Keyboard, TouchableOpacity, SafeAreaView, Platform } from "react-native";
import { connect } from "react-redux";
import { Images } from "../images";
import { addComment } from "../store/ProfileReducer/action";
import { bindActionCreators } from 'redux';
import get from "lodash/get";
import moment from 'moment';

const Comments = props => {

  const { route, comment_list, navigation  } = props
  const { item, profile_id } = route.params;
  const [textVal, setTextVal] = useState(() => '');

  const [currentTime, setCurrentTime] = useState(moment().calendar());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().calendar());
    }, 1000);
  }, [currentTime]);

  const comObj = {
    profile_id: profile_id,
    pic: 'PROFILE_PIC',
    text: textVal,
    time: new Date()
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 16, marginHorizontal: 16, justifyContent: 'space-between'}}>
      <FlatList
        data={comment_list}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }}/>}
        renderItem={(row) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ height: 30, width: 30, borderRadius: 50, marginEnd: 8 }}
                source={Images[row.item['pic']]}
              />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ fontWeight: '600', marginEnd: 8, color: 'black' }}>
                    {get(row, 'item.profile_id', '')}
                  </Text>
                  <Text style={{ color: 'black', flex: 1 }}>
                      {get(row, 'item.text', '')}
                  </Text>
                </View>
                <Text style={{ color: 'black' }}>
                  {moment(get(row, 'item.time', new Date())).local().startOf("seconds").fromNow()}
                </Text>
              </View>
            </View>
          )
        }}
      />
      <View>
      <View style={{borderTopWidth: 1, marginBottom: Platform.OS === 'ios' ? 16 : 0, borderColor: '#D9D9D9', marginHorizontal: -16}}/>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 30, width: 30, borderRadius: 50, marginEnd: 8 }}
            source={Images['PROFILE_PIC']}
          />
          <TextInput 
            style={{ maxHeight: '90%', flex: 0.9, color: 'black'}}
            value={textVal}
            
            placeholder={`comment as ${profile_id} `}
            placeholderTextColor={'#737373'}
            autoFocus={true}
            onSubmitEditing={() => { 
              Keyboard.dismiss();
              props.actions.addComment({
                item,
                profile_id,
                comObj
              });
              setTextVal('')
            }}
            onChangeText={text => {
              setTextVal(text);
            }}
          />
        </View>
        <TouchableOpacity 
          onPress={() => { 
            Keyboard.dismiss();
            props.actions.addComment({
              item,
              profile_id,
              comObj
            });
            setTextVal('')
          }}
        >
          <Text style={{ color: 'blue' }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )

};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(
          {
            addComment
          },
          dispatch
      )
  };
};

const mapStateToProps = (state, props) => {
  const { route } = props
  const { item, profile_id } = route.params
  let likeDataList = state.profile[`${profile_id}`]['likeData'];
  let likeVal = likeDataList.find((likeData) => likeData.id === item.id)
  return {
    comment_list: likeVal.coments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);