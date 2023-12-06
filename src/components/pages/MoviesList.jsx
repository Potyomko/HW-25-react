import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import { fetchBooks } from "service/fetchBooks";

export function MoviesList() {
    const goBack = useNavigate();
    
    return (
        <div>
            <button type='button ' onClick={() => goBack(-1)}>Go back</button>
            <input type="text" />
            <button type='submit'>Search<CiSearch /></button>  
        </div>
    )
}