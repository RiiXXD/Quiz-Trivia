
import { getQuiz } from "./action-type"

const intitState={
    quizes:[],
    user:"",
    score:"",
}
export const reducer =(state=intitState,{type,payload})=>{
    switch(type){
        case getQuiz:{
            return{...state,
               quizes:[...payload.data],
                user:payload.name}
        }
        default:
            {
                return state
            }
    }

}