/* Version: 1.0.0 */
import { useEffect, useState } from 'react'
import './ProgressLoader.css'

export default function ProgressLoader({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setProgress(0);
      }, 500);
      return () => clearTimeout(timer);
    }

    setProgress(10);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + Math.random() * 30;
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div
      className="progress-loader"
      style={{
        width: `${progress}%`,
        opacity: progress > 0 && progress < 100 ? 1 : 0,
      }}
    ></div>
  );
}
