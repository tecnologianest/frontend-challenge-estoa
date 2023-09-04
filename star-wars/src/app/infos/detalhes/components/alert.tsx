"use client"
import { useState, useEffect } from 'react';

interface Message {
    message: string;
}

export default function Alert({ message }: Message) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (message) {
        setIsVisible(true);
  
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 4000);
  
        return () => clearTimeout(timer);
      }
    }, [message]);

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed top-0 right-0 mt-5 mr-5 transition-transform transform opacity-100 scale-100 ease-in-out duration-500`}
    >
      <div className="bg-red-500 text-white p-4 rounded shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
