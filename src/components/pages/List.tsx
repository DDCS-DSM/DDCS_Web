import * as S from '../../styles/List'
import Banner from '../Banner';
import DeliveryList from '../DeliveryList';
import { useEffect, useState } from 'react';
import { delivery } from '../../types/delivery';

const List = () => {

    const [list, setList] = useState<delivery[]>([{name: "", company:"", recipient: "test", date: "123"}]);
    
    useEffect(()=>{

    },[])

    return(
        <>
        <h1>택배 리스트</h1>
        <DeliveryList lists={list} type={"list"}/>
        </>
    )
}

export default List;