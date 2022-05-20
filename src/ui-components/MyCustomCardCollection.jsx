/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { OrderTable } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MyCustomCard from "./MyCustomCard";
import { Collection } from "@aws-amplify/ui-react";
export default function MyCustomCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: OrderTable,
        }).items;
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "MyCustomCardCollection")}
    >
      {(item, index) => (
        <MyCustomCard
          Card={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MyCustomCard>
      )}
    </Collection>
  );
}
