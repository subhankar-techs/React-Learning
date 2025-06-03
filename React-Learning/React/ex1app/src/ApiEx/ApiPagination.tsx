import {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const ApiPagination = () => {

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
            name: 'Email',
            selector: (row: {email: string}) => row.email,
            sortable: true,
            width:'20%',
            wrap: true,
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
            name: 'Country',
            selector: (row: {address:{country: string}}) => row.address?.country,
            sortable: true,
            width:'10%',
        },
        {
            name: 'Company Name',
            selector: (row: {company: {name: string}}) => row.company?.name,
            width:'15%',
        },
        {
            name: 'Company Address',
            selector: (row: {company: {address: {address: string}}}) => row.company?.address?.address,
            width:'15%',
            wrap: true,
        },
        {
            name: 'Image',
            selector: (row: {image: string}) => row.image,
            width:'10%',
            cell: (row: {image: string}) => <img src={row.image} alt="User" style={{width: '50px', height: '50px'}} />,
            
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
            <h2 style={{textAlign: 'center'}}>API Pagination Example</h2>
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

export default ApiPagination;