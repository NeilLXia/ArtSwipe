import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

const Profile = ({ navigation }) => {
  return (
  <View>
    <Text>Profile will go here</Text>
    <Button
      title="This is what a button that goes to another page looksk like"
      onPress={() => navigation.navigate('Example')}
    />
  </View>);
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;