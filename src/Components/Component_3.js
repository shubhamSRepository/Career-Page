import Styles from "../Styles/Component_3.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Component_3() {
    return (
        <div className={Styles.container}>

            <div className={Styles.logo}>
                <img src="https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_362,w_780,x_0,y_0/v1580249584/tenants/f7ad7557-d52d-4af2-bcb5-ec334f8fc6b6/59a7c5ec6587427db30d47fa237c7a85/CN-logo-blk-backgrnd.png" />
            </div>

            <div className={Styles.container2}>

                <div >

                    <h2>Quick Links</h2>

                    <ul className={Styles.ul_Class}>
                        <li>
                            Home
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terms and Conditions
                        </li>
                        <li>
                            Bug Bounty
                        </li>
                        <li>
                            Our Students
                        </li>
                        <li>
                            Press Release
                        </li>

                    </ul>

                </div>

                <div >

                    <h2>Products</h2>

                    <ul className={Styles.ul_Class}>
                        <li>
                            Certificate Courses
                        </li>
                        <li>
                            Try Courses for Free
                        </li>
                        <li>
                            Job Bootcamp
                        </li>
                        <li>
                            Mock Interviews
                        </li>
                        <li>
                            Hire Talent
                        </li>
                    </ul>

                </div>

                <div >

                    <h2>Communities</h2>

                    <ul className={Styles.ul_Class}>
                        <li>
                            Code Ninjas Studio
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Events
                        </li>
                        <li>
                            Campus Ninjas
                        </li>
                        <li>
                            Scholarship Event
                        </li>
                        <li>
                            Placement Cell
                        </li>
                    </ul>

                </div>

            </div>

            <div className={Styles.details}>

                <div>
                    <FontAwesomeIcon icon={faMapMarker} size="lg" color="skyblue" />
                    <span>UNITECH CYBER PARK, Unit 007 - 008, GF, Tower A, Sector 39, Gurugram, Haryana 122003</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="green" />
                    <span>contact@codeninjas.com</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faPhone} size="lg" color="blue" />
                    <span>1800-123-3598</span>
                </div>

            </div>

        </div>
    )
}

export default Component_3;