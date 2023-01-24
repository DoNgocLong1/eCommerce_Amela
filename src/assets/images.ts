import loginImage from "./images/login.jpg";
import loginBackground from "./images/loginBackground.jpg";
import slideShow1 from "./images/slider1.jpg";
import slideShow2 from "./images/slider2.jpg";
import slideShow3 from "./images/slider3.jpg";
import slideShow4 from "./images/slider4.jpg";
import slideShow5 from "./images/slider5.jpg";
import slideShow6 from "./images/slider6.jpg";
import laptopCategory from "./images/laptop_Category.jpg";
import desktopCategory from "./images/desktop_Category.jpg";
import monitorCategory from "./images/monitor_Category.jpg";
import projectorCategory from "./images/projector_Category.jpg";
import gamingChairCategory from "./images/gamingChair_Category.jpg";
import accessoryCategory from "./images/accessory_Category.jpg";
import logo from "./images/logo.png";
const images = {
  loginImage,
  loginBackground,
  slideShow1,
  slideShow2,
  slideShow3,
  slideShow4,
  slideShow5,
  slideShow6,
  logo,
  laptopCategory,
  desktopCategory,
  monitorCategory,
  projectorCategory,
  gamingChairCategory,
  accessoryCategory,
};
export const slideShow = [
  slideShow1,
  slideShow2,
  slideShow3,
  slideShow4,
  slideShow5,
  slideShow6,
];
interface Icategories {
  name: string;
  image: string;
}
export const categories: Icategories[] = [
  { name: "Laptops", image: laptopCategory },
  { name: "Desktops", image: desktopCategory },
  { name: "Monitors", image: monitorCategory },
  { name: "Projectors", image: projectorCategory },
  { name: "Gaming chairs", image: gamingChairCategory },
  { name: "Accessories", image: accessoryCategory },
];
export default images;
