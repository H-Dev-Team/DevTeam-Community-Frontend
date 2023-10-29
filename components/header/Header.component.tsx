import React from 'react';
import { Menu } from '@/values';
import styles from './Header.module.scss';

interface PartialMenuInterface {
  readonly menu: Menu;
  readonly childMenu?: PartialMenuInterface[];
}

function Header() {
  const menuList: PartialMenuInterface[] = [
    {
      menu: Menu.INTRODUCE,
      childMenu: [
        { menu: Menu.INTRODUCE__GREETING },
        { menu: Menu.INTRODUCE__HISTORY },
        { menu: Menu.INTRODUCE_INTRODUCTION },
        { menu: Menu.INTRODUCE__OBJECTIVES },
        { menu: Menu.INTRODUCE__OBJECTIVES_PROCESS },
        { menu: Menu.INTRODUCE__EMPLOYMENT },
      ],
    },
    { menu: Menu.CURRICULUM },
    { menu: Menu.FACULTY_MEMBERS },
    { menu: Menu.COMMUNITY },
    { menu: Menu.GRADUATE_SCHOOL },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.title}>홍익대학교</div>
      <nav className={styles.menuContainer}>
        <ul className={styles.menu}>
          {menuList.map((menuItem) => (
            <li key={menuItem.menu} className={styles.menuItem}>
              {menuItem.menu}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
