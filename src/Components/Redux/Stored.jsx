const Add_Task = "task/add"
const Delete_Task = "task/delete"
const initialstate ={
task: [],
}

const taskReducer = (state = initialstate , action)=>{
    switch (action.type) {
        case Add_Task:
            return{
                ...state,
                task:[...state.task,action.payload]
            }

        case Delete_Task:
            const updatetask = state.task.filter((curtask , index)=>{
                return index !== action.payload;
            })
            return{
                ...state,
                task:[...state.task,updatetask],
            }
           
    
        default:
            return state ; 
    }
};
