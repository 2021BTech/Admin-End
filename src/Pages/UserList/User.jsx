import "./User.css";

//data
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../../Dummydata';
//icon
import { DeleteOutline } from '@material-ui/icons';
//Link
import { Link } from "react-router-dom";
//hook
import { useState } from 'react'

const User = () => {

  //delete function state hook
  const [data, setData] = useState(userRows)
  const handleDelete = (id)=> {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      renderCell: (params)=> {
        return(
          <div className='userListUser'>
            <img className='userlistimg' src={params.row.Avatar} alt="" />
            {params.row.firstName}
          </div>
        )
      }
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction  Volume',
      type: 'number',
      width: 170,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params)=> {
        return(
          <>
          <Link to={"/user/" + params.row.id}> 
            <button className='userListEdit'> Edit </button>
          </Link>
            <DeleteOutline className='userListDelete' onClick={ ()=>handleDelete(params.row.id)}/>
          </> 
        )
      }
    },
  ];
  
  return (
    <div className='userList'>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        />
    </div>
  );
}
export default User
