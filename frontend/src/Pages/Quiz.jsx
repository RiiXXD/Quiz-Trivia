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

import { useSelector,useDispatch } from 'react-redux';
  import { GrPrevious ,GrNext} from "react-icons/gr";
export default function Quiz(){
    const quizes=useSelector((store)=>store.reducer.quizes)
    return(
<Flex w="100%" justify={"center"} align={"center"}>
    <Button>< GrPrevious  />
</Button>
    {quizes && quizes.map((quiz)=>{
        return <Box w="50%">
         <Heading>{quiz.question}</Heading>
        </Box>
    })
}
    <Button><GrNext />
</Button>

</Flex>
    )
}