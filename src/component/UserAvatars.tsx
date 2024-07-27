import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import {
  AddIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

function UserAvatars() {
  const userImages = [
    "path/to/user1.png",
    "path/to/user2.png",
    "path/to/user3.png",
    "path/to/user1.png",
    "path/to/user2.png",
    "path/to/user3.png",
    "path/to/user1.png",
    "path/to/user2.png",
    "path/to/user3.png",
    "path/to/user1.png",
    "path/to/user2.png",
    "path/to/user3.png",
  ];

  const userCoordinates = [
    { top: "10%", left: "10%" },
    { top: "10%", left: "30%" },
    { top: "10%", left: "50%" },
    { top: "30%", left: "10%" },
    { top: "30%", left: "30%" },
    { top: "30%", left: "50%" },
    { top: "50%", left: "10%" },
    { top: "50%", left: "30%" },
    { top: "50%", left: "50%" },
    { top: "70%", left: "10%" },
    { top: "70%", left: "30%" },
    { top: "70%", left: "50%" },
  ];

  // 画像と座標を組み合わせた配列を作成
  const userData = userImages.map((image, index) => ({
    src: image,
    ...userCoordinates[index],
  }));

  return (
    <div className="relative w-full h-full">
      {userData.map((user, index) => (
        <Box key={index} position="absolute" top={user.top} left={user.left}>
          <Avatar src={user.src} size="md" />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AddIcon />}
              variant="outline"
              ml={2}
            />
            <MenuList>
              <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
              <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
              <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ))}
    </div>
  );
}

export default UserAvatars;
