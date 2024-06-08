import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-center bg-cover bg-fixed text-white my-20 relative">
      <div className="absolute size-full bg-[#0000005d]"></div>
      <div className="pt-8 relative">
        <SectionTitle subHeading="check it out" heading="FROM OUR MENU"></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum!
              Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam
              nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-ghost border-0 border-white border-b-4 mt-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
