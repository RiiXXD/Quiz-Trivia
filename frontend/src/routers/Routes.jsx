import {Route,Routes}  from "react-router";
import SetUp from "../Pages/SetUp";
import Quiz from "../Pages/Quiz";
export default function AllRoutes(){
    return <>
    <Routes>
    <Route path="/" element={<SetUp/>}></Route>
    <Route path="/quiz" element={<Quiz/>}></Route>

    </Routes></>
}