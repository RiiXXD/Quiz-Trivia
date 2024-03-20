import React, { useEffect, useState } from 'react';
import {
    Box, Input, Select, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Heading, Button,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Quiz() {
    const quizes = useSelector((store) => store.quizes);
    const [index, setIndex] = useState(0); 
    const [timer, setTimer] = useState(0); 
    const [totalQuestions, setTotalQuestions] = useState(quizes.length);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);
    useEffect(() => {
        
        if (index >= 0 && index < quizes.length) {
            const difficulty = quizes[index].difficulty;
            const timers = { hard: 10, medium: 20, easy: 30 };
            setTimer(timers[difficulty]); 
        }
    }, [index, quizes]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (index < totalQuestions - 1) {
            setIndex((prevIndex) => prevIndex + 1);
        } else {
            console.log('Quiz concluded');
        }
    }, [timer, index, totalQuestions]);

    const handleNextQuestion = () => {
        if (index < totalQuestions - 1) {
            setIndex((prevIndex) => prevIndex + 1);
            setTimer(0);
        } else {
            console.log('Quiz concluded');
        }
    };
    const handleOptionSelect = (option) => {
        
        setSelectedOption(option);
        const isCorrect = option === quizes[index].correct_answer;
        setFeedback(isCorrect ? 'Correct!' : 'Incorrect');
        
    };

    return (
        <Box>
            <Flex w="100%" justify={"center"} align={"center"}>
            <Button  onClick={() => setIndex((prevIndex) => prevIndex - 1)} disabled={index === 0}><GrPrevious /></Button>
            {quizes && quizes[index] && (
                <Box w="50%">
                    <p>{`Question ${index + 1} of ${totalQuestions}`}</p>
                    <Heading>{quizes[index].question}</Heading>
                    
                    <Box>{timer} seconds remaining</Box>
                </Box>
            )}
            <Button onClick={handleNextQuestion}><GrNext /></Button>
        </Flex>
        <Box>
            <Flex>
            {quizes[index].incorrect_answers.map((option, idx) => (
                        <Button
                        bg={feedback===null?"white":feedback==="Correct!"?"green":"red"} 
                            key={idx}
                            onClick={() => handleOptionSelect(option)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </Button>))}
                        <Button  bg={feedback===null?"white":feedback==="Correct!"?"green":"red"}   onClick={() => handleOptionSelect(quizes[index].correct_answer)}
                            disabled={selectedOption !== null}>{quizes[index].correct_answer}</Button>
            </Flex>
        </Box>
        </Box>
        

    );
}
