import { Link } from 'react-router-dom';
import Button from "./Button";
import Search from "./Search";
const API_BASE_URL = import.meta.env.API_URL || "";

const handleClick = () => {
    fetch(`${API_BASE_URL}/logout`)
        .then(result => console.log(result.json()))
        .catch(error => console.log(error))
}

const AdminHeader = () => {
    return (
        <nav className="flex items-center justify-around">
            <Link to='/'>
                <div className="font-bold text-[25px] hover:text-gray-700 cursor-pointer">/home</div>
            </Link>
            <div className='flex items-center justify-center font-bold gap-10 cursor-pointer'>
                <p>Edit About</p>
                <p>Edit Contact</p>
            </div>
            <Search />
            <Button onClick={handleClick} name={"LOGOUT"} />

        </nav>
    )
}

export default AdminHeader
