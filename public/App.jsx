function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name = "Will"/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

//
// function tick() {
//   const element = (
//     <div>
//       <h1>Hi everyone</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//
//   var name =(
//     <div>
//     <h1>Chào bạn, {name}</h1>
//
//     </div>
//   );
//   // highlight-next-line
//   ReactDOM.render(
//     element,
//
//     document.getElementById('root')
//   );
//
// }
//
// setInterval(tick, 1000);
