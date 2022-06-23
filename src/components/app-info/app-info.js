import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Company's employees</h1>
      <h2>Total: {employees}</h2>
      <h2>Bonus: {increased}</h2>
    </div>
  );
};

export default AppInfo;
