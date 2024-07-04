const SearchResults = () => {
    return (
        <div className="whitespace-pre-wrap p-6">
            <h1 className="text-6xl font-bold flex items-center justify-center">{post.title}</h1>
            <p className="mt-2 ">{post.body}</p>
        </div>
    )
}

export default SearchResults
