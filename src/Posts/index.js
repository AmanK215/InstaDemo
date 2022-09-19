import React, { useEffect, useState } from 'react';
import get from 'lodash/get'
import { View, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Images } from '../images';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IncreaseLike, DecreaseLike } from '../store/LikeReducer/action';
import PostHeader from './PostHeader';
import moment from 'moment';

const windowWidth = Dimensions.get('window').width

const Posts = props => {

  const { route, like, navigation, liked, comment_list  } = props
  const { item, profile_id } = route.params
  const comObj = comment_list.length > 0 ? comment_list[0] : {}

  const [currentTime, setCurrentTime] = useState(moment().calendar());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().calendar());
    }, 1000);
  }, [currentTime]);

  const likeIncrease = () => {
    props.actions.IncreaseLike({
      profile_id,
      item
    })
  }

  const decreaseLike = () => {
    props.actions.DecreaseLike({
      profile_id,
      item
    })
  }

  return (
    <View style={{ marginTop: 16, marginHorizontal: 16 }}>
      <PostHeader/>
      <Image
        style={{width: windowWidth-32, height: 400, marginTop: 8}}
        source={Images[item['img']]}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <View style={{ flexDirection: 'row' }}>
          {
            liked ? 
            <TouchableOpacity onPress={decreaseLike}>
              <Image
                resizeMode={'contain'}
                style={{ width: 25, height: 20 }}
                source={Images['LIKED']}
              />
            </TouchableOpacity> :
            <TouchableOpacity onPress={likeIncrease}>
              <Image
                style={{ width: 20, height: 20 }}
                source={Images['LIKE_IMG']}
              />
            </TouchableOpacity>
          }
          <TouchableOpacity style={{ marginStart: 16 }}
            onPress={() => navigation.navigate('Comments', {
              item: item,
              profile_id: profile_id
            })}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={Images['COMMENT']}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginStart: 16 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={Images['SAVE']}
          />
        </TouchableOpacity>
      </View>
      {
        liked ? 
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home') }>
            <Image
              style={{ width: 20, height: 20, borderRadius: 50, marginEnd: 8 }}
              source={Images['PROFILE_PIC']}
            />
          </TouchableOpacity >
          <Text style={{ color: 'black' }}>
            { `Liked By ` }
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home') }>
            <Text style={{ fontWeight: '600', color: 'black' }}>
              You 
            </Text>
          </TouchableOpacity>
          <Text style={{ color: 'black'  }}>
            { ` and ${like - 1} others`}
          </Text>
        </View> :
        <View style={{ marginTop: 8 }}>
          <Text style={{color: 'black'}}>
            { `Liked By ${like} people` }
          </Text>
        </View>
      }
      {
        comment_list.length === 0 ?
        <TouchableOpacity style={{marginTop: 8}}
          onPress={() => navigation.navigate('Comments', {
            item: item,
            profile_id: profile_id
          })}
        >
          <Text style={{ color: 'black' }}>
            No coments
          </Text>
        </TouchableOpacity> :
        <TouchableOpacity style={{marginTop: 8}}
          onPress={() => navigation.navigate('Comments', {
            item: item,
            profile_id: profile_id
          })}
        >
          <Text style={{  color: 'black' }}>
            {`View all ${comment_list.length} comments`}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Text style={{ fontWeight: '600', marginEnd: 8, color: 'black' }}>
              {get(comObj, 'profile_id', '')}
            </Text>
            <Text style={{ color: 'black', flex: 1 }}>
                {get(comObj, 'text', '')}
            </Text>
          </View>
        </TouchableOpacity>
      }
      <Text style={{marginTop: 8, color: 'black'}}>
        {moment(get(item, 'time', new Date())).local().startOf("seconds").fromNow()}
      </Text>

    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(
          {
            IncreaseLike,
            DecreaseLike
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
    like: likeVal.like,
    liked: likeVal.liked,
    comment_list: likeVal.coments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);