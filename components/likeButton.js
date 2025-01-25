'use client';

import { useState } from "react";
import { Heart } from "lucide-react";
import { supabase } from "@/app/client";

export default function LikeButton({ slug, initialLikes }) {
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);
 

  const handleLike = async () => {
    if (isLiking) return; // Prevent multiple clicks
    setIsLiking(true);

    try {
      // Use insert or update method with proper conflict handling
      const { data, error } = await supabase.from("like Count").upsert(
        { slug, likes_count: likeCount + 1 },
        {
          onConflict: "slug",
          returning: "representation",
        }
      );

      if (error) {
        console.error("Error updating likes:", error);
        return;
      }

      // Optimistically update the UI
      setLikeCount((prev) => prev + 1);
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setIsLiking(false);
    }
  };
  

  return (
    <button
      onClick={handleLike}
      disabled={isLiking}
      className={`flex items-center font-semibold group ${
        isLiking ? "opacity-50" : ""
      }`}
    >
      <Heart
        size={20}
        className={`mr-1 ${
          likeCount > 0 ? "text-red-500 fill-red-500/20" : "text-gray-500"
        }`}
      />
      {likeCount} Likes
    </button>
  );
}
