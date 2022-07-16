import styles from "./styles.module.scss";
function About() {
  return (
    <div className={styles.about}>
      <h2>Tarfin Javascript Developer Task</h2>
      <br />
      Your task is to build a basic table component with search, pagination, and
      sort features.
      <br />
      <br />
      <span>This project was created with Vite.</span>
      <span> Use npm run dev to run the development server.</span>
      <br />
      <br />
      <p>
        Receive events from Ticketmaster API
        (https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)
        with search keyword (cinema, football, etc.)
        (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
        and show API results on your table component. Create event detail page
        with event details including title, price, place, etc. Then add show
        detail button or icon to the table component for routing to the event
        detail page.
      </p>
      <br />
      <b>Project requirements</b>
      <ul>
        <li>
          • Build your table component from scratch. You can't use any existing
          React component for this project.
        </li>
        <li>
          • The component must have search capabilities. (Split your components
          into smaller components.)
        </li>
        <li>The component must have pagination.</li>
        <li>
          • You should add an event detail page. Don't forget to add a show
          detail action to the table component.
        </li>
        <li>
          • You must write tests for your code. (We recommend to use Jest for
          tests)
        </li>
        <li>
          • You can add sorting feature for the table component. This feature is
          not a must but it is a big bonus. (If you decide to implement the
          sorting feature, make sure that the sorting mechanism doesn't need any
          other API requests.)
        </li>
        <li>• You can use bootstrap or tailwindcss as CSS framework.</li>
        <li>
          • Axios or any other alternatives can be used for HTTP requests.
        </li>
      </ul>
      <span>Submitting the finished task</span>
      <br />
      <br />
      <span>
        When you are done, invite me to your project as a collaborator. (@frkcn)
      </span>
      <br />
      <br />
      <span>We will get back to you as soon as possible.</span>
      <br />
      <br />
      <span>Thanks! 🚀</span>
    </div>
  );
}

export default About;
