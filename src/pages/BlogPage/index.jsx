import HeaderBanner from "../../components/HeaderBanner"
import RecentPostsFunctionality from "../../components/RecentPostsFunctionality"
import "./style.scss"
import BlogPostComponent from "../../components/BlogPostComponent"
import image1 from "../../assets/blogImage/image1.png"
import image2 from "../../assets/blogImage/image2.png"
import image3 from "../../assets/blogImage/image3.png"
import FeaturesSection from "../../components/FeaturesSection/index"

const BlogPage = () => {
  return (
    <>
      <HeaderBanner />
      <div className="container-div">
        <div className="top-div">
          <div className="blog-post-list">
            <BlogPostComponent
              coverImage={image1}
              author="Admin"
              date="14 Oct 2022"
              category="Wood"
              title="Going all-in with millennial design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            />
            <BlogPostComponent
              coverImage={image2}
              author="Admin"
              date="14 Oct 2022"
              category="Handmade"
              title="Exploring new ways of decorating"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            />
            <BlogPostComponent
              coverImage={image3}
              author="Admin"
              date="14 Oct 2022"
              category="Wood"
              title="Handmade pieces that took time to make"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            />
          </div>

          <div className="right-div">
            <div className="resent-post-div">
              <RecentPostsFunctionality />
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </>
  )
}

export default BlogPage
