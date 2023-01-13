import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvideAuth } from "./navigation/auth/ProvideAuth";
import { RouterConfig } from "./navigation/routerConfig";

function App() {
  return (
    <>
      <ProvideAuth>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </ProvideAuth>
    </>
  );
}

export default App;
