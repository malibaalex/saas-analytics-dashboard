import Routes from "./routes";
import ThemeProvider from "./state/theme/theme-provider";
import ToastProvider from "./state/toast/ToastProvider";

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
