// import data from "../popularCourse.js";
import { popularCourse } from "../data.js";
import { faqSect } from "../data.js";
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

// export default HomeScreen;

export const faqScreen = {
  render: () => {
    const { faq } = faqSect;
    return `
    <div class="container faqs__container">
    ${faq
      .map(
        (ask) => ` 
          <article class="faq">
          <div class="faq__icon"><i class="fa fa-plus"></i></div>
          <div class="question__answer">
            <h4>${ask.question}</h4>
            <p>
              ${ask.detail}
            </p>
          </div>
        </article>
      `
      )
      .join("\n")}
    `;
  },
};
