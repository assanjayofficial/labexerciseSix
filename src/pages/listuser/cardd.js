import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({Nama, username, Email, Alamat, nomor}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{Nama}</Text>
      <Text style={styles.User}>{username}</Text>
      <Text style={styles.email}>{Email}</Text>
      <Text style={styles.email}>{Alamat}</Text>
      <Text style={styles.email}>{nomor}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,
    marginTop: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});