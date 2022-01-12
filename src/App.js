import BooksList from "./components/bookslist/BooksList";
import Article from "./components/article/Article";
import data from "./components/data/data";

function App() {
  return (
    <div>
      <BooksList/>
      {data.map(article =>
        <Article articles=
          {{
            key:article.id,
            title:article.title,
            description:article.description
          }} />)
        }
      
    </div>
  );
}
export default App;