import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('/api/message')
      .then(r => r.json())
      .then(data => setMsg(data.message + ' (from instance: ' + (data.instance || 'unknown') + ')'))
      .catch(err => setMsg('Cannot reach backend: ' + err.message));
  }, []);

  return (
    <div className="App">
      <h1>Full Stack App on AWS with ALB</h1>
      <p>{msg}</p>
      <p>Refresh to see ALB distribute requests across backend instances.</p>
    </div>
  );
}

export default App;
