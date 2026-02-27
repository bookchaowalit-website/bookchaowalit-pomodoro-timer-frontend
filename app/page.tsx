'use client'

import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            
            // Play sound or notification here
            if (mode === 'work') {
              setSessions(sessions + 1);
              if ((sessions + 1) % 4 === 0) {
                setMode('longBreak');
                setMinutes(15);
              } else {
                setMode('shortBreak');
                setMinutes(5);
              }
            } else {
              setMode('work');
              setMinutes(25);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [isActive, minutes, seconds, mode, sessions]);

  const reset = () => {
    setIsActive(false);
    if (mode === 'work') {
      setMinutes(25);
    } else if (mode === 'shortBreak') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };

  const setModeAndReset = (newMode: typeof mode) => {
    setMode(newMode);
    setIsActive(false);
    if (newMode === 'work') setMinutes(25);
    else if (newMode === 'shortBreak') setMinutes(5);
    else setMinutes(15);
    setSeconds(0);
  };

  const progress = mode === 'work' 
    ? ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100
    : mode === 'shortBreak'
    ? ((5 * 60 - (minutes * 60 + seconds)) / (5 * 60)) * 100
    : ((15 * 60 - (minutes * 60 + seconds)) / (15 * 60)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">🍅 Pomodoro Timer</h1>
          <p className="text-gray-600 dark:text-gray-300">Focus on what matters</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-8">
          {/* Timer Display */}
          <div className="text-center mb-8">
            <div className="text-8xl font-bold text-gray-900 dark:text-white mb-4 tabular-nums">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ${
                  mode === 'work' ? 'bg-rose-500' :
                  mode === 'shortBreak' ? 'bg-green-500' :
                  'bg-blue-500'
                }`}
                style={{ width: `${100 - progress}%` }}
              />
            </div>
            
            <div className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300">
              {mode === 'work' ? '🎯 Focus Time' : mode === 'shortBreak' ? '☕ Short Break' : '🌴 Long Break'}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition transform hover:scale-105 ${
                isActive 
                  ? 'bg-yellow-500 hover:bg-yellow-600' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isActive ? '⏸ Pause' : '▶ Start'}
            </button>
            <button
              onClick={reset}
              className="px-10 py-4 rounded-xl bg-gray-600 hover:bg-gray-700 text-white font-bold text-lg shadow-lg transition"
            >
              ↺ Reset
            </button>
          </div>

          {/* Session Counter */}
          <div className="text-center">
            <div className="text-gray-600 dark:text-gray-300 mb-4">Sessions completed today</div>
            <div className="flex justify-center gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                    i < sessions 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}
                >
                  {i < sessions && '🍅'}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setModeAndReset('work')}
            className={`p-6 rounded-2xl text-center transition transform hover:scale-105 ${
              mode === 'work' 
                ? 'bg-rose-500 text-white shadow-xl' 
                : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="text-4xl mb-2">🎯</div>
            <div className="font-bold">Focus</div>
            <div className="text-sm opacity-75">25 min</div>
          </button>
          <button
            onClick={() => setModeAndReset('shortBreak')}
            className={`p-6 rounded-2xl text-center transition transform hover:scale-105 ${
              mode === 'shortBreak' 
                ? 'bg-green-500 text-white shadow-xl' 
                : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="text-4xl mb-2">☕</div>
            <div className="font-bold">Short Break</div>
            <div className="text-sm opacity-75">5 min</div>
          </button>
          <button
            onClick={() => setModeAndReset('longBreak')}
            className={`p-6 rounded-2xl text-center transition transform hover:scale-105 ${
              mode === 'longBreak' 
                ? 'bg-blue-500 text-white shadow-xl' 
                : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="text-4xl mb-2">🌴</div>
            <div className="font-bold">Long Break</div>
            <div className="text-sm opacity-75">15 min</div>
          </button>
        </div>
      </div>
    </div>
  );
}
