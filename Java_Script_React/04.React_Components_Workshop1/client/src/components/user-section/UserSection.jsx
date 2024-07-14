import { useEffect, useState } from 'react';
import Search from '../search/Search';
import Pagination from './user-list/pagination/Pagination';
import UserList from './user-list/UserList';
import UserAdd from './user-add/UserAdd';
import UserDetails from './user-details/UserDetails';
import UserDelete from './user-delete/UserDelete';
import NoUsers from '../../../no-user/NoUser';
import NoRecord from '../no-record/NoRecord';
import FailedToFetch from '../failed-to-fetch/FailedToFetch';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [showNoRecord, setShowNoRecord] = useState(false);
    const [showNoUser, setShowNoUser] = useState(false);
    const [showFailedToFetch, setShowFailedToFetch] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const usersResult = Object.values(result);
                setUsers(usersResult);
                if (showFailedToFetch) {
                    setShowFailedToFetch(false);
                }
            } catch (error) {
                //alert(error.message);
                if (!showFailedToFetch) {
                    setShowFailedToFetch(true);
                }
            } finally {
                setIsLoading(false);
            }
        })();

    }, []);

    const addUserSaveHandler = async (e) => {
        e.preventDefault(); // prevent refresh

        setIsLoading(true); //start spinner

        //get user data
        const formData = new FormData(e.currentTarget);
        const userUnorderData = { ...Object.fromEntries(formData) };
        const userData = {
            firstName: userUnorderData.firstName,
            lastName: userUnorderData.lastName,
            email: userUnorderData.email,
            phoneNumber: userUnorderData.phoneNumber,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            imageUrl: userUnorderData.imageUrl,
            address: {
                country: userUnorderData.country,
                city: userUnorderData.city,
                street: userUnorderData.street,
                streetNumber: userUnorderData.streetNumber,
            }
        };

        //make post request
        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const createdUser = await response.json();

        setUsers(oldUsers => [...oldUsers, createdUser]); // update local state

        setShowAddUser(false); // close modal

        setIsLoading(false); // stop spinner
    };

    const userDetailsClickHandler = (userId) => {
        setShowUserDetailsById(userId);
        console.log(users);
    };

    const userDeleteClickHandler = (userId) => {
        setShowUserDeleteById(userId);
    };

    const userDeleteHandler = async (userId) => {
        // Delete request to server
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE',
        });

        // Delete from local state
        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

        setShowUserDeleteById(null); // Close modal
    };

    const searchHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchData = { ...Object.fromEntries(formData) };
        setSearchValue(searchData.search);
        setSearchCriteria(searchData.criteria);
    };

    const searchFilter = () => {
        let searchedUsers = [];
        if (!searchValue) {
            return users;
        }
        if (searchCriteria) {
            searchedUsers = users.filter(user => user[searchCriteria].includes(searchValue));
        } else {
            searchedUsers = users.filter(user =>
                Object.values(user).some(value =>
                    value.toString().includes(searchValue)
                )
            );
        }
        if (!searchedUsers.length && !showNoRecord) {
            setShowNoRecord(true);
        }
        if (searchedUsers.length && showNoRecord) {
            setShowNoRecord(false);
        }
        console.log(searchedUsers.length);
        return searchedUsers;
    };

    const searchClearClickHandler = (e) => {
        setSearchValue('');
        e.currentTarget.parentElement.children[0].value = '';
    };

    return (
        <>
            <section className="card users-container">

                <Search
                    onSearch={searchHandler}
                    // onSelect={(e) => setSearchCriteria(e.currentTarget.value)}
                    showSearchClearBtn={searchValue.length > 0}
                    onSearchClearClick={searchClearClickHandler}
                //searchValue={searchValue}
                />

                <UserList
                    users={searchFilter()}
                    onUserDetailsClick={userDetailsClickHandler}
                    onUserDeleteClick={userDeleteClickHandler}
                    isLoading={isLoading}
                />

                {showNoRecord && <NoRecord />}
                {showFailedToFetch && <FailedToFetch />}
                {showNoUser && <NoUsers />}

                {showAddUser && (
                    <UserAdd
                        onClose={() => setShowAddUser(false)}
                        onSave={addUserSaveHandler}
                    />
                )}

                {showUserDetailsById && (
                    <UserDetails
                        user={users.find(user => user._id === showUserDetailsById)}
                        onClose={() => setShowUserDetailsById(null)}
                    />
                )}

                {showUserDeleteById && (
                    <UserDelete
                        onClose={() => setShowUserDeleteById(null)}
                        onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                    />
                )}

                <button className="btn-add btn"
                    onClick={() => setShowAddUser(true)}>
                    Add new user
                </button>

                <Pagination />
            </section>
        </>
    );
}