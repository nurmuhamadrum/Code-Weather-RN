import * as React from 'react';
import MainNavigator from './src/Helpers/Navigator';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './src/Redux/forecast';

export default function App() {
  return (
    <ApiProvider api={apiSlice}>
      <MainNavigator/>
    </ApiProvider>
  )
}