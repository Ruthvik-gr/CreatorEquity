import React, { useEffect, useState } from "react";
import BusinessDetails from "./BusinessDetails";
import CreatorDetails from "./CreatorDetails";

function YourProfile() {
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No token found");

        const response = await fetch("https://creatorequity.onrender.com/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          if (data && data.type) {
            setUserType(data.type);
          } else {
            throw new Error("Invalid user data");
          }
        } else {
          throw new Error("Expected JSON response");
        }
      } catch (error: any) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userType === "creator" && <CreatorDetails />}
      {userType === "business" && <BusinessDetails />}
    </div>
  );
}

export default YourProfile;
