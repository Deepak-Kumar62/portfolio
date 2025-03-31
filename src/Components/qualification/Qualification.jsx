import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleQualification, setToggleQualification] = useState(1);

  const toggleTab = (index) => {
    setToggleQualification(index);
  };

  return (
    <section className="section qualification" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button__flex"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className="qualification__content"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Jodhpur Institute of Engineering and Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  MLSM College, Darbhanga
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matric</h3>
                <span className="qualification__subtitle">
                  Vidyapati High School, Bisfi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );








  // return (
  //   <section className="section qualification" id="qualification">
  //     <h2 className="section__title">Qualification</h2>
  //     <span className="section__subtitle">My Personal Journey</span>
  //     <div className="qualification__container container">
  //       <div className="qualification__tabs">
  //         <div
  //           className={
  //             toggleQualification === 1
  //               ? "qualification__button button__flex qualification__active"
  //               : "qualification__button button__flex"
  //           }
  //           onClick={() => toggleTab(1)}
  //         >
  //           <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
  //           Education
  //         </div>
  //         <div
  //           className={
  //             toggleQualification === 2
  //               ? "qualification__button button__flex qualification__active"
  //               : "qualification__button button__flex"
  //           }
  //           onClick={() => toggleTab(2)}
  //         >
  //           <i className="uil uil-briefcase-alt qualification__icon"></i>
  //           Experience
  //         </div>
  //       </div>
  //       <div className="qualification__sections">
  //         <div
  //           className={
  //             toggleQualification === 1
  //               ? "qualification__content qualification__content-active"
  //               : "qualification__content"
  //           }
  //         >
  //           <div className="qualification__data">
  //             <div>
  //               <h3 className="qualification__title">B.Tech</h3>
  //               <span className="qualification__subtitle">
  //                 Jodhpur Institute of Engineering and Technology
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2022 - Present
  //               </div>
  //             </div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //           </div>

  //           <div className="qualification__data">
  //             <div></div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //             <div>
  //               <h3 className="qualification__title">Intermediate</h3>
  //               <span className="qualification__subtitle">
  //                 MLSM College, Darbhanga
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2019 - 2021
  //               </div>
  //             </div>
  //           </div>

  //           <div className="qualification__data">
  //             <div>
  //               <h3 className="qualification__title">Matric</h3>
  //               <span className="qualification__subtitle">
  //                 Vidyapati High School, Bisfi
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2018 - 2019
  //               </div>
  //             </div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //           </div>

  //           {/* <div className="qualification__data">
  //             <div></div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //             <div>
  //               <h3 className="qualification__title">UX Expert</h3>
  //               <span className="qualification__subtitle">
  //                 Spain - Institute
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2017 - 2018
  //               </div>
  //             </div>
  //           </div> */}
  //         </div>

  //         <div className={
  //           toggleQualification === 2
  //             ? "qualification__content qualification__content-active"
  //             : "qualification__content"
  //         }>
  //           <div className="qualification__data">
  //             <div>
  //               <h3 className="qualification__title">Product Designer</h3>
  //               <span className="qualification__subtitle">
  //                 Microsoft - Spain
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2020 - Present
  //               </div>
  //             </div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //           </div>

  //           <div className="qualification__data">
  //             <div></div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //             <div>
  //               <h3 className="qualification__title">UX Designer</h3>
  //               <span className="qualification__subtitle">
  //                 Apple Inc - Spain
  //               </span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2020 - 2021
  //               </div>
  //             </div>
  //           </div>

  //           <div className="qualification__data">
  //             <div>
  //               <h3 className="qualification__title">Web Designer</h3>
  //               <span className="qualification__subtitle">Figma - Spain</span>
  //               <div className="qualification__calender">
  //                 <i className="uil uil-calendar-alt"></i> 2018 - 2020
  //               </div>
  //             </div>
  //             <div>
  //               <span className="qualification__rounder"></span>
  //               <div className="qualification__line"></div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Qualification;
