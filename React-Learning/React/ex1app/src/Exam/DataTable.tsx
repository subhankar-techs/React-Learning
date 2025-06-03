import {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const DataTableEx = () => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
       setTimeout(() => {
            axios.get('https://dummyjson.com/users')
                .then(response => {
                    setData(response.data.users);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, 1000);
    }, []);

    const columns: any = [
        {
            name: 'ID',
            selector: (row: {id: number}) => row.id,
            sortable: true,
            width:'4%',
        },
        {
            name: 'Username',
            selector: (row: {username: string}) => row.username,
            sortable: true,
            width:'10%',
        },
        {
            name: 'State',
            selector: (row: {address:{state: string}}) => row.address?.state,
            sortable: true,
            width:'10%',
        },
        {
            name: 'City',
            selector: (row: {address:{city: string}}) => row.address?.city,
            sortable: true,
            width:'10%',
        },
        {
            name: 'Company Name',
            selector: (row: {company: {name: string}}) => row.company?.name,
            width:'15%',
        },
        {
            name: 'Company Country',
            selector: (row: {company: {address: {country: string}}}) => row.company?.address?.country,
            width:'15%',
            wrap: true,
        },
        {
            name: 'Role',
            selector: (row: {role: string}) => row.role,
            width:'10%',
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '50px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    return(
        <>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                paginationPerPage={10}
                highlightOnHover
                pointerOnHover
                fixedHeader
                responsive
            />
        </>
    )
}

export default DataTableEx;