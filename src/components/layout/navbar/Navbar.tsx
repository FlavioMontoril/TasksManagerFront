import { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "./NavLink"
import { IconHome, IconList, IconPlus, IconSearch, IconMenu, IconX } from "@tabler/icons-react"

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    const navOptions = [
        { to: "/", icon: <IconHome size={18} />, text: "Home" },
        { to: "/tasks", icon: <IconList size={18} />, text: "Tasks" },
        { to: "/create", icon: <IconPlus size={18} />, text: "Create Task" },
        { to: "/search", icon: <IconSearch size={18} />, text: "Search" },
    ]

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-blue-600">PlanIt</Link>
                    <div className="hidden md:flex space-x-4">
                        {
                            navOptions.map((option, i) => {
                                return (
                                    <NavLink
                                        key={`key-${i}`}
                                        to={option.to}
                                        icon={option.icon}
                                        text={option.text}
                                    />
                                )
                            })
                        }

                    </div>

                    <button
                        onClick={handleToggleMobileMenu}
                        className="md:hidden text-gray-500"
                    >
                        {!isMobileMenuOpen ? <IconMenu size={24} /> : <IconX size={24} />}
                    </button>
                </div>

                {
                    isMobileMenuOpen && (
                        <div
                            className="md:hidden py-4"
                        >
                            <div
                                className="flex flex-col space-y-2"
                            >
                                {
                                    navOptions.map((option) => {
                                        return (
                                            <NavLink
                                                to={option.to}
                                                icon={option.icon}
                                                text={option.text}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}