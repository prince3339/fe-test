  function component() {
    const element = document.createElement('div');

    element.innerHTML = "FE coding test!";

    return element;
  }

  function sum(a: any, b: any) {
    return a + b;
  }

  document.body.appendChild(component());

  export default sum;