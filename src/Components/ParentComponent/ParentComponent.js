import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const ParentComponent = () => {

    const testCallBackFn = x => alert(`hello ${x}`)
    return (
        <div>
            <h2>Hello from Parent component</h2>
            <ChildComponent
                name="John"
                age={20}
                isStudent={true}
                skills={["html", "css", "js"]}
                lang={{ english: "excellent", french: "good" }}
                testCallBackFn={testCallBackFn}
            >
                <span>This is a child component</span>
            </ChildComponent>
        </div>
    )
}

export default ParentComponent
