// const App = () => {
//   console.log('Hello from component!');
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   )
// }

// export default App;

// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a + b);

//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} equals {a + b}
//       </p>
//     </div>
//   )
// }

// export default App;

// After compiling the above code it will be returned like this in javascript
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

// Multiple Components

// const Hello = () => {
//     return (
//         <div>
//             <p>Hello World</p>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div>
//             <h1>Greetings</h1>
//             {/* we can use any many times the components in the code  */}
//             <Hello />
//         </div>
//     )
// }

// export default App;

// props: passing data to components

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

const Hello2 = (props) => {
    console.log(props);
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    )
}

const App = () => {
    const name = "Peter";
    const age = 10;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="George" />
            <Hello name="Daisy" />
            <Hello2 name="Maya" age={26 + 10} />
            <Hello2 name={name} age={age} />
        </div>
    )
}

// Wrapping the element to be returned by the component with an empty element

const AppFragment = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

// Do not render objects

const AppRenderObject = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
        {/* wrong way of rendering the object */}
      {/* <p>{friends[0]}</p>
      <p>{friends[1]}</p> */}
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App;