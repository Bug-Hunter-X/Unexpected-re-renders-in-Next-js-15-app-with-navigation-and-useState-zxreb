```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('About page mounted');
    return () => {
      setMounted(false);
      console.log('About page unmounted');
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```