import { useState } from "react";
import { Bell, Handshake, CheckCircle2, XCircle } from "lucide-react";

const notifications = [
  {
    type: "Collaboration Request",
    title: "New collaboration request",
    message:
      "Team Alpha wants to collaborate on Improving Digital Learning Access.",
    time: "10 minutes ago",
  },
  {
    type: "Project Update",
    title: "Project milestone completed",
    message: "The Challenge Validation milestone has been completed.",
    time: "2 hours ago",
  },
  {
    type: "System",
    title: "New challenge matched",
    message: "A new Education challenge has been matched with your expertise.",
    time: "Yesterday",
  },
];

function Notifications() {
  const [requestStatus, setRequestStatus] = useState("pending");
  return (
    <main className="notifications-page">
      <div className="notifications-header">
        <div className="notifications-icon">
          <Bell size={24} />
        </div>

        <span>NOTIFICATIONS</span>

        <h1>
          Stay updated.
          <br />
          <strong>Stay connected.</strong>
        </h1>

        <p>
          Keep track of collaboration requests, project updates, and important
          platform activity.
        </p>
      </div>

      <section className="notifications-list">
        {notifications.map((notification, index) => (
          <div className="notification-card" key={index}>
            <div className="notification-card-icon">
              {notification.type === "Collaboration Request" ? (
                <Handshake size={20} />
              ) : (
                <CheckCircle2 size={20} />
              )}
            </div>

            <div className="notification-content">
              <span>{notification.type}</span>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <small>{notification.time}</small>
            </div>

            {notification.type === "Collaboration Request" && (
              <div className="notification-actions">
                {requestStatus === "pending" ? (
                  <>
                    <button onClick={() => setRequestStatus("accepted")}>
                      <CheckCircle2 size={16} />
                      Accept
                    </button>

                    <button onClick={() => setRequestStatus("rejected")}>
                      <XCircle size={16} />
                      Reject
                    </button>
                  </>
                ) : (
                  <strong>Request {requestStatus}</strong>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Notifications;
