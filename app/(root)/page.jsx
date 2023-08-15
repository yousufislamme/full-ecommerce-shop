"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const setUpPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);


  useEffect(() => { 
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return (
     <div>
      Root Page 


    </div>
  )
}

export default setUpPage;