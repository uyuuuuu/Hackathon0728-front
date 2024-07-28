//参加している人のアイコンとステータスの取得

import { Avatar, Box, IconButton, Tooltip } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import {
  FaBook,
  FaGamepad,
  FaHeadphones,
  FaLaptopCode,
  FaWineGlass,
} from "react-icons/fa";
import {
  MdFastfood,
  MdSelfImprovement
} from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";
import useSound from "use-sound";
import CheersSound from "../assets/cheers.mp3"; // 乾杯音をインポート
import Kanpai from "./Kanpai";

interface Users {
  name: string;
  iconUrl: string;
  status: number;
}

function UserAvatars() {
  const [showKanpai, setShowKanpai] = useState(false);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get<Users[]>(
          `http://localhost:3000/home/user_icon`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  const userActivities = [
    { activity: "gaming", activityDetail: "Playing Minecraft" },
    { activity: "working", activityDetail: "Coding" },
    { activity: "listening", activityDetail: "Spotify" },
    { activity: "reading", activityDetail: "Design Patterns" },
    { activity: "gaming", activityDetail: "Playing Valorant" },
    { activity: "working", activityDetail: "Writing documentation" },
    { activity: "listening", activityDetail: "Podcast" },
    { activity: "reading", activityDetail: "Clean Code" },
    { activity: "gaming", activityDetail: "Playing Among Us" },
    { activity: "working", activityDetail: "Debugging" },
    { activity: "listening", activityDetail: "YouTube Music" },
    { activity: "drinking", activityDetail: "ほろ酔い" },
  ];

  const userCoordinates = [
    { top: "47%", left: "80%" }, //1
    { top: "51%", left: "70%" },
    { top: "55%", left: "60%" },
    { top: "52%", left: "43%" }, //4
    { top: "44%", left: "33%" },
    { top: "37%", left: "23%" }, //6
    { top: "31%", left: "13%" },
    { top: "19%", left: "22%" }, //8
    { top: "18%", left: "36%" },
    { top: "23%", left: "48%" }, //10
    { top: "30%", left: "64%" },
    { top: "34%", left: "74%" }, //12
  ];

  const handleIconClick = () => {
    setShowKanpai(true);
    cheersPlay();
    setTimeout(() => setShowKanpai(false), 3000); // 3秒後にアニメーションを非表示
  };
  const [cheersPlay] = useSound(CheersSound, { volume: 0.8 });

  const getActivityIcon = (activity, activityDetail) => {
    switch (activity) {
      case "gaming":
        return <FaGamepad />;
      case "working":
        return <FaLaptopCode />;
      case "listening":
        return <FaHeadphones />;
      case "reading":
        return <FaBook />;
      case "drinking":
        return (
          <IconButton
            icon={<FaWineGlass />}
            aria-label="Drink"
            onClick={() => {
              handleIconClick();
            }}
            borderRadius="full" // まん丸にする
            width="40px" // 幅
            height="40px" // 高さ
            backgroundColor="black" // 背景色
            color="white" // アイコンの色
            _hover={{ backgroundColor: "gray.700" }} // ホバー時の背景色
          />
        );
      case "eating":
        return <MdFastfood />;
      case "chill":
        return <MdSelfImprovement />;
      case "AFK":
        return <PiOfficeChairFill />;
      default:
        return null;
    }
  };

  // 画像と座標を組み合わせた配列を作成
  const userData = users.map((user, index) => ({
    src: user.iconUrl,
    name: user.name,
    status: user.status,
    ...userCoordinates[index],
  }));

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {userData.map((user, index) => (
        <Box key={index} position="absolute" top={user.top} left={user.left}>
          <Tooltip label={userActivities[index].activityDetail} hasArrow>
            <Box position="relative">
              <Avatar src={user.src} size="xl" />
              <p>{user.name}</p>
              <p>{user.status}</p>
              <Box
                position="absolute"
                bottom="-4"
                right="-6"
                width="40px"
                height="40px"
                borderRadius="full"
                border="1px solid white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="24px"
                backgroundColor={"black"}
              >
                {getActivityIcon(
                  userActivities[index].activity,
                  userActivities[index].activityDetail
                )}
              </Box>
            </Box>
          </Tooltip>
        </Box>
      ))}
      {showKanpai && <Kanpai />}
    </div>
  );
}

export default UserAvatars;
