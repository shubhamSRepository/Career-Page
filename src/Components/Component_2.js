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
                            Software Development Engineer 
                        </h2>

                        <ul>
                            <li>Python, API, MongoDB</li>
                            <li>Dockers, Flutter</li>
                            <li>Mobile/Web App Development</li>
                        </ul>

                    </div>

                    <button className={Styles.applyBtn}>Apply</button>

                </div>

                <div className={Styles.card}>

                    <div className={Styles.openingImg}>
                        <img src="https://www.spec-india.com/wp-content/uploads/2023/01/Banner-Hire-Node-Developer.png" />
                    </div>

                    <div className={Styles.openings}>
                        <h2>
                            Node Js Instructor
                        </h2>

                        <ul>
                            <li>Single-threaded Event Loop</li>
                            <li>SLAM, OpenCV</li>
                            <li>Built-in Package Manager (npm)</li>
                            <li>V8 JavaScript Engine</li>
                        </ul>

                    </div>

                    <button className={Styles.applyBtn}>Apply</button>

                </div>

                <div className={Styles.card}>

                    <div className={Styles.openingImg}>
                        <img src="https://careersblog.enterprise.co.uk/wp-content/uploads/2015/10/iStock_000062258734_Medium.jpg" />
                    </div>

                    <div className={Styles.openings}>
                        <h2>
                            Student Mentor
                        </h2>

                        <ul>
                            <li>Course Progess Updates</li>
                            <li>Motivate Students</li>
                            <li>Doubt Resolution</li>
                        </ul>

                    </div>

                    <button className={Styles.applyBtn}>Apply</button>

                </div>



            </div>

        </div>
    )
}

export default Component_2
    ;