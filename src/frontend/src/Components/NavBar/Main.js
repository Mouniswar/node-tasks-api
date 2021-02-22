import React from 'react';
import { Button, Icon, Modal, TextInput,Textarea, Checkbox} from 'react-materialize';
import axios from 'axios';

class Main extends React.Component {
    state = {
        title:'',
        description:'',
        hasCompleted: false,
    }

    
    createTodo = (e) => {
        e.preventDefault();
        const data = {
            title:this.state.title,
            description: this.state.description,
            completed:this.state.hasCompleted,
        }

        console.log(data)

        axios.post('http://localhost:8000/tasks', data, {
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        })
            .then((res) => console.log(res))
            .catch((e) => console.log(e))

    }

    render() {
        return (
            <div>
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Create ToDo"
                    id="Modal-0"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    trigger={
                        <Button
                            className="red"
                            floating
                            icon={<Icon>add</Icon>}
                            large
                            fab={{
                                direction:'right'
                            }}
                            node="button"
                            waves="light"
                        />
                    }
                    >
                   <TextInput 
                    id="title"
                    label="Enter Title for Todo"
                    onChange={e =>{
                        console.log(e.target.value)
                        this.setState({title: e.target.value})
                    }}
                   />
                   <Textarea
                        data-length={120}
                        id="Textarea-12"
                        label="Textarea"
                        onChange={(e) => {
                            console.log('Description:', e.target.value)
                            this.setState({description: e.target.value})
                        }}
                    />
                    <Checkbox
                        checked
                        id="Checkbox_3"
                        label="Red"
                        value="Red"
                        onChange={e => {
                            console.log('Has complted: ',e.target.checked)
                            this.setState({hasCompleted: e.target.checked})
                        }}
                    /><br /><br />

                    <Button
                        node="a"
                        style={{
                        marginRight: '5px'
                        }}
                        waves="light"
                        onClick={this.createTodo}
                    >
                        Create ToDo
                    </Button>

                </Modal>



            </div>
        )
    }
}

export default Main