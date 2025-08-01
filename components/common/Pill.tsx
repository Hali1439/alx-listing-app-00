import { MouseEventHandler } from 'react';

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;