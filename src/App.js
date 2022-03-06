import './App.css';

function App() {

  const youtube = "https://www.youtube.com/channel/UCcIywoxb-SoP1m0zrc7qV7A";
  const twitter = "https://twitter.com/fiveminutecodes";
  const github = "https://github.com/fiveminutecode";

  return (
    <div className="content">
      <div className="text-box">
        <h1><span>🧑‍💻</span> Five Minute Code</h1>
        <div className="links">
          <a href={youtube}>YouTube</a>
          <p>•</p>
          <a href={twitter}>Twitter</a>
          <p>•</p>
          <a href={github}>GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
