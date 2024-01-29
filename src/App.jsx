import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Books from "./Components/Books";
import ReadingList from "./Components/ReadingList";
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
