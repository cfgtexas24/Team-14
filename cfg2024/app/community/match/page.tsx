"use client";

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import TinderCard from "react-tinder-card"; // Import react-tinder-card
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createLike } from "./actions"; // Import the createLike function

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
  const [swiped, setSwiped] = useState(false); // State to track if card is swiped
  const [error, setError] = useState(""); // State for error messages
  const currentUserId = "currentUserId"; // Replace with actual current user ID
  const matchedUserId = "matchedUserId"; // Replace with the ID of the user being swiped on

  const handleSwipe = async (direction) => {
    if (direction === "right") {
      // Check if user ID is valid
      if (!currentUserId) {
        setError("User ID is required to create a like."); // Set error message
        return; // Exit early if user ID is not valid
      }

      try {
        await createLike(currentUserId, matchedUserId); // Create a like
        setSwiped(true); // Set the state when the card is swiped
        setError(""); // Clear any previous error messages
      } catch (error) {
        console.error("Error creating like:", error);
        setError("Failed to create like."); // Set error message for failed operation
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {!swiped && (
        <TinderCard
          onSwipe={(dir) => handleSwipe(dir)}
          preventSwipe={["up", "down"]} // Prevent vertical swipes
        >
          <Tilt options={defaultOptions} style={{ height: 400, width: 350 }}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>FirstName LastName</CardTitle>
                <CardDescription>Role Name</CardDescription>
              </CardHeader>
              <div className="w-full h-40">
                <img
                  src="https://via.placeholder.com/350x150"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-t"
                />
              </div>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name">Fun Fact:</label>
                    <div id="name" className="p-2">
                      I love to...
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tilt>
        </TinderCard>
      )}
      {swiped && <div className="text-center">Card Swiped!</div>}
      
      {/* Display Error Message */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default CardWithForm;
