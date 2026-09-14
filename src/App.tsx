import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ClientProvider } from "@/hooks/useClient";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ClientProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <AppRoutes />
        </BrowserRouter>
      </ClientProvider>
    </I18nextProvider>
  );
}

export default App;