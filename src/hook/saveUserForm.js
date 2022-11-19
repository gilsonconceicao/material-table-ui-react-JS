import { useState } from "react";

export const SaveUserForm = () => {
  const [data, setData] = useState([]);

  const saveUser = async  (nameUser, lastname, age, email) => {
    let userAdding = new Array();

    if (localStorage.hasOwnProperty("userAdding")) {
      userAdding = JSON.parse(localStorage.getItem("userAdding"));
    }

    await userAdding.push({ 
        nameUser, 
        lastname, 
        age,
        email
    });

    setData([...userAdding])

    localStorage.setItem("userAdding", JSON.stringify(userAdding));
  };

  return [saveUser, data, setData];
};
