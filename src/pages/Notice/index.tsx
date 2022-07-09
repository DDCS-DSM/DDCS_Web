import { useParams } from "react-router-dom";
import Id from "./Id";
import Write from "./Write";
import List from "./List";
import * as S from "./styles"

const Notice = () => {

/*
    useEffect(()=>{
        axios.get(`/notice/${id}`)
            .then(res => setNoticeList(res.data))
            .catch(err => {
                alert(`에러. ${err.response.status}`);
                navigate("/");
            })
    },[])*/

    const { id } = useParams();
    
    return(
        <>
            {id ?
                <>
                    {id === "write" ?
                        <Write/>
                        :
                        <Id/>
                    }
                </>
            :
                <List/> 
            }
        </>
    )
}

export default Notice