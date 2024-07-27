//参加している人のアイコンとステータスの取得

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
    { top: "47%", left: "77%" },//1
    { top: "52%", left: "63%" },
    { top: "55%", left: "45%" },
    { top: "47%", left: "35%" },//4
    { top: "40%", left: "25%" },
    { top: "33%", left: "15%" },//6
    { top: "20%", left: "15%" },
    { top: "18%", left: "27%" },//8
    { top: "20%", left: "41%" },
    { top: "24%", left: "52%" },//10
    { top: "29%", left: "63%" },
    { top: "34%", left: "74%" },//12
  ];


  // type User = {
  //   icon: string;
  //   userName: string;
  // };

  // 画像と座標を組み合わせた配列を作成
  const userData = userImages.map((image, index) => ({
    src: image,
    ...userCoordinates[index],
  }));

  return (
    <div className="relative w-full h-full">
      {userData.map((user, index) => (
        <Box key={index} position="absolute" top={user.top} left={user.left}>
          <Avatar src={user.src} size="xl" />
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
