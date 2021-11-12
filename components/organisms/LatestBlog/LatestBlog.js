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
            <h4>Post title</h4>
            <p>Publish date</p>
          </div>
          <div>
            <div>image</div>
            <div>
              <div>
                <p>Post short</p>
                <p>Reading time</p>
              </div>
              <div>
                <div>Author's photo</div>
                <p>Author</p>
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
