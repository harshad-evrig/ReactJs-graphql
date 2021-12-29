# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




//import './App.css';

function App() {
  return (
    <>
    <div className=''>
      <input type="text" className='myInput' placeholder='Search project ..' title="Type in a name" />
    </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Source Link</th>
          <th>Documentation Link</th>
          <th>Notes</th>
          <th>Project</th>
          <th>Developer</th> 
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Alfreds Futterkiste</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Alfreds Futterkiste</td>
        </tr>
      </table>
    </>
  );
}

export default App;



import React from "react";
import './App.css';
class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      pro_items: [],
      DataisLoaded: false,
      name:String,
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          pro_items: json,
          DataisLoaded: true,
        });
      })
  }
  render() {
    const { DataisLoaded, pro_items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    const a1 = this.state.name;

    return (
      <div className="header-main">
        <input type="text" className='myInput' onChange={(e) => this.setState({ name: e.target.value })} placeholder='Search project ..' title="Type in a name" />
        <table className="tb">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Source Link</th>
              <th>Documentation Link</th>
              <th>Notes</th>
              <th>Project</th>
              <th>Developer</th>
            </tr>
          </thead>
          <tbody>
            {pro_items.map((items) => (
              <tr>
                
                <td key={items.id}>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.username}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
{this.state.name == items.name ? '' : <></>}
//