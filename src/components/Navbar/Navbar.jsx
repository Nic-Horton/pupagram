import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InstagramLogo } from "../../assets/constants";

const Navbar = () => {
	return (
		<Container maxW={"container.lg"} my={4}>
			<Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
				<Link to='/auth'>
					<Flex display={{ base: "none", sm: "block" }} cursor={"pointer"}>
					{/* <Image src='/logo.png' h={20} display={{ base: "none", sm: "block" }} cursor={"pointer"} /> */}
					<InstagramLogo height="100"
					role="img"
					viewBox="15 9 148 18"
					width="250"
					/>
					</Flex>
				</Link>
				<Flex gap={4} height={100} alignItems={"center"}>
					<Link to='/auth'>
						<Button colorScheme={"blue"} size={"sm"}>
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
	);
};

export default Navbar;