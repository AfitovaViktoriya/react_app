import React, {useState} from 'react';
import MyModal from '../../components/MyModal/MyModal';
import UserAdd from './UserAdd';
import UserList from './UserList';

const Users = () => {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([
        // {
        //     name: 'Franko',
        //     age: 32,
        //     country: "USA"
        // },
        // {
        //     name: 'Mikolo',
        //     age: 43,
        //     country: "Italy"
        // },
        // {
        //     name: 'Petro',
        //     age: 20,
        //     country: "Russia"
        // },

    ]);

    return (
        <div className='container'>

            <UserList users={users}/>
            <button className="btn btn-secondary"
                onClick={() => setShowModal(true)}
            >
                Add User
            </button>
            <MyModal
                visible={showModal}
                onCancel={() => setShowModal(false)}
                closeBtnShow
            >
                <UserAdd users = {users} setUsers = {setUsers} action = {UserAdd} closeModal={() => setShowModal(false)}/>
            </MyModal>
        </div>
    );
};

export default Users;