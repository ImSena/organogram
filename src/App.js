import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {

  return (
    <AuthProvider>
      <Header />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
