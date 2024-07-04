const Button = ({ onClick, name }) => {
    return (
        <button onClick={onClick} className="flex items-center justify-center rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-noise border-black text-black font-semibold text">
            {name}
        </button>
    )
}

export default Button
