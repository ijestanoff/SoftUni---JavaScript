//Get root HTML Element
const rootHtmlElement = document.getElementById('root');

//Initilize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element
const headingReactElement = React.createElement('h1',null,'Hello FSX from React');
const secondHeadingReactElement = React.createElement('h2', null, 'JSX is Awesome')


const headingReactSectionElement = React.createElement('header',null, 
    headingReactElement, secondHeadingReactElement);


//Render content
rootReactElement.render(headingReactSectionElement);