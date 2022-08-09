import { Header } from "../components/Header/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { SearchHotelsContextProvider } from "../components/context/SearchHotelsContext/SearchHotelsContextProvider";

export const Stays = () => {
  return (
    <div className="App">
      <SearchHotelsContextProvider>
        <Header />
        <Main />
      </SearchHotelsContextProvider>
      <Footer />
    </div>
  );
};
