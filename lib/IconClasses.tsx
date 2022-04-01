import {
  faHeart,
  faPhone,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export default function IconClasses(iconClassName: string):any {
  switch (iconClassName) {
    case "phone": {
      return faPhone;
    }
    case "heart": {
      return faHeart;
    }
    case "cart": {
      return faShoppingBag;
    }
  }
}
