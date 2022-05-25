import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import MyPosts from './posts';

export default function UsersTable() {
    const [usersList, setusersList] = useState([]);
    const [users, setusers] = useState([]);
    const [emailInput, setemailInput] = useState('');
    const [nameInput, setinputName] = useState('');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            if (res.status === 200 && res.ok) {
                return res.json();
            }
        }).then((res) => setusers(res))
    }
        , []);

    useEffect(() => {
        const name = nameInput;
        const list = [];
        users.map((user) => {
            debugger
            if (user.name === name)
                list.push(user)
        })
        setusers(list)
    }
        , [setinputName]);

    useEffect(() => {
        const email = emailInput;
        const list = [];
        users.map((user) => {
            if (user.email === emailInput)
                list.push(user)
        })
        setusers(list)
    }
        , [setemailInput]);



    return (
        <TableContainer component={Paper}>
            <input type="text" value={nameInput} onChange={e => setinputName(e.target.value)} placeholder="search users by name" />
            <input type="text" value={emailInput} onChange={e => setemailInput(e.target.value)} placeholder="search users by email" />
            < Table sx={{ minWidth: 650 }
            } aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">name&nbsp;</TableCell>
                        <TableCell align="right">email&nbsp;</TableCell>
                        <TableCell align="right">company&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.company.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
