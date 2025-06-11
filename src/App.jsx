import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [usersData, setusersData] = useState([]);
    const getData = async () => {
        const res = await axios.get("http://3.110.166.9:5001/api/users");
        setusersData(res.data.users);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>Test 12</h1>
            <h1>List of users</h1>
            {usersData.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
export default App;
