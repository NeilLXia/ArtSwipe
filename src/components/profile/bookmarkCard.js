import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  Image,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import BookmarkButton from './bookmarkButton';
import { TEXT, SUBTEXT } from '../../constants/Fonts.js';
import TimeRemaining from '../../scripts/helperFunctions/Timer';
import * as firestoreGeneric from '../../server/fs-generic';

const styles = StyleSheet.create({
  cardContainer:{
    // backgroundColor: 'grey',
    width: '100%',
    height: 120,
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'grey',
    width: 75,
    height: 75,
    margin: 20,
    marginRight: 0,
  },
  image: {
    flex: 1
  },
  textContainer: {
    width: 200,
    height: 76,
    margin: 20,
  },
  bookmarkContainer: {
    // backgroundColor: 'grey',
    justifyContent: 'center',
  }
})

const BookmarkCard = ({ item, navigation }) => {
  return(
  <View style={styles.cardContainer}>
    <View style={styles.iconContainer}>
      <Image
        style={styles.image}
        source={{uri: item.image}}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.TEXT, { fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ fontSize: 12, fontWeight: 'bold'}}>Now: {item.bidPrice}</Text>
      <Text style={{ fontSize: 10 }}>You bid: {item.bidIncrement}</Text>
      <Text style={{ fontSize: 13, fontWeight: 'bold'}}>Time left:</Text>
      <View>
        {TimeRemaining(item)}
      </View>
    </View>
    <View style={styles.bookmarkContainer}>
      <BookmarkButton item={item}/>
    </View>
  </View>);
};

BookmarkCard.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BookmarkCard;