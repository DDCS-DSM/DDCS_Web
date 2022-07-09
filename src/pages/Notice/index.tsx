import { useParams } from "react-router-dom";
import Id from "./Id";
import Write from "./Write";
import List from "./List";

const Notice = () => {

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