  function component() {
    const element = document.createElement('div');

    element.innerHTML = "FE coding test!";

    return element;
  }

  document.body.appendChild(component());