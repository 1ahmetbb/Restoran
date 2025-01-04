import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResult();
  //console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Ucuz Restoranlar"
        results={filterResultsByPrice("₺")}
      />
      <ResultsList
        title="Orta Restoranlar"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="Pahali Restoranlar"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
