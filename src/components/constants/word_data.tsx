// they should be in the server side
export const WordData: WordToURLMap = {
  爭: {
    imageUrl: "https://dl.dropbox.com/s/7mkzncfsaujsmvh/%E7%88%AD.png",
    videoUrl: "https://youtu.be/tu2MSmUwmYo",
    ancientUrl: "https://dl.dropbox.com/s/bvzmajkjtyh3jsx/%E7%88%AD%E9%80%8F.png",
    wordUrl:  "https://dl.dropbox.com/s/2ywyscbxpcuos9v/imageedit_1_8499965447.png",
    testAudio: "https://dl.dropbox.com/s/hm18l867a8i8sw9/test_3.mp3",
    autdioUrl: "https://dl.dropbox.com/s/0gjq1qciw82egtf/%E7%88%AD1.mp3",
    hints: [
      {
        audio: "https://dl.dropbox.com/s/0gjq1qciw82egtf/%E7%88%AD1.mp3"
      },
      {
        audio: "https://dl.dropbox.com/s/xbl0k546sgo45xp/%E7%88%AD2.mp3"
      }
    ],
    strokes: ["https://dl.dropbox.com/s/vpu2n28d71mjg9h/1.png", "https://dl.dropbox.com/s/mtkac7kla6zksqt/2.png"],
  },
  又: {
    imageUrl:
      "https://dl.dropbox.com/s/9juhxu304o3t3om/output-onlinepngtools%20%281%29.png",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    ancientUrl:
      "https://dl.dropbox.com/s/0t2z6rjbozcg0ip/%E5%8F%88%E9%80%8F.png",
    wordUrl: "https://dl.dropbox.com/s/hq7z1fu14qckyly/%E7%AC%AC%E4%B8%80%E7%89%88.jpg",
    testAudio: "https://dl.dropbox.com/s/xlrgvb0a6ndjhrn/test_1.mp3",
    autdioUrl: "https://dl.dropbox.com/s/nszkqapz8rc1j23/%E5%8F%88.mp3",
    hints: [
      {
        audio: "https://dl.dropbox.com/s/nszkqapz8rc1j23/%E5%8F%88.mp3"
      }
    ]
  },
  友: {
    imageUrl: "https://dl.dropbox.com/s/12l86gbashhlvwl/%E5%8F%8B.png",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    ancientUrl:
      "https://dl.dropbox.com/s/hrjus0v2s3flxsq/%20%E5%8F%8B%E9%80%8F.png",
    wordUrl: "https://dl.dropbox.com/s/hq7z1fu14qckyly/%E7%AC%AC%E4%B8%80%E7%89%88.jpg",
    testAudio: "https://dl.dropbox.com/s/lcjtedcaqgaricq/test_2.mp3",
    autdioUrl: "https://dl.dropbox.com/s/idktc7y4phmannq/%E5%8F%8B.mp3",
    hints: [
      {
        audio: "https://dl.dropbox.com/s/idktc7y4phmannq/%E5%8F%8B.mp3"
      }
    ],
  }
};

export type WordToURLMap = {
  [key: string]: URLData;
};

type URLData = {
  imageUrl: string;
  videoUrl: string;
  ancientUrl: string;
  autdioUrl: string;
  wordUrl: string;
  testAudio: string;
  hints: Array<Hint>;
  strokes?: Array<string>;
};

export type Hint = {
  audio: string;
  text?: string;
};
