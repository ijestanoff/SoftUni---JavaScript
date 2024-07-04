//Get root HTML Element
const rootHtmlElement = document.getElementById('root');

//Initilize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element
// const headingReactElement = <h1>Hello FSX from React</h1>;

// const secondHeadingReactElement = <h2>JSX is Awesome</h2>;


const headingReactSectionElement = (
<header>
    <h1>Hello FSX from React</h1>
    <h2>JSX is Awesome</h2>
    <p>Lorem10</p>
</header>
);


//Render content
rootReactElement.render(headingReactSectionElement);