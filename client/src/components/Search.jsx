import searchIcon from "../Icons/Icons";

const Search = () => {
    return (
        <div className="relative mr-6 my-2">
            <form >
                <input
                    type="search"
                    className="bg-purple-white shadow rounded border-0 p-3"
                    placeholder="Search"
                />
            </form>
            <div className="absolute right-0 top-0 mt-4 mr-4 text-purple-lighter" >
                {searchIcon}
            </div>
        </div>
    );
};

export default Search