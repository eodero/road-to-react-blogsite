import * as React from 'react';

//--can use JSX to refer to variables or ven functions using curly braces({}) in the html body----//

// const title = 'React';
function getTitle(title) {
  return title;
}
function App() {
  return (
    // the following block of code is JSX
    <div>
      <h1>Hello {getTitle('React')} </h1>
      {/* in jsx attributes have different names from html e.g htmlFor */}
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" />
    </div>
  )

}

export default App;
