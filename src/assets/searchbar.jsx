function SearchBar(){
    return( 
        <input className="bg-[#FFFFFF1A]  border-2 border-[#FFFFFF33] rounded-2xl w-auto flex items-center placeholder-center w- text-center" type="text" onChange={(e)=>{value=e.target.value} }  placeholder="Search City       🔍" />
    )
}

export default SearchBar;