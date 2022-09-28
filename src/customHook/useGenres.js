function useGenres(selectedGenres){
    if(selectedGenres.length < 1){
        return "";
    }

    const Ids = selectedGenres.map((g) => g.id)

    const stringIds = Ids.reduce((acc , val) => acc + "," + val);

    return stringIds;

}

export default useGenres