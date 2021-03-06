import EmployeeItem from "../employee-item/employee-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((item) => {
    return (
      <EmployeeItem
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        key={item.id}
        onDelete={() => onDelete(item.id)}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRise={() => onToggleRise(item.id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
