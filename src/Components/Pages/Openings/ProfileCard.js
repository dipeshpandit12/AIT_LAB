import { Card,CardBody,Image,Text, Heading,Stack, CardFooter, IconButton, Link, HStack, VStack} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function ProfileCard({ link }) {

  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text) => {
    if (text.length > 18) {
      return text.substring(0, 17) + '..';
    }
    return text;
  };

  return (
    <Card
    minH="17rem"
    minW="15rem"
    maxW="16rem"
    maxH="19rem"
    direction={{ base: 'column', sm: 'row' }}
    overflow="hidden"
    border="none"
    variant="outline"
    // borderRadius="1.5rem"
    // borderBottom="4px"
    // borderColor="#2C3E50"
    backgroundColor="transparent"
  >
    <Stack spacing={0}>
      <CardBody padding={0}>
        <Image
          width="100%"
          objectFit="cover"
          src={link.profilePicture? link.profilePicture: 'https://www.shutterstock.com/image-vector/unknown-person-hidden-covered-masked-260nw-1552977773.jpg'}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease', // Smooth transition effect
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          alt="Profile Image"
        />
      </CardBody>
        {/* <CardFooter alignContent="center" justifyItems="left">
            <VStack spacing={0}>
                <Heading fontSize="1.5rem" fontWeight={550} pb="0.2rem">{truncateText(link.name)}</Heading>
                <Text fontSize="1.8rem"  fontWeight={50} >{truncateText(link.department)}</Text>
                <Text fontSize="1;3rem"  fontWeight={50} >{truncateText(link.institution)} , {link.years}</Text>
                   <HStack spacing={4} alignContent="center" justifyContent="center" pt="0">
                    <Link href={`mailto:${link.email}`} isExternal>
                      <IconButton
                        icon={<EmailIcon />}
                        aria-label="Send Email"
                        variant="ghost"
                        colorScheme="blue"
                      />
                    </Link>
                    <Link href={link.linkedinProfile} isExternal>
                      <IconButton
                        icon={<FaLinkedin />}
                        aria-label="LinkedIn Profile"
                        variant="ghost"
                        colorScheme="blue"
                      />
                    </Link>
            </HStack>
            </VStack>
        </CardFooter> */}
      <Heading fontSize="1.5rem" fontWeight={550} pb="0.2rem">{truncateText(link.name)}</Heading>
      <Text fontSize="1.8rem"  fontWeight={50} >{truncateText(link.department)}</Text>
    </Stack>
    </Card>
  );
}

export default ProfileCard;
