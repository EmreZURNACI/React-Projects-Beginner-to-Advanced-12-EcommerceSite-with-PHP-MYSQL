import React from 'react'
import { Outlet } from 'react-router-dom'
function AuthLayout() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 -mt-4">
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-6 py-8 mx-auto lg:py-0">
                <Outlet />
            </div>
        </section>
    )
}

export default AuthLayout