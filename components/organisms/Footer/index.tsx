'use client';
import { Button } from '@/components/atoms';
import { setToken } from '@/utils/auth';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const userNameRef = useRef<any>();
  const passwordRef = useRef<any>();

  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await (
      await fetch(`http://localhost:1337/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: userNameRef.current.value,
          password: passwordRef.current.value,
        }),
      })
    ).json();
    if (res.error) {
      setError(res.error.message);
      console.log(error);
      return;
    }
    setToken(res);
    window.location.reload();
  };

  return (
    <footer className="w-full h-24 bg-dark-blue fixed bottom-0">
      <div className="p-4">
        <div className="text-right">
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <input ref={userNameRef} type="text" placeholder="Username" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <Button label={'Login'} />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
