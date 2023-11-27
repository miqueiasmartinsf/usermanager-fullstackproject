import styles from  './Table.module.css'

import React, { ReactElement,} from 'react'
import {useState, useEffect, useContext} from 'react'

//ReactIcons 
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

//Context
import { userContext } from '../../context/userContext';

//Types
import { User } from '../../types/userType';
import { userInfo } from '../../types/userInfo';

const Table = ():ReactElement => {

    const{users,addUsers} = useContext(userContext);
    const[editState,setEditState] = useState<boolean>(false);
    const[currentUserEdit,setCurrentUserEdit] = useState<User|null>();

    async function fetchUsers(){
        const res = await fetch('http://localhost:3000/users');
        const data = await res.json();
        addUsers(data);
    }


    useEffect(() => {
        fetchUsers();
    },[]);

    const deleteUser = async(id:number) => {
        const res = await fetch(`http://localhost:3000/users/${id}`,{method:'DELETE'});
        const data = await res.json();
        console.log(data);

        fetchUsers();
    }
 
    const updateUser = async(user:User) => {

        const userData:userInfo = {
            name:editName,
            email:editEmail,
            phone:parseFloat(editPhone)
        }


        let params:{method:string,body:BodyInit,headers:Headers} = {
            method:'POST',
            body:JSON.stringify(userData),
            headers:new Headers({'content-type': 'application/json'})
        }


        const res = await fetch(`http://localhost:3000/users/${user.id}`,{method:'PUT'});
        const data = await res.json();
        console.log(data);

        fetchUsers();
    }


    //User edit States
    const[editName,setEditName] = useState<string>('');
    const[editEmail,setEditEmail] = useState<string>('');
    const[editPhone,setEditPhone] = useState<string>('');

 
    return(
        <div className={styles.table_container}>

            {currentUserEdit && 
                <div className={styles.fade}>
                    <div className={styles.modal}>
                        <div className={styles.modal_header}>
                            <h1>Editar Usuário</h1>
                            <button onClick={() => {setCurrentUserEdit(null)}}>Cancelar</button>
                        </div>
                        <hr />
                        <div className={styles.modal_body}>
                            <input type="text" name="" id="" placeholder='Name' value={editName} onChange={(e) => {setEditName(e.target.value)}}/>
                            <input type="text" name="" id="" placeholder='Email' value={editEmail} onChange={(e) => {setEditEmail(e.target.value)}}/>
                            <input type="text" name="" id="" placeholder='Phone' value={editPhone} onChange={(e) => {setEditPhone(e.target.value)}}/>
                        </div>
                        <div className={styles.modal_footer}>
                            <button onClick={() => updateUser({id:currentUserEdit.id,name:editName,email:editEmail,phone:editPhone})}>Salvar</button>
                        </div>
                    </div>
                </div>}

            <table className={styles.user_table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Fone</th>
                        <th className={styles.edit}></th>
                        <th className={styles.delete}></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user:User,index):React.ReactNode => {
                        return(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className={styles.edit} onClick={() => {setCurrentUserEdit(user)}}><FaEdit /></td>
                                <td className={styles.delete} onClick={() => deleteUser(user.id)}><FaRegTrashAlt /></td>
                            </tr>
                        )
                    })}
                </tbody> 
            </table>
        </div>
    )
}

export default Table 