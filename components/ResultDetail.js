import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name} >{result.name}</Text>
      <Text>
        Puan: {result.rating}, {result.review_count} Değerlendirme{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  images: { 
    width: 200,
    height: 140,
    borderRadius:6,
    marginBottom:5, 
  },
  name:{
    fontWeight:'bold'
  }
});
