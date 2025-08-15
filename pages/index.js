import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://<EC2_PUBLIC_IP>:4000/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Next.js + NestJS on AWS</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}
