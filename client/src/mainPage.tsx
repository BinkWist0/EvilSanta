import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import RegModal1 from './Auth/components/RegModal1';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function MainPage(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((store: RootState) => store.usersInfo.user);

  useEffect(() => {
    const audio = new Audio();
    audio.src = 'public/Mary - Last Christmas.mp3';
    audio.play();
  }, [Audio]);

  return (
    <div className="full overflow-hidden">
      {user ? (
        <>
          <p>
            В одну кучу складывают подарки, в другую — определенную сумму. У игрока есть три
            варианта: выбрать любой подарок, деньги или пропустить ход, чтобы в конце попытаться
            забрать оставшиеся подарки. В конце участники открывают выбранные подарки, а деньги и
            оставшиеся подарки разыгрываются по жребию.
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <button type="button" onClick={() => setShowModal(true)}>
            Регистрация
          </button>
          {showModal &&
            createPortal(<RegModal1 onClose={() => setShowModal(false)} />, document.body)}
        </div>
      )}
    </div>
  );
}

export default MainPage;
