
import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import arr from './data';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');
  const [button, setButton] = useState();


  function handleClick(e) {
    setButton(e.target.delete())
  }
  return (
    <div>

      <div style={{ margin: "30px" }}>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Delete buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.filter((data) => {
              return search.toLowerCase === "" ? data : data.name.toLowerCase().includes(search);
            }).map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.surname}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>
                  <Stack direction='row'>
                    <Button className='deleteBtn' variant='contained' color='error'>Delete</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  );
}

export default App;
