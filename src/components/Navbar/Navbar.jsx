import { Button, Container, Divider, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
		<Container maxW={"container.lg"} my={4}>
			<Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
				<Link to='/auth'>
					<Flex display={{ base: "none", sm: "block" }} cursor={"pointer"}>
					<Image src='/pupagramLogo.png' boxSize='150px' display={{ base: "none", sm: "block" }} cursor={"pointer"} />
					</Flex>
				</Link>
				<Flex gap={4} height={100} alignItems={"center"}>
					<Link to='/auth'>
						<Button colorScheme={"orange"} size={"sm"}>
							Login
						</Button>
					</Link>
					<Link to='/auth'>
						<Button variant={"outline"} size={"sm"}>
							Signup
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Container>
		<Divider/>
		</>
	);
};

export default Navbar;