import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import RegModal1 from './Auth/components/RegModal1';

function MainPage(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="full overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <button type="button" onClick={() => setShowModal(true)}>
          Регистрация
        </button>
        {showModal &&
          createPortal(<RegModal1 onClose={() => setShowModal(false)} />, document.body)}
      </div>
    </div>
  );
}

export default MainPage;
