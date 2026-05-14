import { useEffect } from "react";
import HomePage from "@/pages/HomePage";
import env from "@/config/env";
import { ThemeProvider } from "@/features/theme";

const App = () => {
  useEffect(() => {
    document.title = env.appName;
  }, []);

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
