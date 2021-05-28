import React from "react";
import Navigation from "../Navigation";
import DogImage from "../DogImage";
import PropTypes from "prop-types";
import "./style.css";

const defaultImageData = {
  dogBreedName: "Random",
  url: "https://images.dog.ceo/breeds/hound-walker/n02089867_1790.jpg",
  classNameList: "dog-image",
};

const listOfDogs = [
  {
    name: "Akita",
    url: "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
  },
  {
    name: "Chow",
    url: "https://images.dog.ceo/breeds/chow/n02112137_16817.jpg",
  },
  {
    name: "Boxer",
    url: "https://images.dog.ceo/breeds/boxer/n02108089_5977.jpg",
  },
  {
    name: "Husky",
    url: "https://images.dog.ceo/breeds/husky/n02110185_4294.jpg",
  },
  { name: "Mix", url: "https://images.dog.ceo/breeds/mix/archie_02.jpg" },
  {
    name: "Setter Iirish",
    url: "https://images.dog.ceo/breeds/setter-irish/n02100877_6160.jpg",
  },
  {
    name: "Otterhound",
    url: "https://images.dog.ceo/breeds/otterhound/n02091635_1621.jpg",
  },
];
const firstKey = 100;
const classNameListNavItem = "dog-nav-item";
const classNameListImgItem = "dog-image";

const dataBaseToRenderImages = listOfDogs.map((item, index) => {
  return [
    String(firstKey * (index + 1)),
    String(firstKey + 1),
    classNameListNavItem,
    item.name,
    item.url,
    classNameListImgItem,
  ];
});

const imageDataBase = dataBaseToRenderImages.map(
  ([
    key,
    id,
    classNameListNavItem,
    dogBreedName,
    url,
    classNameListImgItem,
  ]) => {
    return {
      key: key,
      data: {
        id: id,
        classNameList: classNameListNavItem,
        imageData: {
          dogBreedName: dogBreedName,
          url: url,
          classNameList: classNameListImgItem,
        },
      },
    };
  }
);

class AppDogsImg extends React.Component {
  state = {
    imageData: defaultImageData,
  };

  static propTypes = {
    data: PropTypes.shape(),
  };

  static defaultProps = {
    data: {},
  };

  setUrlDataToParent = async (imageData) => {
    await this.setState((prevState) => ({
      ...prevState,

      imageData: imageData,
    }));
  };

  render() {
    const { imageData } = this.state;

    return (
      <>
        <Navigation>
          {imageDataBase.map(({ key, data }) => (
            <Navigation.Item
              key={key}
              data={data}
              functions={{ setUrlDataToParent: this.setUrlDataToParent }}
            />
          ))}
        </Navigation>
        <div className="dog-image-box">
          <DogImage data={imageData} />
        </div>
      </>
    );
  }
}

export default AppDogsImg;
