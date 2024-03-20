import React, { useEffect, useState } from 'react';
import {
    Box,Input,Select,Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Button,
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';
  import {useDispatch,useSelector} from "react-redux";
  import {startQuiz} from "../Redux/action";
export default function SetUp(){
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    const quizes=useSelector((store)=>store.quizes)

    const categories=["General Knowledge", "Sports", "Geography"]
    const difficulties=["Easy","Medium","Hard"]
    const[name,setName]=useState("");
    const[category,setCategory]=useState("");
    const[difficulty,setDifficulty]=useState("");
    const[number,setNumber]=useState(0);
   
    const handleSubmit=()=>{
        console.log(name,difficulty,category,number);
        dispatch(startQuiz(name,difficulty,category,number))
       setTimeout(()=>{
        console.log(user,quizes)
       },6000)
    }
    return(
        <Flex w="100%" h="100vh" justify="center" alignItems="center">
            <Box w="50%" >
            <Heading mb="1.5em">Set up your Quiz </Heading>
            <FormControl  w="100%">
            <Input my="1em" type='name' placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value);}} />
            <Select my="1em" placeholder='Select Category ' onChange={(e)=>{setCategory(e.target.value);}} >
           { categories && categories.map((cat,index)=>{
            return <option key={index}>{cat}</option>
           })}
            </Select>
            <Select my="1em" placeholder='Select Difficulty' onChange={(e)=>{setDifficulty(e.target.value);}}>
            { difficulties && difficulties.map((diff,index)=>{
            return <option key={index}>{diff}</option>
           })}
            </Select>
            <Input my="1em" type='number' value={number} placeholder="Choose number of Question" onChange={(e)=>{setNumber(e.target.value);}}/>

</FormControl>
<Button bg="#F7418F" color={"white"} my="2em" w="100%" onClick={handleSubmit}>START QUIZ</Button>
        </Box>
        </Flex>
    )
}