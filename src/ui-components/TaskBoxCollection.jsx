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
import TaskBox from "./TaskBox";
import { Collection } from "@aws-amplify/ui-react";
export default function TaskBoxCollection(props) {
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
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TaskBoxCollection")}
    >
      {(item, index) => (
        <TaskBox
          order={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TaskBox>
      )}
    </Collection>
  );
}
