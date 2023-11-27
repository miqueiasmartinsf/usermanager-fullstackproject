import styles from './Form.module.css'
import {ReactElement} from 'react'

import { useState } from 'react'

//Types
import { userInfo } from '../../types/userInfo'

const Form = ():ReactElement => {

    const saveUser = async() => {

        const userData:userInfo = {
            name:name,
            email:email,
            phone:parseFloat(phone)
        }

        console.log(JSON.stringify(userData));

        let params:{method:string,body:BodyInit,headers:Headers} = {
            method:'POST',
            body:JSON.stringify(userData),
            headers:new Headers({'content-type': 'application/json'})
        }

        const res = await fetch('http://localhost:3000/users',params);
        const data = await res.json();
        console.log(data);
    }

    const[name,setName] = useState<string>(''); 
    const[email,setEmail] = useState<string>('');
    const[phone,setPhone] = useState<string>('');

    return(
        <div className={styles.form}>
            <div className={styles.input_container}>
                <section>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="" value={name} onChange={(e) => {setName(e.target.value)}} />
                    
                </section>

                <section>
                    <label htmlFor="">E-mail</label>
                    <input type="text" name="" id="" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </section>

                <section>
                    <label htmlFor="">Telefone</label>
                    <input type="text" name="" id="" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                </section>

                <section>
                    <label htmlFor="">Data de Nascimento</label>
                    <input type="date" name="" id=""/>
                </section>
                <button onClick={saveUser}>Salvar</button>
            </div>
        </div>
    )
}

export default Form 
