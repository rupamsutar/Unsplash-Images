import React from 'react'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;

        console.log(searchValue);
    }
    return (
        <section>
            <h1 className="title">
                unsplash images
            </h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    className="search-input form-input" 
                    name='search' 
                    placeholder='cat' 
                />
                <button className="btn" type='submit'>Search</button>
            </form>
        </section>
    )
}

export default SearchForm