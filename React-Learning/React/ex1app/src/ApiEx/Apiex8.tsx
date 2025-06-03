import { useState } from 'react';

const Apiex8 = () => {
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState(false);
    const [userId, setUserId] = useState('');
    const [result, setResult] = useState<any>(null);

    const insert = () => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                todo: task,
                completed: completed,
                userId: Number(userId)
            })
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Error fetching data");
                }
                return response.json();
            })
            .then((data) => {
                setResult(data);
                console.log(data);
            })
            .catch((error) => {
                setResult({ error: error.message });
            });
    };

    return (
        <>
            <input type="text" placeholder="Enter Task Name" value={task} onChange={(e) => setTask(e.target.value)}/><br /><br />
            <label>
                <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
                Completed
            </label><br /><br />
            <input type="text" placeholder="Enter UserId" value={userId} onChange={(e) => setUserId(e.target.value)} /><br /><br />
            <button onClick={insert}>Insert</button>

            {result && !result.error && (
                <table border={1} style={{ marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Completed</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.id}</td>
                            <td>{result.todo}</td>
                            <td>{result.completed ? 'true' : 'false'}</td>
                            <td>{result.userId}</td>
                        </tr>
                    </tbody>
                </table>
            )}
            {result && result.error && (
                <div style={{ color: 'red' }}>{result.error}</div>
            )}
        </>
    );
};

export default Apiex8;