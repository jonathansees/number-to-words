import React, { useState } from 'react';
import Drawer from './components/Drawer';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Drawer isOpen={isOpen}>
      </Drawer>
    </>
  );
};

export default App;
