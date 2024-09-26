import { useRouter } from "next/router";
import styles from "styles/Menu.module.css";
import homestyles from "styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export function getMenuTree() {
  const menutitles = {
    siteinfo: {
      pagelink: "/siteinfo",
      submenu: [],
    },
    pics: {
      pagelink: "/pics",
      submenu: [],
    },
    novels: {
      pagelink: "/novels",
      submenu: [],
    },
    books: {
      pagelink: "/books",
      submenu: [],
    },
    blogs: {
      pagelink: "/blogs",
      submenu: [],
    },
  };
  const menutitleslist = [
    menutitles.siteinfo,
    menutitles.pics,
    menutitles.novels,
    menutitles.books,
    menutitles.blogs,
  ];
  return menutitleslist;
}
export function Menu({ menutitle, menulink }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(menulink);
  };
  var buttonstyle = styles.button;
  if (router.pathname.includes(menulink)) {
    buttonstyle = `${styles.selectedbutton} ${styles.button}`;
  }
  return (
    <>
      <button className={buttonstyle} onClick={handleClick}>
        {menutitle}
      </button>
    </>
  );
}
export default function MenuVar() {
  const menutitleslist = getMenuTree();
  const isPc = useMediaQuery({ query: "(min-width: 480px)" });
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const menulink = "/menu";
  const handleMenuOpen = () => {
    const newIsOpen = !isOpen;
    setOpen(!newIsOpen);
    console.log(newIsOpen);
    if (router.pathname != "/menu") {
      router.push(menulink);
    } else {
      router.back();
    }
  };

  if (isPc) {
    return (
      <>
        <nav className={homestyles.nav}>
          <div className={styles.menu}>
            {menutitleslist.map((menutitle, index) => (
              <Menu
                menutitle={menutitle.title}
                menulink={menutitle.pagelink}
                submenu={menutitle.submenu}
              />
            ))}
          </div>
        </nav>
      </>
    );
  } else {
    //noPc
    return (
      <>
        <nav className={homestyles.nav}>
          <button className={styles.hamburgerbutton} onClick={handleMenuOpen}>
            {router.pathname != "/menu" ? <MenuIcon /> : <CloseIcon />}
          </button>
          {/* {isOpen ? (
            <ul className={isOpen ? styles.menu : "block"}>
              {menutitleslist.map((menutitle, index) => (
                <li key={index}>
                  <Menu
                    menutitle={menutitle.title}
                    menulink={menutitle.pagelink}
                    submenu={menutitle.submenu}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )} */}
        </nav>
      </>
    );
  }
}
