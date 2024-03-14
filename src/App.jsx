import Header from "./components/Header";
import Layout from "./components/Layout";
import Books from "./components/Books";
import ReadingList from "./components/ReadingList";
import { BooksProvider } from "./context/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Header />
        <Layout>
          <Books />
          <ReadingList />
        </Layout>
      </BooksProvider>
    </>
  );
}

export default App;
