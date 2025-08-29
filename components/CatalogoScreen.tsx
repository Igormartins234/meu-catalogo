import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native';
import catalogoData from '../catalago.json';

interface CatalogoItem {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
  sinopse: string;
  posterUrl: string;
}

const MovieCard = ({ item }: { item: CatalogoItem }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.posterUrl }} style={styles.cardImage} />
    <View style={styles.cardText}>
      <Text style={styles.title}>{item.titulo}</Text>

      <View style={styles.row}>
        
        <Text style={styles.sub}>{item.subtitulo}</Text>
      </View>

      <View style={styles.row}>
      
        <Text style={styles.sub}>{item.ano}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sinopse}>{item.sinopse}</Text>
    </View>
  </View>
);

export default function CatalogoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Filmes</Text>

      <ScrollView contentContainerStyle={styles.container}>
        {catalogoData.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 150,
  },
  cardText: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  sub: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 10,
  },
  sinopse: {
    fontSize: 12,
    color: '#ccc',
  },
});
