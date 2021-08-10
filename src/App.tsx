import './App.scss'
import React, { useEffect, useMemo, useState } from 'react'
import Clock from './components/Clock'
import Separator from './components/Separator'

function App() {
  const [date, setDate] = useState(new Date());

  const hours = useMemo(() => {
    let digits = date.getHours().toString();
    return (digits.length === 1 ? '0' + digits : digits).split('').map(d => parseInt(d));
  }, [date]);

  const minutes = useMemo(() => {
    let digits = date.getMinutes().toString();
    return (digits.length === 1 ? '0' + digits : digits).split('').map(d => parseInt(d));
  }, [date]);

  useEffect(() => {
    const interval = setInterval(() =>
      setDate(new Date())
    );
    return () => clearInterval(interval);
  }, [date, setDate]);

  return (
    <div className="app">
      <Clock digit={hours[0]} />
      <Clock digit={hours[1]} />
      <Separator />
      <Clock digit={minutes[0]} />
      <Clock digit={minutes[1]} />
    </div>
  )
}

export default App
