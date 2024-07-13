import HandIcon from './HandIcon';

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}import HandIcon from './HandIcon';
import './HandButton.css';

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;


export default HandButton;
