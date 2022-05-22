import "./styles.css";

interface IProps {
  quantity: number;
  onClickAdd: any;
  onClickSub: any;
  idBtnAdd: string;
  idBtnSub: string;
  idQtyText: string;
  className: any;
}

export default function Counter({
  onClickAdd,
  onClickSub,
  quantity,
  idBtnAdd,
  idBtnSub,
  idQtyText,
  className,
}: IProps) {
  return (
    <div className={`counter-container ${className}`}>
      <button id={idBtnSub} onClick={onClickSub} className="counter-btn">
        -
      </button>
      <span className="counter-text" id={idQtyText}>
        {quantity}
      </span>
      <button id={idBtnAdd} onClick={onClickAdd} className="counter-btn">
        +
      </button>
    </div>
  );
}
