import React from 'react';

import TodoApp from 'components/08-use-reducer/TodoApp';

const HookApp = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg
										navbar-light bg-light row
										my-md-5 my-sm-3 ali
                    justify-content-center"
    >
      <h1>Hook App</h1>
    </nav>

    <section className="mb-5">
      <TodoApp />
    </section>
  </div>
);

export default HookApp;
