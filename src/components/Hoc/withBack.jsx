import React from 'react'

const withBack = (WrapComponent) => {
    const newComponent = () => {
        return (
            <div style={{backgroundColor:"red", height:"50px"}}>
                <WrapComponent />
            </div>
        )
    }
    return newComponent;
}

export default withBack;