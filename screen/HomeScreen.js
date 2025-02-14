// import data from "../popularCourse.js";
import { popularCourse } from "../data.js";
import { faqSect } from "../data.js";

// popular courses
export const HomeScreen = {
  render: () => {
    const { popular } = popularCourse;
    return `
      <div class="container courses__container">
      ${popular
        .map(
          (course) => `
          <article class="course">
            <div class="course__image">
              <img src="${course.image}" alt="" />
            </div>
            <div class="course__info">
              <h4>${course.name}</h4>
              <p>
                ${course.detail}
              </p>
              <a href="" class="btn btn-primary">Learn More</a>
            </div>
          </article>
        `
        )
        .join("\n")}
      
      `;
  },
};

// end of popular courses

// start of frequently asked questions
// export const faqScreen = {
//   render: () => {
//     const { faq } = faqSect;
//     return `
//     ${faq
//       .map(
//         (ask) => `

//       `
//       )
//       .join("\n")}
//     `;
//   },
// };

// end of frequently asked question
