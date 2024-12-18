const headingReact = React.createElement("h1", { id: "heading" }, "Hi,Suman head go for interview prep for react!");


const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'i am h1 tag'), React.createElement('h1', {}, 'i am h1 tag')]), React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, 'i am h2 tag'), React.createElement('h1', {}, 'i am h2 tag')])]);



///jsx code 

const rootReact = ReactDOM.createRoot(document.getElementById('root'));

rootReact.render(parent);