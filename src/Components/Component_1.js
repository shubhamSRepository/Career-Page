import Styles from "../Styles/Component_1.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Component_1() {

    return (
        <div className={Styles.container}>

            <div className={Styles.navBar}>

                <div className={Styles.logo}>
                    <img src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png"  />
                </div>

                <div className={Styles.horizontal_menu}>

                    <ul type="none">
                        <li>
                            <a href="https://getpeppermint.co/">Home</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/about-us/">About Us</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/solutions/">Solutions</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/products/">Products</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/products/#">Resources</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/contacts/">Contact Us</a>
                        </li>

                    </ul>

                    <div className={Styles.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>

                </div>

            </div>

            <div className={Styles.block1}>

                <div className={Styles.block2}>

                    <div className={Styles.heading}>
                        Peppermint Robotics Careers
                    </div>

                    <div className={Styles.quote}>
                        <p>
                            "There are an endless number of things to discover about robotics.
                            A lot of it is just too fantastic for people to believe."
                            ~ Daniel H. Wilson
                        </p>

                        <p className={Styles.joinUs}>
                            JOIN US, OUR BEST IS YET TO COME...
                        </p>
                    </div>

                </div>

                <div className={Styles.roboImg}>
                    <img src="https://circuitdigest.com/sites/default/files/inlineimages/u3/Peppermint-Autonomous-Floor-Cleaning-Robot.jpg" />
                </div>

            </div>

        </div>


    )
}

export default Component_1;