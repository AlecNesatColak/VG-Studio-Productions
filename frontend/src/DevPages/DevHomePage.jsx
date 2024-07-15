import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DeveloperPage.css";

function DeveloperPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const response = await axios.get("/api/admin/submissions");
        setSubmissions(response.data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    }
    fetchSubmissions();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.post(`/api/admin/submissions/${id}/accept`);
      setSubmissions(
        submissions.map((sub) =>
          sub.id === id ? { ...sub, status: "accepted" } : sub
        )
      );
    } catch (error) {
      console.error("Error accepting submission:", error);
    }
  };

  const handleDeny = async (id) => {
    try {
      await axios.post(`/api/admin/submissions/${id}/deny`);
      setSubmissions(
        submissions.map((sub) =>
          sub.id === id ? { ...sub, status: "denied" } : sub
        )
      );
    } catch (error) {
      console.error("Error denying submission:", error);
    }
  };

  return (
    <div className="developer-container">
      <h2>Developer Home Page</h2>
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
              <tr key={sub.id}>
                <td>{sub.id}</td>
                <td>{sub.username}</td>
                <td>{sub.email}</td>
                <td>{sub.status}</td>
                <td>
                  {sub.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleAccept(sub.id)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDeny(sub.id)}
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
