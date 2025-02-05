interface CellProps {
  value: string;
  onClick: (index: number) => void;
  index: number;
}

const Cell: React.FC<CellProps> = ({ value, onClick, index }) => {
  return (
    <div
      className="w-24 h-24 h-sv:h-20 h-sv:w-20 h-mw:w-16 h-mw:h-16 border-2 border-gray-800 text-center text-4xl flex items-center justify-center cursor-pointer hover:bg-gray-200"
      onClick={() => onClick(index)}
    >
      {value}
    </div>
  );
};

export default Cell;
