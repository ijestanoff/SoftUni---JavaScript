//Get root HTML Element
var rootHtmlElement = document.getElementById('root');

//Initilize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element
// const headingReactElement = <h1>Hello FSX from React</h1>;

// const secondHeadingReactElement = <h2>JSX is Awesome</h2>;


var headingReactSectionElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello FSX from React'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is Awesome'
    ),
    React.createElement(
        'p',
        null,
        'Lorem10'
    )
);

//Render content
rootReactElement.render(headingReactSectionElement);