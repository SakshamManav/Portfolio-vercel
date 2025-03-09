import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GitHubProject() {
    const { repoName } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://github-api-x9f6.onrender.com/github/${repoName}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch project data");
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [repoName]);

    if (loading) return <pre style={{ color: "white" }}>Loading project data...</pre>;
    if (error) return <pre style={{ color: "red" }}>Error: {error}</pre>;

    return (
        <pre style={{ color: "red", textAlign: "left", padding: "20px", fontSize:"20px" }}>
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}

export default GitHubProject;
