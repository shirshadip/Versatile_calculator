import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "../styles/feedback.css";

function Feedback() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const { error } = await supabase
            .from("feedback")
            .insert([{ name, email, feedback }]);

        if (error) {
            setStatus("❌ Error submitting feedback");
            console.error(error);
        } else {
            setStatus("✅ Feedback submitted successfully!");
            setName("");
            setEmail("");
            setFeedback("");
        }

        setLoading(false);
    };

    return (
        <>
            <h2>Feedback</h2>
            <p>Give feedbacks to improve the website</p>

            <form id="feedbackForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br /><br />

                <textarea
                    placeholder="Your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                /><br /><br />

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>

            {status && <p id="status">{status}</p>}

            <div id="homenav">
                <button onClick={() => navigate("/")}>← Home Page</button>
            </div>

            <div id="footer">
                <p>&copy; 2026 Calculator App • Made by shirshadip</p>
            </div>
        </>
    );
}

export default Feedback;