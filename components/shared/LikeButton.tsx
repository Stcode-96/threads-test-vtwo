"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { addLikeToThread } from "@/lib/actions/thread.actions";
import { usePathname } from "next/navigation";

interface LikeButtonProps {
  initialLiked: boolean;
  userId: string;
  threadId: string;
}

function LikeButton({ initialLiked, userId, threadId }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  //const [error, setError] = useState<string | null>(null);

  //const pathname = usePathname();

  const handleLike = async () => {
    setIsLiked((prevLiked) => !prevLiked);
    //setError(null);

    try {
      await addLikeToThread(userId, threadId); 

      // Update the state to indicate that the user has liked the thread
      setIsLiked(true);
      
    } catch (err: any) {
      console.error("Error adding like:", err.message);
      //setError("Unable to add like. Please try again later.");
    }
  };

  return (
    <div>
      <Button onClick={handleLike}>
        {isLiked ? (
          <Image
            src="/assets/heart-filled.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
        ) : (
          <Image
            src="/assets/heart-gray.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
        )}
      </Button>
    </div>
  );
}

export default LikeButton;

