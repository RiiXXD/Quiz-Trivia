import {Route,Routes}  from "react-router";
import SetUp from "../Pages/SetUp";

export default function AllRoutes(){
    return <>
    <Routes>
    <Route path="/" element={<SetUp/>}></Route>

    </Routes></>
}