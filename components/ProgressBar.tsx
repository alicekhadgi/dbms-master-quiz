import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-indigo-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};