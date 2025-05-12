import { useState, useCallback } from "react";
import Button from './Button';
import Title from './Title';
import Count from './Count';

export default function Parent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000); 
    
    const ageIncrement = useCallback(() => {
        console.log("Age Increment");
        setAge(age + 1);
    }, [age]);

    const salaryIncrement = useCallback(() => {
        console.log("Salary Increment");
        setSalary(salary + 1000);
    }, [salary]);

    return(
        <>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={ageIncrement}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={salaryIncrement}>Increment Salary</Button>
        </>
    )
}