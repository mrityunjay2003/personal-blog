
export default function Login() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form className='max-w-[400px] w-full mx-auto bg-amber-50 p-4 rounded-md shadow-md'>
                <h2 className='text-4xl font-bold text-center py-6'>LOGIN.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-amber-800 hover:bg-amber-700 text-white '>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    )
}