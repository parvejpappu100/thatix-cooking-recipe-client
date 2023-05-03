import React from "react";

const Blog = () => {
  return (
    <div className="lg:container mx-auto my-10 p-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
          <figure>
            <img className="h-96" src="https://i.ibb.co/CtD1Nb1/Blog1.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              What is the differences between uncontrolled and controlled
              components?
            </h2>
            <p>
              In React, there are two ways to handle form input fields:
              controlled and uncontrolled components. Uncontrolled components
              manage their own state internally and are typically used for
              simple forms, while controlled components have their state managed
              by React and provide more control over the behavior of the
              component. Controlled components are generally considered to be
              more robust and maintainable, especially for complex forms, as all
              of the form state is stored in the component's state, making it
              easy to manage and modify as needed. The choice between controlled
              and uncontrolled components depends on the specific requirements
              of your application.
            </p>
          </div>
        </div>
        <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
          <figure>
            <img className="h-96"  src="https://i.ibb.co/hmq955h/Blog5.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to validate React props using PropTypes?
            </h2>
            <p>
              PropTypes is a built-in package in React that provides a way to
              validate the props passed to a component. Using PropTypes can help
              catch errors early and ensure that components are used correctly.
              To use PropTypes, define the propTypes property on the component
              function and specify the expected types of the props. The
              isRequired keyword indicates that the prop is mandatory and will
              trigger a warning if not provided. PropTypes provides a variety of
              validators for different data types, including strings, numbers,
              booleans, functions, and more. By using PropTypes, you can improve
              the reliability and maintainability of your React components.
            </p>
          </div>
        </div>
        <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
          <figure>
            <img className="h-96" src="https://i.ibb.co/P13ggKR/blog3.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title my-5">
              What is the difference between nodejs and express js?
            </h2>
            <p>
              Node.js and Express.js are both popular frameworks used in
              JavaScript web development, but they serve different purposes.
              Node.js is a server-side runtime environment that allows
              developers to run JavaScript code outside of a web browser. It
              provides an event-driven, non-blocking I/O model that makes it
              easy to build scalable network applications. Express.js, on the
              other hand, is a web application framework built on top of
              Node.js. It provides a set of features and tools for building web
              applications, such as routing, middleware, and template engines.
            </p>
          </div>
        </div>
        <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
          <figure>
            <img className="h-96" src="https://i.ibb.co/G3Lp3Y4/Blog4.webp" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
            A custom hook is a reusable function in React that encapsulates complex logic and state management into a single, reusable hook. Custom hooks are a way to share logic between components without duplicating code or relying on higher-order components or render props.Creating a custom hook can help make code more modular, easier to read, and simpler to maintain. By abstracting away complex functionality into a single, reusable hook, developers can more easily manage the complexity of their code and reduce the amount of boilerplate code needed in their components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
