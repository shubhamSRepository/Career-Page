import Styles from "../Styles/Component_2.module.scss";

function Component_2
() {
    return (
        <div className={Styles.container}>
            <div className={Styles.hiringImg}>
                <img src="https://t4.ftcdn.net/jpg/02/81/82/25/360_F_281822599_0DZJKfNlnQRFQq6dCPZSyzKXFgNCt7Jk.jpg" />
            </div>

            <div className={Styles.heading}>
                <p>Current Openings</p>
            </div>

            <div className={Styles.cardContainer}>

                <div className={Styles.card}>

                    <div className={Styles.openingImg}>
                        <img src="https://www.zdnet.com/a/img/resize/62aba7026e29813a4316681c24993e1dcac1bab5/2021/07/19/865e8155-eece-4ada-9b67-e21679c8d237/software-engineering-shutterstock-699634498.jpg?auto=webp&width=1280" />
                    </div>

                    <div className={Styles.openings}>

                        <h2>
                            Software Development Engineer II (SDE II)
                        </h2>

                        <ul>
                            <li>Python, API, MongoDB</li>
                            <li>Dockers, Flutter</li>
                            <li>Mobile/Web App Development</li>
                        </ul>
                    </div>

                </div>

                <div className={Styles.card}>

                    <div className={Styles.openingImg}>
                        <img src="https://edvoy-strapi-assets.s3.ap-south-1.amazonaws.com/best_colleges_for_robotics_engineering_046576669c.jpg" />
                    </div>

                    <div className={Styles.openings}>
                        <h2>
                            Robotics Engineer I (RE - I (PERCEPTION))
                        </h2>

                        <ul>
                            <li>C++, ROS1/ROS2,</li>
                            <li>SLAM, OpenCV.</li>
                            <li>CUDA, Pytorch.</li>
                            <li>TensorFlow, Navigation</li>
                        </ul>
                    </div>

                </div>

                <div className={Styles.card}>

                    <div className={Styles.openingImg}>
                        <img src="https://www.supplychainbrain.com/ext/resources/2022/12/13/VISIBILITY-IT-DIGITAL-TRANSFORMATION-PLATFORM-TECHNOLOGY-iStock-greenbutterfly-1363746705.jpg?t=1670971234&width=1031" />
                    </div>

                    <div className={Styles.openings}>
                        <h2>
                            Supply Chain Engineer (SCE I)
                        </h2>

                        <ul>
                            <li>Lean Six Sigma</li>
                            <li>Supply chain management</li>
                            <li>Inventory</li>
                            <li>JIT</li>
                        </ul>
                    </div>

                </div>


                <div className={Styles.bottomLine}>
                    <h3>
                        “If you are excited about the prospect of building awesome tech and robots,
                        we’d love to hear from you”. Please email us at 
                        <span className={Styles.email}> hr@getpeppermint.co</span>
                    </h3>
                </div>

            </div>

        </div>
    )
}

export default Component_2
;