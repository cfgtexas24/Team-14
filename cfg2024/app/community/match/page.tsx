"use client";

import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import TinderCard from "react-tinder-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createLike, fetchAllUsers } from "./actions"; // Import necessary functions

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const CardWithForm = () => {
  const [users, setUsers] = useState([]); // State to store all users
  const [loading, setLoading] = useState(true); // State to track loading
  const [swiped, setSwiped] = useState({}); // Track swiped state for each user
  const [error, setError] = useState(""); // State for error messages
  const currentUserId = "currentUserId"; // Replace with actual current user ID

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetchAllUsers(); // Fetch all users
        setUsers(data); // Set the users data to state
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false); // Set loading to false when fetch is complete
      }
    };

    fetchUsers();
  }, []);

  const handleSwipe = async (direction, likedId) => {
    if (direction === "right") {
      if (!currentUserId || !likedId) {
        setError("Both liker_id and liked_id are required to create a like.");
        return;
      }

      try {
        await createLike(currentUserId, likedId); // Create a like with liker_id and liked_id
        setSwiped((prev) => ({ ...prev, [likedId]: true })); // Set swiped state for the liked user
        setError("");
      } catch (error) {
        console.error("Error creating like:", error);
        setError("Failed to create like.");
      }
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-start items-center">
      {/* Description Section */}
      <div className="text-center mt-8 mb-8">
        <h1 className="text-4xl font-bold">Bringing the power of matching to everyone</h1>
        <p className="text-xl mt-4 text-gray-600">
          Our platform connects individuals through shared interests and common goals. Start matching now to find someone who shares your passions!
        </p>
      </div>

      {/* Container for Stacked Cards */}
      <div className="relative w-full h-[500px] flex justify-center items-center">
        {loading ? (
          <div>Loading...</div> // Show loading indicator while fetching data
        ) : users.length > 0 ? (
          users.map((user, index) => (
            !swiped[user.id] && (
              <TinderCard
                key={user.id}
                onSwipe={(dir) => handleSwipe(dir, user.id)} // Pass likedId to handleSwipe
                preventSwipe={["up", "down"]} // Prevent vertical swipes
                className="absolute top-0" // Keeps the cards stacked on top of each other
                style={{ zIndex: users.length - index }} // Set z-index for stacking cards
              >
                <Tilt options={defaultOptions} style={{ height: 400, width: 350 }}>
                  <Card className="w-full">
                    <CardHeader>
                      {/* Email and Role remain the same */}
                      <CardTitle className="text-2xl font-bold">{user.email}</CardTitle> {/* Display user's email */}
                      <CardDescription className="text-lg text-gray-600">{user.role}</CardDescription> {/* Display user's role */}
                    </CardHeader>
                    
                    <div className="w-full h-40">
                      <img
                        src="https://via.placeholder.com/350x150" // You can replace this with a profile image if available
                        alt="Profile"
                        className="w-full h-full object-cover rounded-t"
                      />
                    </div>
                    
                    <CardContent>
                      <div className="grid w-full items-center gap-4">
                        {/* Fun Fact Section with Simple Styling */}
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="funFact" className="text-xl font-semibold text-black">
                            Fun Fact:
                          </label>
                          <div id="funFact" className="text-lg font-medium text-black">
                            {user.funFact || "I love to..."} {/* Example of dynamic fun fact */}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              </TinderCard>
            )
          ))
        ) : (
          <div>No users found</div> // Show this only if loading is false and no users exist
        )}
      </div>

      {error && (
        <div className="text-red-500 text-center mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default CardWithForm;
