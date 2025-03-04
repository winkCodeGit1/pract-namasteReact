# suman's learning

node v- 20.17.0
npm v- 10.8.2

# Parcel - package
- Zero Config
- Dev Build
- Local Server
- HMR - Hot Module Replacement - Hot reloading
- File Watching Algorithm - written in c++
- Caching
- Image Optimization
- Minification
- Bundling
- Compressing
- consistent Hashing
- code splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- Can be hosted in https
- Tree shaking Algorithm - remove unused code means if they are many functions and some of the functions are not used it will not impact on the performance

//Namaste Food

/\*\*
- Header
- - Logo
- - Nav Items
- Body
- -Search bar
- -Restaturant container
- - - Restaturant card
- - - - IMG
- - - - Name of the restaurant, Star Rating, Cuisine, Delivery time
- Footer
- -copyright
- -Links
- -Address
- -Contact
  \*/

///there are two ways to utilize export

///one is export default var_name- import var_name from pathname

//and export const var_name - import {var_name} from path_name

///React Hooks - is a normal js utility function

//-useState()- used to create state variables in react.
//-useEffect()-

//// For accessing the api of swiggy need to install cors extension in google chrome browser to allow the api to get the data

////Routing in react for web application

- Clinet Side Routing
- Server Side Routing

///component Life Cycle
/\*\*\* Mounting
-constructor
-render method
-component Did Mount

/\*\* Updating
-constructor
-render method
-component Did Mount
-component Did Update

/\*\* Unmounting
-constructor
-render method
-component Did Mount
-component Did Update
-componentWillUnmount - gets called just before the component gets unmount



///when there is multiple child class called then the render gets expand on two child 

//iff there is a state update then it calls the this.sate to update the value and then again it calls the render method where the reconcilation process hits again.


/////to reduce the js file size for better performance and lloading faster we must follow some process to reduce the size of the .js file. there are same processes with different name.

-To break down app into smaller chunks

i.e,
-chunking 
-Dynamic Bundling
-code splitting
-lazy loading
-ondemand loading
-dynamic import


///parcel uses postcss to read tailwind from our code 

///Higher order function - It is a pure function which takes input a component and provides output same component with some extra additional feature without modifying the original code.
//Context api


////Redux toolkit
-All the steps to write how to use and where to use Redux in our application
//Install libraries - Redux toolkit  - @reduxjs/toolkit and react-redux
//Build our own store 
//connect our store to our app 
//Slice create (cart slice)
//dispatch action 
//Reducer function
//read th e data using selector

