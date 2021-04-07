import React from "react";

// they should be in the server side
export const WordData: WordToURLMap = {
  又: {
    imageUrl: "https://dl.dropbox.com/s/tmrkb8y57dlw1no/%E5%8F%88.png",
    testAudio: "https://dl.dropbox.com/s/xlrgvb0a6ndjhrn/test_1.mp3",
    hintAudio: ""
  },
  友: {
    imageUrl: "https://dl.dropbox.com/s/12l86gbashhlvwl/%E5%8F%8B.png",
    testAudio: "https://dl.dropbox.com/s/lcjtedcaqgaricq/test_2.mp3",
    hintAudio: ""
  },
  爭: {
    imageUrl: "https://dl.dropbox.com/s/qw9wqpbsj66ic2k/%E7%88%AD.png",
    testAudio: "https://dl.dropbox.com/s/hm18l867a8i8sw9/test_3.mp3",
    hintAudio: ""
  }
};

type WordToURLMap = {
  [key: string]: URLData;
};

type URLData = {
  imageUrl: string;
  testAudio: string;
  hintAudio: string;
};
