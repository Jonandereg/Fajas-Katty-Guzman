import React, {FunctionComponent} from 'react';

interface TestingProps {myusers:Object[]}

const Testing:FunctionComponent<TestingProps> = ({ myusers }) => {


    return (
        <>
        <div>
        {myusers.map((user:Object)=>{
            return( <h1> {user.firstName} {user.lastName} {user.email}</h1>)
        })}
        </div>
        </>
    )
};


export default Testing