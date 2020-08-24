import React from 'react'

const Course = ({course}) => {

    // Returns sum of all the exercises
    let totalExercises = course.parts.reduce(function(acc, value) { 
        return acc + value.exercises;
    }, 0)

    return(
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            )}
            <h4>Total {totalExercises} exercises in {course.name}</h4>
        </div>
    )
}

export default Course