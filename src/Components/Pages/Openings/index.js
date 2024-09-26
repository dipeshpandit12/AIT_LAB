import ProfileCard from "./ProfileCard";
import {
  Heading,
  Text,
  List,
  ListItem,
  Box,
  SimpleGrid,
  Link,
  Flex,
} from "@chakra-ui/react";
import Students_Datas from "../../../Datas/Students_Datas.json";

export default function Openings() {
  return (
    <Box px={{base:"0rem",md:"2rem",lg:"3rem",xl:"4rem"}}>
      <Box
        pb="3rem"
        fontSize={{ base: "sm", md: "sm", lg: "md", xl: "md" }}
        mt="3rem"
        fontFamily="Montserrat,Helvetica Neue,Helvetica,Arial,Lucida Grande,-apple-system,sans-serif"
      >
        <Heading size="lg" pb="1rem">
          Hiring !!!
        </Heading>
        <Text
          pb="1rem"
          pl={{ base: "0rem", md: "1.5rem", lg: "1rem", xl: "1rem" }}
          textAlign="justify"
        >
          The Ingram School of Engineering (ISOE) invites applications for
          several highly motivated M.S./Ph.D. GIA/GRA positions under the
          supervision of Dr. Subasish Das in the Civil Engineering program. The
          prospective student will focus on combination of three research
          thrusts: 1) causal artificial intelligence, 2) advanced spatiotemporal
          modeling, and 3) transportation safety and operation. The
          responsibilities of the GRA include:
        </Text>
        <List
          fontWeight={350}
          pb="2rem"
          textIndent={{ md: "1rem", lg: "4rem", xl: "4rem" }}
          fontStyle="italic"
        >
          <ListItem>1.Assist in writing literature review</ListItem>
          <ListItem>2.Develop spatiotemporal models</ListItem>
          <ListItem>3.Apply different AI algorithms</ListItem>
          <ListItem>4.Maintain codes and repositories in GitHub</ListItem>
          <ListItem>
            5.Build and maintain complex web applications for real-time
            spatiotemporal data stream
          </ListItem>
        </List>
        <Text
          pl={{ base: "0.5rem", md: "1.5rem", lg: "1rem", xl: "1rem" }}
          textAlign="justify"
        >
          Please see the pdf for the open position of{" "}
          <Link
            href="https://subasish.github.io/ait_lab/pdfs/GRA_Position%20Details_Fall22.pdf"
            fontWeight="600"
            isExternal
            textDecoration="underline"
          >
            Ph.D. GRA
          </Link>
          .
        </Text>
      </Box>
      <Box pb="2rem">
        <Heading size="lg" pb="2rem">
          Current and Former Members
        </Heading>
        <Box pb="3rem">
          <Heading
            as="h1"
            size="md"
            pb="2rem"
            fontWeight={700}
            pl={{ base: "0.5rem", md: "1.5rem", lg: "0.5rem", xl: "0.5rem" }}
          >
            Postdoctoral Research Associates
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.postdoctoralResearchAssociates.map(
              (student, index) => (
                <ProfileCard key={index} link={student} />
              )
            )}
          </SimpleGrid>
        </Box>
        <Box pb="3rem">
          <Heading as="h1" size="md" pb="2rem" fontWeight={700}>
            {" "}
            PhD Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.phdStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
        <Box pb="3rem">
          <Heading as="h1" size="md" pb="2rem" fontWeight={700}>
            {" "}
            M.S. Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.msStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
        <Box pb="2rem">
          <Heading as="h1" size="md" pb="2rem" fontWeight={700}>
            {" "}
            Undergraduate Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.undergraduateStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
