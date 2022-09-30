import React, { useEffect, useState } from "react";
import {
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import { Text, View } from "react-native";
import ProductList from "./ProductList";
import { Ionicons } from "@expo/vector-icons";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require("../../assets/data/products.json");
const categoriesData = require("../../assets/data/category.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initailState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(categoriesData);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState([]);
    };
  }, []);

  const searchProducts = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  /// category
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initailState), setActive(true)]
        : [
            setProductsCtg(products.filter((i) => i.category.$oid === ctg)),
            setActive(true),
          ];
    }
  };

  return (
    <VStack bgColor={"white"}>
      <HStack alignItems={"center"} style={{ margin: 16, marginBottom: 0 }}>
        <Icon
          as={Ionicons}
          name="search"
          position={"absolute"}
          size={6}
          left={2}
          zIndex={1}
        />
        <Input
          w={"100%"}
          px={10}
          placeholder="Search"
          onFocus={openList}
          onChangeText={(text) => searchProducts(text)}
        />
        {focus && (
          <Icon
            as={Ionicons}
            name="close"
            position={"absolute"}
            size={6}
            right={2}
            zIndex={1}
            onPress={onBlur}
          />
        )}
      </HStack>

      {focus === true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <ScrollView style={{ margin: 16 }} showsVerticalScrollIndicator={false}>
          <View>
            <VStack>
              <Banner />
            </VStack>
            <VStack>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </VStack>
            <Heading my={4}>Product</Heading>
            {productsCtg.length > 0 ? (
              <View>
                <ProductList products={productsCtg} />
              </View>
            ) : (
              <VStack>
                <Text>No Product found</Text>
              </VStack>
            )}
          </View>
        </ScrollView>
      )}
    </VStack>
  );
};

export default ProductContainer;
