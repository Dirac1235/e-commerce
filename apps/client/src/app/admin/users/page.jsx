"use client";
import User from "@app/client/components/admincomponent/user/user";
import { UserData } from "@app/client/data/admindata/userdata";
import { useEffect, useState } from "react";
import styles from "./Users.module.css";
import { getUsers } from "@app/client/data/user.data";

export default function Users() {
  const [Users, setUsers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    const usersFetcher = async () => {
      const users = await getUsers()
      console.log(users)
      const modifiedUser = users.map((data) => ({
        id: data.id,
        fullname: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        createdAt: data.createdAt
      }))
      setUsers(modifiedUser)
    }
    usersFetcher()
  },[])
  function handleSearchClick() {
    if (searchVal === "") {
      setUsers(UserData);
      return;
    }
    const filterBySearch = UserData?.filter((item) => {
      if (item.fullname.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setUsers(filterBySearch);
  }

  const users = Users?.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        username={user.username}
        phone={user.phone}
        email={user.email}
        totalspending={user.totalspending}
        fullname={user.fullname}
      />
    );
  });

  return (
    <div className={styles.home}>
      <h2 className={styles.name_header}>View Users</h2>
      <div className={styles.users_table}>
        <div className={styles.userheader_container}>
          <div className={styles.search_users}>
            <label htmlFor="users">Search by Full Name :</label>
            <input
              name="users"
              type="text"
              onKeyDown={handleSearchClick}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.users_information_contatiner_light}>
            <p className={styles.small}>Number</p>
            
            <p>Full Name</p>
            <p>Email Address</p>
            <p>Phone Number</p>
            
          </div>
          {users}
        </div>
      </div>
    </div>
  );
}
