import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { topCategories } from "../utils/constants";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [topSelectedCate, settopSelectedCate] = useState("All");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 }, bgcolor:'#fff'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

       <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, bgcolor:'#fff' }}>
        <Stack direction="row" spacing={2}>

        {topCategories.map((topcategory) => (
      <button
        className="top-category-btn"
        onClick={() => setSelectedCategory(topcategory.name)}
        style={{
          background: topcategory.name === settopSelectedCate && "#f3f3f3",
          color: "#000",
        }}
        key={topcategory.name}
      >
        
        <span style={{ opacity: topcategory.name === settopSelectedCate ? "1" : "0.8" }}>
          {topcategory.name}
        </span>
      </button>
    ))}
        </Stack>
        <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#000" }}>
          {selectedCategory} <span style={{ color: "#000" }}>videos</span>
  </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
