
function tick() {
  const element = (
    <div>
      <h1>Hi everyone</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  var name =(
    <div>
    <h1>Chào bạn, {name}</h1>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(
    element,

    document.getElementById('root')
  );
  // ReactDOM.render(name, document.getElementById('root'));

}

setInterval(tick, 1000);
