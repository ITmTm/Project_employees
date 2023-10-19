import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
	return (
		<ul className='app-list list-group'>
			<EmployeesListItem name='Anthony S.' salary={1500}/>
			<EmployeesListItem name='Timur M.' salary={2000}/>
			<EmployeesListItem name='Vildan F.' salary={2300}/>
		</ul>
	);
}

export default EmployeesList;