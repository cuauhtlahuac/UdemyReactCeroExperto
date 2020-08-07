import React from 'react';

import { Padre } from 'component/07-tarea-memo/Padre';

const HookApp = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg
										navbar-light bg-light row
										my-md-5 my-sm-3"
    >
      <h1>Hook App</h1>
    </nav>

    <section className="mb-5">
      <Padre />
    </section>
  </div>
);

export default HookApp;
