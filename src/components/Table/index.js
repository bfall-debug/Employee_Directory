import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableBootstrap from 'react-bootstrap/Table';
import API from "../../utils/API";
import Moment from 'react-moment'
import SearchBar from '../SearchBar'

export default function Table() {

    const [employees, setEmployees] = React.useState([]);
    const [filteredEmployees, setFilteredEmployees] = React.useState(employees);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        loadEmployees();
    },[])

    React.useEffect(() => {
        if (!search) {
            return;
          }

        const list = employees.filter((employee) => {
            if(employee.name.first.includes(search)){
                return true;
            }
        })
        setFilteredEmployees(list)
          

    }, [search])

    function loadEmployees() {
        API.getEmployees()
            .then(res => {
                setEmployees(res.data.results)
                setFilteredEmployees(res.data.results)
            });
    };

    const handleInputChange = event => {
        setSearch(event.target.value);
      };


    return (
        <>
        <div className="searchContainer">
          <SearchBar handleInputChange={handleInputChange} results={search}/>
        </div>
        <div>
            <TableBootstrap bordered striped hover>
                <TableHeader />
                <tbody>
                    {filteredEmployees.map(employee => (
                        <tr>
                            <td className="p-1 align-middle">
                                <img src={employee.picture.large} />
                            </td>
                            <td className="align-middle">
                                {employee.name.first} {employee.name.last}
                            </td>
                            <td className="align-middle">
                                {employee.cell}
                            </td>
                            <td className="align-middle">
                                <a href={employee.email} target="__blank">{employee.email}</a>
                            </td>
                            <td className="align-middle">
                                <Moment format="MM/DD/YYYY">{employee.dob.date}</Moment>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </TableBootstrap>
        </div>
        </>
    );
}
