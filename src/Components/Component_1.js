import Styles from "../Styles/Component_1.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Component_1() {

    return (
        <div className={Styles.container}>

            <div className={Styles.navBar}>

                <div className={Styles.logo}>
                    <img src="https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_362,w_780,x_0,y_0/v1580249584/tenants/f7ad7557-d52d-4af2-bcb5-ec334f8fc6b6/59a7c5ec6587427db30d47fa237c7a85/CN-logo-blk-backgrnd.png" />
                </div>

                <div className={Styles.horizontal_menu}>

                    <ul type="none">
                        <li>
                            Home
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Courses
                        </li>
                        <li>
                            Practice
                        </li>
                        <li>
                            Classroom
                        </li>
                        <li>
                            Contact Us
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
                        Code Ninjas Careers
                    </div>

                    <div className={Styles.quote}>
                        <p>
                            "You might not think that programmers are artists, but programming
                            is an extremely creative profession. Its logic-based creativity."
                            <p className={Styles.quoteBy}>
                                ~ John Romero
                            </p>
                        </p>

                        <p className={Styles.joinUs}>
                            JOIN US, OUR BEST IS YET TO COME...
                        </p>
                    </div>

                </div>

                <div className={Styles.creativeCodingImg}>
                    <img src="https://www.chalmers.se/_next/image/?url=https%3A%2F%2Fcms.www.chalmers.se%2FMedia%2Fmb3hi4kn%2Fcoding-7-1920.jpg%3Fwidth%3D1920%26height%3D1080%26rnd%3D133293116108230000%26quality%3D60%26format%3Dwebp&w=3840&q=85" />
                </div>

            </div>

        </div>


    )
}

export default Component_1;