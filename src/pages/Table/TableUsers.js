import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";

const TableUsers = () => {
    
  const storageUsers = JSON.parse(localStorage.getItem("userAdding"));
  console.log(storageUsers);

  const columns = useMemo(
    () => [
      {
        accessorKey: "nameUser", //access nested data with dot notation
        header: "Name",
      },
      {
        accessorKey: "lastname",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email", //normal accessorKey
        header: "E-mail",
      },
    ],
    []
  );

  return (
    <div className="container_table">
      {storageUsers ? <MaterialReactTable
        columns={columns}
        data={storageUsers}
        localization={MRT_Localization_PT_BR}
        enableBottomToolbar={false}
      /> : 'Não tem dados'}
    </div>
  );
};

export default TableUsers;
