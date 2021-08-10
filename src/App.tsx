import './App.scss'
import React, { useEffect, useMemo, useState } from 'react';
import Clock from './components/Clock'
import Separator from './components/Separator'
import { useParams } from 'react-router-dom';
import { Params } from './types/Params';

function App() {
  const [date, setDate] = useState(new Date());
  const { theme }: Params = useParams();

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
    <div className={"app" + (theme ? ` app--${theme}` : "")}>
      <div className="container">
        <Clock digit={hours[0]} />
        <Clock digit={hours[1]} />
        <Separator />
        <Clock digit={minutes[0]} />
        <Clock digit={minutes[1]} />
      </div>
      <p className="attribution">Made by <a href="https://louisgrasset.fr" target="_blank">Louis Grasset</a></p>
    </div>
  )
}

export default App
