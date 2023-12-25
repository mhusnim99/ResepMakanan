import { Heading, Center, Box, SafeAreaView, Button, Text } from "native-base";

const Profile = () => {
  return (
    <>
      {/* <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
          <Text color='white' fontSize={18}>Kategori</Text>
          </Button>
        </Box>
      </SafeAreaView> */}
      <Center flex={1}>
        <Heading>Ini Halaman profile</Heading>
      </Center>
    </>
  );
};

export default Profile;