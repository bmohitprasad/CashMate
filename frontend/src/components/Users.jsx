/*eslint-disable*/
import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    let timerId;

    function handleChange(e){
        if (e.target.value === ""){
            setFilter("")
        } else {
            setFilter(e.target.value)
        }
    }

    function dbounce(e, fn, timer = 1000){
        clearInterval(timerId)
        timerId = setTimeout(() => {
            fn(e)
        }, timer)
    }

    useEffect(() => {
        axios.get("https://cashmate-backend.onrender.com/api/v1/user/bulk?filter=" + filter, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
            .then(response => {
                setUsers(response.data.user)
            })
            .catch(error => {
                console.log(error);
              });
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" 
            placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" onChange={(e) => {dbounce(e, handleChange, 1000)}}
            />
        </div>
        <div>
            {users.map((user, index) => <User user={user} key={ index }/>)}
        </div>
    </>
}

function User({user, index}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}
