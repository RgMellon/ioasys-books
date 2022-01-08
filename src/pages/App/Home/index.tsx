import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';
import api from '../../../services/api';

export function Home() {
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const response = await api.get('/books', {
        params: {
          page: '1',
          amount: '25',
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return <Text> Home</Text>;
}
