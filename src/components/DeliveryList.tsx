import * as S from '../styles/DeliveryList'
import { delivery } from '../types/delivery'

const Delivery = ({i, type}: {i: delivery, type: string}) => {
    return(
        <li></li>
    )
}

const List = ({lists, type}: {lists: delivery[], type: string}) => {
   return(
        <S.List>
            {lists.map(i => {
                return(
                    <Delivery i={i} type={type}/>
                )
            })}   
        </S.List>  
    )

}

export default List