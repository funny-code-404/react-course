import { Header } from "./componets/header/Header";
import { Main } from "./componets/main/Main";
import { Footer } from "./componets/footer/Footer";
import { config } from "./componets/config";

export const App = () => (
  <>
    <Header menu={config.menu} contact={config.contact} />
    <Main buttonContent={config.buttonContent} mainTitle={config.mainTitle} />
    <Footer footerContact={config.footerContact} />
  </>
);
