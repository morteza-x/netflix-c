// app/providers.tsx
"use client";

import { BaseModalProvider } from "@/__client/BaseModalProvider";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

// import indexDB
//import { addPost, dbPromise, getImage, getPosts } from "../db/indexdb";
// just call the db file to take effect
(async () => {
  if (typeof window === "undefined") return;
  //await dbPromise;
  //await addPost();
  //await getPosts();
  //await getImage("e1a569a9-4efb-4c7b-90a6-74292e9b5945");
})();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <BaseModalProvider>{children}</BaseModalProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
