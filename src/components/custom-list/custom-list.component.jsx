import React from "react";
import { List, Paper } from "@material-ui/core";
import ItemListComponet from "./item.list.componet";

const CustomListComponent = ({ categories }) => {
  return (
    <Paper style={{ maxHeight: 600, width: "400px", overflow: "auto" ,}}>
      <List style={{display:'grid', gridGap:'20px'}}>
        {categories.map((c) => (
          <ItemListComponet id={c.id} itemName={c.categoryName} />
        ))}
      </List>
    </Paper>
  );
};

export default CustomListComponent;
