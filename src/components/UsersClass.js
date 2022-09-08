import React,{Component} from 'react';

class UsersClass extends Component {
    constructor(props){
        super()
        this.state={users:[]};
    }
    componentDidMount(){
        fetch( "https://jsonplaceholder.typicode.com/users").then((data)=>{
            data.json().then((result)=>
            {this.setState({users:result})
                console.log(result);
            })
            }).catch((error)=>{
                console.log(error);
            });
    }
    
    render() { 
        return (
            <>
            
                <h1>Class Users</h1>
                {this.state.users.map((item,index)=>{
                    return(
                        <div key={item.id}>
                            <h1>name:{item.name}</h1>
                            <h2>username:{item.username}</h2>
                            <h3>email:{item.email}</h3>
                            <br/>
                            <hr/>
                        </div>

                    )
                })}
        
            </>
        );
    }
}
 
export default UsersClass;