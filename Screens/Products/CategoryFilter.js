import { Center, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../AppStyles";

const CategoryFilter = ({
  categories,
  categoryFilter,
  productsCtg,
  active,
  setActive,
}) => {
  return (
    <VStack my={2} h={10}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            categoryFilter("all"), setActive(-1);
          }}
        >
          <Center
            style={[
              active == -1 ? styles.activePill : styles.inActivePill,
              { marginRight: 5 },
              styles.pill,
            ]}
          >
            <Text
              style={active == -1 ? styles.activeText : styles.inActiveText}
            >
              All
            </Text>
          </Center>
        </TouchableOpacity>
        {categories.map((item) => (
          <TouchableOpacity
            key={item._id.$oid}
            onPress={() => {
              categoryFilter(item._id.$oid),
                setActive(categories.indexOf(item));
            }}
          >
            <Center
              style={[
                active == categories.indexOf(item)
                  ? styles.activePill
                  : styles.inActivePill,
                { marginRight: 5 },
                styles.pill,
              ]}
            >
              <Text
                style={
                  active == categories.indexOf(item)
                    ? styles.activeText
                    : styles.inActiveText
                }
              >
                {item.name}
              </Text>
            </Center>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </VStack>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 16,
  },
  activePill: {
    backgroundColor: colors.primary[100],
  },
  inActivePill: {
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
  activeText: {
    color: "white",
  },
  inActiveText: {
    color: colors.primary[100],
  },
});
