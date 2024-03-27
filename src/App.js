import React from 'react';
import Dashboard from './components/Dashboard';
import MyThemeProvider from './components/Theme'; // Optional for custom theme
import "./App.css";
function App() {
  return (
    <MyThemeProvider> {/* Wrap with theme provider if applicable */}
      <Dashboard />
    </MyThemeProvider>
  );
}

export default App;
