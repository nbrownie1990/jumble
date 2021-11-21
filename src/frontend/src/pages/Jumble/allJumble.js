const {useState, useEffect} = require("react");

export default function AllJumble() {
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('/api/jumbles/getall')
            .then((res) => res.json())
            .then((data) => {
                setJumbles(data)
                console.log(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    if (error || !Array.isArray(jumbles)) {
        return <p>There was an error loading your data!</p>;
    }

    return (
        <ul className="text-black">
            {
            jumbles.map((jumble) => (
                <li key={jumble.jumbleId}> Hey {jumble.jumbleName}</li>
            ))}
        </ul>
    );
}