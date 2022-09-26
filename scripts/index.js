


const meta = async () => await fetch('https://api.github.com/meta')
          .then((response) => response.json())
          .then((data) => {
            //this.todos = data.slice(0, 10);
          });

function request() {
    return {
      todos: [],
      get: []
      
    };
  }
