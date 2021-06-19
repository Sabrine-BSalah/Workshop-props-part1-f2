import React from 'react'
import PropTypes from 'prop-types'

const ChildComponent = ({ name, age, skills, lang, isStudent, children, testCallBackFn }) => {

    const x = "test call back"

    return (
        <div>
            <h2>Hello from Child component</h2>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>Skills : {skills}</h2>
            <h2>English : {lang.english}</h2>
            <h2>French : {lang.french}</h2>
            {isStudent &&
                <button onClick={() => testCallBackFn(x)}>Click here</button>
            }
            {children}
        </div>
    )
}

export default ChildComponent


/** Default props */
ChildComponent.defaultProps = {
    name: "No name"
}

/** Default props */
ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    skills: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.shape({
        english: PropTypes.string,
        french: PropTypes.string
    })
}