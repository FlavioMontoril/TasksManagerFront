import React from "react";
import { TaskProvider } from "../../context/useTaskContext";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export const Page: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-blue-50 text-blue-900 flex flex-col "
        >
            <Navbar />
            <main className="flex justify-between items-center mx-auto px-2 py-20 container">
                <TaskProvider>
                    <Outlet />
                </TaskProvider>
            </main>
            <footer className="bg-white shadow-md bottom-0 w-full fixed">
                <div className="container mx-auto p-4 text-center text-blue-600 mt-auto">
                    &copy; 2024 PlanIt. All rights reserved.
                </div>
            </footer>
        </div>
    )
}