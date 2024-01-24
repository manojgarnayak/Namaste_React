import React from 'react';
import ReactDOM from 'react-dom/client'

//React Element 
const jsxHeading = <h1 className='heading'>JSX Heading</h1>

//React functional Components
const element = <span>React Element</span>

const title =  (
    
    <h1>{element} This is the title</h1>
);

//
const HeadingComponent = () => (
    <div>
        {title}
        <h1 className='heading'>Namaste Manoj Garnayak</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);