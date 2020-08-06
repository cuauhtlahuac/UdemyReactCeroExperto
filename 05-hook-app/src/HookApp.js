import React from 'react';

import CallbackHook from 'component/06-memos/CallbackHook';

const HookApp = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg
										navbar-light bg-light row
										my-md-5 my-sm-3"
    >
      <h1>Hook App</h1>
    </nav>

    <section className="mb-5">
      <CallbackHook />
    </section>
  </div>
);

export default HookApp;
