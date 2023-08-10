import Styles from "../Styles/Component_3.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Component_3() {
    return (
        <div className={Styles.container}>

            <div className={Styles.logo}>
                <img src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png" />
            </div>

            <div className={Styles.container2}>

                <div className={Styles.quickLinks}>

                    <h2>Quick Links</h2>

                    <ul className={Styles.ul_Class}>
                        <li>
                            <a href="https://getpeppermint.co/">Home</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/faq/">FAQs</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/case-studies/">Case Studies</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/products/">Products</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/blog/">Blog</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>

                    </ul>

                </div>

                <div className={Styles.recentPosts}>

                    <h2>Recent Posts</h2>

                    <ul className={Styles.ul_Class}>
                        <li>
                            <a href="https://getpeppermint.co/material-handling-with-amrs/">Elevating Efficiency: Evolution of Material Handling with AMRs</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/autonomous-mobile-robots-the-future-of-efficient-material-handling/">Autonomous Mobile Robots: The Future of Efficient Material Handling</a>
                        </li>
                        <li>
                            <a href="https://getpeppermint.co/robotic-floor-scrubbers-the-future-of-airport-cleaning/">Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports</a>
                        </li>
                    </ul>

                </div>

            </div>

            <div className={Styles.details}>

                <p>Aubotz Labs Pvt Ltd</p>

                <p>CIN: U29100MH2019PTC324975</p>

                <div>
                    <FontAwesomeIcon icon={faMapMarker} size="lg" color="skyblue" />
                    <span>Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="green" />
                    <span>info@getpeppermint.co</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faPhone} size="lg" color="blue" />
                    <span>+91 89567 10044</span>
                </div>

            </div>

        </div>
    )
}

export default Component_3;