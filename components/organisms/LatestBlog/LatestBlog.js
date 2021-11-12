import React from 'react';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

const LatestBlog = () => {
  return (
    <section>
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      {/* post list start */}
      <div>
        {/* post item start */}
        <div>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>01.01.2021</p>
          </div>
          <div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1633113212423-dc2828784c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
            </div>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum.
                </p>
                <p>Read in 3 minutes</p>
              </div>
              <div>
                <div>
                  <img src="/image.jpg" alt="" />
                </div>
                <p>John Doe</p>
              </div>
              <button>Read more</button>
            </div>
          </div>
        </div>
        {/* post item end */}
      </div>
      {/* post list end */}
    </section>
  );
};

export default LatestBlog;
