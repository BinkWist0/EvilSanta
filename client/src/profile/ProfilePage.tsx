import React, { useState } from 'react';

function ProfilePage(): JSX.Element {
  const [successMessage, setSuccessMessage] = useState('');

  const handleRandomize = async () => {
    try {
      const response = await fetch('/api/users/randomize', {
        method: 'POST',
      });
      const data = await response.json();

      console.log(data);

      setSuccessMessage('Операция выполнена успешно!');
    } catch (error) {
      console.error('Error during randomization:', error);
      setSuccessMessage('Произошла ошибка при выполнении операции.');
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleRandomize}>Рандомизировать пользователей</button>
    </div>
  );
}

export default ProfilePage;
