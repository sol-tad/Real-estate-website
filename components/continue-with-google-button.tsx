"use client";

import { Button } from "./ui/button";
import { useAuth } from "@/context/auth";

export default function ContinueWithGoogleButton() {
  const auth = useAuth();

  return (
    <Button
      onClick={() => {
        auth?.loginWithGoogle();
      }}
      variant="default"
      className="w-full"
    >
      Continue With Google
    </Button>
  );
}
