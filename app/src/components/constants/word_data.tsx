import React from "react";

// they should be in the server side
export const WordData: WordToURLMap = {
  又: {
    imageUrl: "https://dl.dropbox.com/s/tmrkb8y57dlw1no/%E5%8F%88.png",
    ancientUrl:
      "https://dl.dropbox.com/s/kwmx6u6f4jwunyr/%E5%8F%88%E5%8F%A4.jpg",
    testAudio: "https://dl.dropbox.com/s/xlrgvb0a6ndjhrn/test_1.mp3",
    hintAudio: "https://dl.dropbox.com/s/ob7z5ihqzqkei0w/hint_1.mp3"
  },
  友: {
    imageUrl: "https://dl.dropbox.com/s/12l86gbashhlvwl/%E5%8F%8B.png",
    ancientUrl:
      "https://dl.dropbox.com/s/hont43zqlzwd139/%E5%8F%8B%08%E5%8F%A4.jpg",
    testAudio: "https://dl.dropbox.com/s/lcjtedcaqgaricq/test_2.mp3",
    hintAudio: "https://d1.dropbox.com/s/c5yc7rzq8j1jdbq/hint_2.mp3"
  },
  爭: {
    imageUrl: "https://dl.dropbox.com/s/qw9wqpbsj66ic2k/%E7%88%AD.png",
    ancientUrl:
      "https://dl.dropbox.com/s/40ok4uypvdk3sxx/%E7%88%AD%E5%8F%A4.jpg",
    testAudio: "https://dl.dropbox.com/s/hm18l867a8i8sw9/test_3.mp3",
    hintAudio: "https://d1.dropbox.com/s/1izylwd16fi7jvh/hint_3.mp3"
  }
};

type WordToURLMap = {
  [key: string]: URLData;
};

type URLData = {
  imageUrl: string;
  ancientUrl: string;
  testAudio: string;
  hintAudio: string;
};
