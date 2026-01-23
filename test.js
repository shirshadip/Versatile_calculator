fetch("http://127.0.0.1:8000/add?a=5&b=3")
  .then(res => res.json())
  .then(data => {
    document.getElementById("hello").innerHTML="hello";
  });
