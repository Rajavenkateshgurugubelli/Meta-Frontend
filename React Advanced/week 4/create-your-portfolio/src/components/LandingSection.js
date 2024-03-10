import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Raja!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src="https://media.licdn.com/dms/image/D5603AQG_utKB1UXYrw/profile-displayphoto-shrink_800_800/0/1707342711585?e=2147483647&v=beta&t=k0cCA_rSVI7vQBK7GX3plkweqrOAGr27OQY4tgKNe8Y" size="xxl" ></Avatar>
      <>{greeting}</>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
      
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
