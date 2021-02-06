import React,{useState} from "react"
import {Form,FormGroup,Input,InputGroup,InputGroupAddon,Button} from "reactstrap"
import {v4} from "uuid"
import { connect } from "react-redux"
import {addTodo} from "../action/todo"


const TodoForm = ({addTodo})=>{

    const [title,setTitle] = useState('')

    const handleSubmit = (e)=>{

        e.preventDefault();
        if(title ===""){
            return alert("Enter a todo ")
        }
        else{

            const todo = {
                title,
                id :v4()
            }
            addTodo(todo);
            setTitle('');
        }
        

    }
    return(
        <Form onSubmit={handleSubmit} mt={8}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                     name = "todo"
                     id="todo"
                     value={title}
                     onChange={e=>setTitle(e.target.value)}
                    >
                        
                    </Input>
                    <InputGroupAddon>
                        <Button color="primary">ADD</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )


}

const mapStateToProps= (state)=>({})
const mapDispatchToProps= (dispatch)=>({
    addTodo : todo =>{
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps,mapDispatchToProps) (TodoForm);