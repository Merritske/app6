import logo from './logo.svg';
import './App.css';

//Nieuwe repository maken in Github + in GIT:
//$ mkdir app6

//$ cd app6

//$ git init
//Initialized empty Git repository in C:/Users/Gebruiker/app6/.git/

// ~/app6 (master)
//$ git branch -M main

//~/app6 (main)
//$ git commit -m "setup"
//On branch main

//Initial commit

//nothing to commit (create/copy files and use "git add" to track)

//$ git remote add origin https://github.com/Merritske/app6.git

//$ code .
//nieuwe repository opent in VSCode




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
