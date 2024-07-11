import React, { useState } from 'react';
import { Camera, LogOut, Settings, User } from 'lucide-react';

const TestHistory = () => (
    <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Test History</h2>
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Test Type</th>
                    <th className="border p-2">Score</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">Full Test</td>
                    <td className="border p-2">7.5</td>
                    <td className="border p-2">2023-07-01</td>
                    <td className="border p-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Download Report</button>
                    </td>
                </tr>
                <tr>
                    <td className="border p-2">Reading</td>
                    <td className="border p-2">8.0</td>
                    <td className="border p-2">2023-06-15</td>
                    <td className="border p-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Download Report</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default function Dashboard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Camera className="h-8 w-8 text-blue-500" />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Home
                                </a>
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Practice IELTS
                                </a>
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Resources
                                </a>
                            </div>
                        </div>
                        <div className="ml-6 flex items-center">
                            <div className="ml-3 relative">
                                <div>
                                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="" />
                                    </button>
                                </div>
                                {dropdownOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            <User className="inline-block mr-2" size={16} /> Profile
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            <Settings className="inline-block mr-2" size={16} /> Settings
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            <LogOut className="inline-block mr-2" size={16} /> Sign out
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Welcome to Your IELTS Dashboard
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <TestHistory />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}