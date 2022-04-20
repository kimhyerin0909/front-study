import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import data from './data';

function App() {
  const list = data.map((data) => {
    return (
      <Content
        key={data.id}
        id={data.id}
        title={data.title}
        date={data.date}
        content={data.content}
        imgUrl={data.img}
        country={data.country}
      />
    );
  })
  return (
    <div className="App">
      <Header />
      <section className='content'>{list}</section>
    </div>
  );
}

export default App;
