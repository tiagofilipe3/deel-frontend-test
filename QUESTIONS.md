1. What is the difference between Component and PureComponent? give an
   example where it might break my app
   - The main difference between the two is that PureComponent does a shallow comparison of the props and state on change
   - PureComponent can break your app if you pass down a complex prop, nested objects for example
   

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?
   - ShouldComponentUpdate can block context updates resulting in components and it's children not being updated
   

3. Describe 3 ways to pass information from a component to its PARENT
   - Callback function
   - useContext
   - useReducer/Redux


4. Give 2 ways to prevent components from re-rendering.
   - Use useMemo
   - Use useRef


5. What is a fragment and why do we need it? Give an example where it might
   break my app.
   - Fragment let you wrap components without using extra elements.
   - A fragment can break an app's layout if you have a list of elements from an ui library and uses a fragment to bundle those elements together. The library might add classes to the fragment then it gets removed from the dom since it's a virtual dom element, causing a layout break.


6. Give 3 examples of the HOC pattern
````javascript
//Example 1
function withStyles(Component) {
   const HOC = (props) => {
      const style = { color: 'red' }
      return <Component style={style} {...props} />
   }

   HOC.displayName = 'HOC'
   return HOC
}

const Text = (props) => <p {...props}>Hello World</p>

const StyledText = withStyles(Text)
````

````javascript
//Example 2
function withComplexLogic(Component) {
   const HOC = (props) => {
      const calculatesPi = () => 3.14159265359
      return <Component pi={calculatesPi} {...props} />
   }
   
   return HOC
}

const Text = ({ pi, ...rest }) => <p {...rest}>{pi}</p>

const PiText = withComplexLogic(Text)
````

````javascript
//Example 3
function withLoading(Component) {
   return HOC = ({ isLoading, ...rest }) => {
      if (isLoading) {
         return <p>Loading data...</p>
      }
      
      return <Component {...rest} />
   };
}

...

const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true)
  fetch('https://someapicall/')
          .then(json => json.json())
          .then(data => {
            setIsLoading(false)
  })
})

const DataList = () => {
   <p>Hello world</p>
}

const DataListWithLoading = withLoading(DataList)

return <DataListWithLoading isLoading={isLoading}>
````

7. what's the difference in handling exceptions in promises, callbacks and
   async...await.
   - With Promises you can use ```.catch()```. With callbacks and promises you can use ```try...catch```


8. How many arguments does setState take and why is it async.
- setState takes two arguments, updater and a callback. It is async so it doesn't leave the browser unresponsive with heavy operations.

9. List the steps needed to migrate a Class to Function Component.
- Change from ```class MyComponent {}``` to ```const MyComponent = () => {}```
- Remove the constructor and initialize variables using useState
- Migrate any logic from class lifecycle to useEffect
- Change ```render() {}``` to ```return ()```

10. List a few ways styles can be used with components.
   - Styles can be used in components to:
     - Change color, size, position, alignment
     - Add effects, transitions
     - Add responsiveness through media queries

11. How to render an HTML string coming from the server
    - You can use ```dangerouslySetInnerHTML``` to render HTML to DOM