import React from "react";
import Sidebar from "../Components/Sidebar";
import AdminContext from "../Context/AdminContext";
const AdminProvider = ({ children }) => {
  return (
    <AdminContext.Provider value={{}}>
      <div className="flex">
        <Sidebar />
        <main className="h-screen w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
};

export default AdminProvider;
