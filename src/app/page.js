"use client";  
 import React, { useEffect, useState } from "react";
import axios from "axios";

import "./page.module.css";
import CryptoList from "./components/CryptoList.js";
import Pagination from "./components/Pagination.js";

const page = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    async function fetchData(){
      const a = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`
    );
    setCoinsData(a.data) ;
    }

    useEffect( () => {
        fetchData();
    }, [currentPage]);

    //const lastPostIndex = currentPage * postsPerPage;
    //const firstPostIndex = lastPostIndex - postsPerPage;
    //const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={coinsData} /> 
            <Pagination
                totalPosts={100}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default page;
