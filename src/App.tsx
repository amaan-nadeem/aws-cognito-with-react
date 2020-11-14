import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/** Contexts */
import AuthContextProvider from "./contexts/AuthContext";
import AppNavigation from "./navigations/AppNavigation";
function App() {
  return (
    <AuthContextProvider>
      <AppNavigation />
    </AuthContextProvider>
  );
}
export default App;
