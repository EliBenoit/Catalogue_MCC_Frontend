// package
import React, { useEffect, useState } from "react";

// component
import RowTemplate from "./RowTemplate";
import { Input, SelectPicker } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import "./catalogue.css"

// data
import fakeData from './fakeData.json';

const kindType =[
    {
        label: "Aucun filtrer",
        value: "Aucun filtrer",
    },
    {
        label: "Autobiographie",
        value: "Autobiographie",
      },
      {
        label: "Polar",
        value: "Polar",
      },
      {
        label: "Enfant",
        value: "Enfant",
      },
      {
        label: "Science-fiction",
        value: "Science-fiction",
      },
      {
        label: "Aventure",
        value: "Aventure",
      }
]

const Catalogue = () => {
    const [filterData, setFilterData] = useState(fakeData.books);
    const [dataToMap, setDataToMap] = useState(filterData);

    function filterByKind(value){
        if (value ==="Aucun filtrer"){
            setFilterData(fakeData.books)
        }
        else {
            const filteredBook = fakeData.books.filter( book => book.kind.includes(value))
            console.log(filteredBook)
            setFilterData(filteredBook)
        }
    }
    
    function searchBook(value){
       const searchDataResult = fakeData.books.filter(book => book.title.includes(value));
       setDataToMap(searchDataResult);
    };
    
    useEffect(() => {
        setDataToMap(filterData)
    },[filterData])

        return (
    <div className="wrapper-catalogue">
        <div className="action">
        <Input id="search" onChange={searchBook} placeholder="Rechercher un titre d'ouvrage"/>
        <SelectPicker id="filter" cleanable={false} onChange={filterByKind} data={kindType} placeholder="Filtrer par genre"/>
        </div>
       {dataToMap !== {} && (dataToMap.map((data, index) => <RowTemplate key={index} bookData={data} />))}
       {dataToMap === {} && (<p className="empty">Aucun livre ne semble correspondre</p>)}
    </div>
    )
}

export default Catalogue;