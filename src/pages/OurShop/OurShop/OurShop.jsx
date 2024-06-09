import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopBanner from "../../../assets/shop/banner2.jpg";
import MenuTab from "../../Menu/MenuTab/MenuTab";
import Cover from "../../Shared/Cover/Cover";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const [tabIndex, setTabIndex] = useState(category === "offered" ? 0 : categories.indexOf(category));
  console.log(category);
  return (
    <div>
      <Helmet>
        <title>Our Shop | Bistro Boss</title>
      </Helmet>

      <Cover img={shopBanner} title="OUR SHOP"></Cover>

      <div className="my-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <span className="uppercase">Salad</span>
            </Tab>
            <Tab>
              <span className="uppercase">pizza</span>
            </Tab>
            <Tab>
              <span className="uppercase">soups</span>
            </Tab>
            <Tab>
              <span className="uppercase">desserts</span>
            </Tab>
            <Tab>
              <span className="uppercase">drinks</span>
            </Tab>
          </TabList>

          <TabPanel>
            <MenuTab category={"salad"}></MenuTab>
          </TabPanel>
          <TabPanel>
            <MenuTab category={"pizza"}></MenuTab>
          </TabPanel>
          <TabPanel>
            <MenuTab category={"soup"}></MenuTab>
          </TabPanel>
          <TabPanel>
            <MenuTab category={"dessert"}></MenuTab>
          </TabPanel>
          <TabPanel>
            <MenuTab category={"drinks"}></MenuTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
