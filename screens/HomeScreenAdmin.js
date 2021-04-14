import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';

import PostCard from '../components/PostCard';

const HomeScreenAdmin = ({}) => {
  return (
    <View style={styles.container}>
      <PostCard />
    </View>
  );
};

export default HomeScreenAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
