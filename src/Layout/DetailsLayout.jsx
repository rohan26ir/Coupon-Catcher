import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
  return (
    <div>
      <header>
        
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default DetailsLayout;