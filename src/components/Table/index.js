import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableBootstrap from 'react-bootstrap/Table';
import API from "../../utils/API";

export default function Table() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        loadEmployees()
    }, [])

    function loadEmployees() {
        API.getEmployees()
            .then(res => {
                console.log(res.data.results)

                setEmployees(res.data.results)
            }

            )
            .catch(err => console.log(err));
    };

    return (
        <div>

            <TableRow></TableRow>

            <TableBootstrap bordered striped hover>
                <TableHeader />
                <tbody>
                    {employees.map(employee => (
                        <tr>
                            <td className="p-1 align-middle">
                                <img src={employee.picture.large}/>
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
                                {employee.dob.date}
                            </td>
                        </tr>

                    ))}
                </tbody>
            </TableBootstrap>
        </div>
    );
}
