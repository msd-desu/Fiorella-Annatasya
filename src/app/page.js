"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleProceed = () => {
    setShowMain(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!showMain && <Landing onProceed={handleProceed} />}
      <MainContent visible={showMain} />
    </>
  );
}
