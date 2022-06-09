import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  //component setup part
  //this the view part of react
  return (
    // the following block of code is JSX
    <div>
      <h1>My Hacker Stories </h1>
      {/* in jsx attributes have different names from html e.g htmlFor */}
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" />

      <hr />
      {/* render the list items here*/}
      <ul>
        {list.map(function (item) {
          return (
            <li
              key={item.objectID}>{item.title}
              <span>
                <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
            </li>);
        })}
      </ul>

    </div>
  );
}

export default App;

// const welcome = {
//   greeting: 'hey',
//   title: 'React',
// };


// function App() {
//   return (
//     // the following block of code is JSX
//     <div>
//       <h1>
//         {welcome.greeting} {welcome.title}
//       </h1>
//       {/* in jsx attributes have different names from html e.g htmlFor */}
//       <label htmlFor='search'>Search: </label>
//       <input id="search" type="text" />
//     </div>
//   )

// }

// export default App;