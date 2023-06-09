import React from "react";
import { useState, useEffect, useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Box, Image, Heading, Skeleton,Stack } from "@chakra-ui/react";
import { AppContext } from "../context/ContextProvider";
// import MultipleItems from "./MultipleItems";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Row = ({ name, fetched }) => {
  const [rowData, setRowData] = useState([]);
  const { setLoading, setErr, loading, err } = useContext(AppContext);
  //console.log(fetched)
  const [slider, setSlider] = useState(rowData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  let axiosData = async (fetched) => {
    try {
      setLoading(true);
      let data = await axios.get(fetched);
      //console.log(data)
      setRowData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErr(true);
      setLoading(false);
    }
  };

  //console.log(rowData)

  useEffect(() => {
    axiosData(fetched);
  }, [fetched]);
  return loading ? (

    <Stack>
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="20px" />
      </Stack>
   
  ) : (
    <Box>
      <Heading  textAlign="left" color="white" fontSize="21px" ml="20px">
        {name}
      </Heading>
      {/* <Button onClick={() => slider.slickNext()}>Next</Button>
      <Button onClick={() => slider.slickPrev()}>Pre</Button> */}
      <Slider ref={(sagar) => setSlider(sagar)} {...settings}>
        {rowData?.map((ele) => {
          return (
            <Image
              src={ele.image}
              alt="Caffe Latte"
              borderRadius="lg"
              variant="outline"
              objectFit="contain"
              w="100%"
              maxH="300px"
              // padding="20px"
              key={ele.id}
              ml={10}
              mr={10}
              mt={5}
              mb={5}
              transition="transform 450ms"
              _hover={{
                transform: "scale(1.14)",
                boxShadow: "xs",
                outline: "1px solid white",
                cursor: "pointer",
              }}
            />
          );
        })}
      </Slider>
    </Box>
  );
};

export default Row;
