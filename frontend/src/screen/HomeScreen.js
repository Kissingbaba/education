import data from "../data.js";

const HomeScreen = {
  render: () => {
    const { popular } = data;
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

export default HomeScreen;
