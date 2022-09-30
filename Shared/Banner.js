import { Image, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://images.pexels.com/photos/2219801/pexels-photo-2219801.jpeg",
      "https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <VStack flex={1}>
        <VStack style={styles.swiper}>
          <Swiper
            showsButtons={false}
            style={{ height: width / 2 }}
            autoplay
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  alt={"banner"}
                  key={item}
                  resizeMode={"cover"}
                  style={styles.imageBanner}
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
        </VStack>
        <VStack h={5}></VStack>
      </VStack>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  swiper: {
    width: width - 32,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width,
    borderRadius: 16,
  },
});
