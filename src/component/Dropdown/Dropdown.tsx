import "./styles.css";

interface IProps {
  values: Array<{
    id: number;
    label: string;
    value: string;
  }>;
  onChangeDropdown: any;
  id: string;
  className: any;
}

export default function Dropdown({
  values,
  onChangeDropdown,
  id,
  className,
}: IProps) {
  return (
    <div className={className}>
      <label>
        <span>Customer: </span>
        <select className="dropdown-select" id={id} onChange={onChangeDropdown}>
          {values.map((item, index) => {
            return (
              <option
                className="dropdown-option"
                key={item.id}
                value={item.value}
              >
                {item.label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
