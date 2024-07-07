//Get root HTML Element
var rootHtmlElement = document.getElementById('root');

//Initilize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element
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

//Create component without JSX
function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

var siteContent = React.createElement('div', {}, headingReactSectionElement, React.createElement(Main, { title: 'Best Movies' }));

var siteContentJSX = React.createElement(
    'div',
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: 'Best Movies' })
);

//Render content
rootReactElement.render(siteContentJSX);