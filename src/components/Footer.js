import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <footer className="mx-auto max-w-5xl space-y-8 px-4 pt-16 text-xs font-medium text-gray-500">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                    <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-800">Products</h3>
                    <a href="/" className="transition hover:text-gray-900">Todo List</a>
                    <a href="/" className="transition hover:text-gray-900">Product Management</a>
                    <a href="/" className="transition hover:text-gray-900">Git Manager</a>
                    <a href="/" className="transition hover:text-gray-900">Status Reporter</a>
                    <a href="/" className="transition hover:text-gray-900">Email Management</a>
                    <a href="/" className="transition hover:text-gray-900">Responsibilities</a>
                    <a href="/" className="transition hover:text-gray-900">Teams</a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                    <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-800">Resources</h3>
                    <a href="/" className="transition hover:text-gray-900">Technical Support</a>
                    <a href="/" className="transition hover:text-gray-900">Licensing</a>
                    <a href="/" className="transition hover:text-gray-900">Community</a>
                    <a href="/" className="transition hover:text-gray-900">Knowledge Base</a>
                    <a href="/" className="transition hover:text-gray-900">Marketplace</a>
                    <a href="/" className="transition hover:text-gray-900">My Account</a>
                    <a href="/" className="transition hover:text-gray-900">Support Ticket</a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                    <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-800">Learn</h3>
                    <a href="/" className="transition hover:text-gray-900">Certification</a>
                    <a href="/" className="transition hover:text-gray-900">Partners</a>
                    <a href="/" className="transition hover:text-gray-900">Documentation</a>
                    <a href="/" className="transition hover:text-gray-900">Developer Resources</a>
                    <a href="/" className="transition hover:text-gray-900">Purchasing FAQ</a>
                    <a href="/" className="transition hover:text-gray-900">Enterprise services</a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                    <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-800">About Us</h3>
                    <a href="/" className="transition hover:text-gray-900">Company</a>
                    <a href="/" className="transition hover:text-gray-900">Careers</a>
                    <a href="/" className="transition hover:text-gray-900">Events</a>
                    <a href="/" className="transition hover:text-gray-900">Blogs</a>
                    <a href="/" className="transition hover:text-gray-900">Contact</a>
                    <a href="/" className="transition hover:text-gray-900">Security</a>
                    <a href="/" className="transition hover:text-gray-900">Privacy</a>
                    </nav>
            </div>
            <div className="flex flex-col space-y-4 border-t border-gray-200 py-8 sm:items-center sm:justify-between md:flex-row md:space-y-0">
                <p>© 2022 Campfire, Inc.</p>
                <nav className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <a href="/" className="transition hover:text-gray-900">Terms of Service</a>
                    <a href="/" className="transition hover:text-gray-900">Privacy Policy</a>
                    <a href="/" className="transition hover:text-gray-900">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    </div>
  )
}
