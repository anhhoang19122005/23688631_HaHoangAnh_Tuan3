import { useState } from "react"

export default function FormThongTin() {

    const [user, setUser] = useState({
        name: "Anh",
        email: "anhha19122005@gmail.com",
        age: "20"
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value
        });

        console.log(`Có thay đổi thông tin trong field ${name}, value mới: ${value}`)
    };
    return <div>
        <h2>Form thong tin nguoi dung</h2>
        <form>
        <div>
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            />
        </div>

        <div>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            />
        </div>

        <div>
            <label>Age:</label>
            <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            />
        </div>
        </form>

    </div>
}
