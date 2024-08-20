import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DeveloperPage.css";

function DeveloperPage() {
  const [submissions, setSubmissions] = useState([]);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/admin-request/submissions"
        );
        setSubmissions(response.data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    }
    fetchSubmissions();
  }, []);

  const handleAccept = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/admin-request/submissions/${id}/accept`
      );
      setSubmissions(
        submissions.map((sub) =>
          sub._id === id ? { ...sub, status: "Accepted" } : sub
        )
      );
      setPassword(response.data.password);
    } catch (error) {
      console.error("Error accepting submission:", error);
      alert("Error accepting submission");
    }
  };

  const handleDeny = async (id) => {
    try {
      await axios.post(
        `http://localhost:5001/api/admin-request/submissions/${id}/deny`
      );
      setSubmissions(
        submissions.map((sub) =>
          sub._id === id ? { ...sub, status: "Denied" } : sub
        )
      );
    } catch (error) {
      console.error("Error denying submission:", error);
      alert("Error denying submission");
    }
  };

  return (
    <div className="developer-container">
      <h2>Developer Home Page</h2>
      {password && <p>New admin password: {password}</p>}
      {submissions.length > 0 ? (
        <table className="submissions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub._id}>
                <td>{sub._id}</td>
                <td>{sub.username}</td>
                <td>{sub.email}</td>
                <td>{sub.status}</td>
                <td>
                  {sub.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleAccept(sub._id)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDeny(sub._id)}
                        className="deny-button"
                      >
                        Deny
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No submissions found</p>
      )}
    </div>
  );
}

export default DeveloperPage;
