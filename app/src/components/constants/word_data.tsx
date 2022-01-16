// they should be in the server side
export const WordData: WordToURLMap = {
  爭: {
    imageUrl: "https://dl.dropbox.com/s/qw9wqpbsj66ic2k/%E7%88%AD.png",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    ancientUrl:
      "https://dl.dropbox.com/s/bvzmajkjtyh3jsx/%E7%88%AD%E9%80%8F.png",
    testAudio: "https://dl.dropbox.com/s/hm18l867a8i8sw9/test_3.mp3",
    hints: [
      {
        audio: "https://dl.dropbox.com/s/0gjq1qciw82egtf/%E7%88%AD1.mp3"
      },
      {
        audio: "https://dl.dropbox.com/s/xbl0k546sgo45xp/%E7%88%AD2.mp3"
      }
    ]
  },
  又: {
    imageUrl:
      "https://dl.dropbox.com/s/9juhxu304o3t3om/output-onlinepngtools%20%281%29.png",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    ancientUrl:
      "https://dl.dropbox.com/s/0t2z6rjbozcg0ip/%E5%8F%88%E9%80%8F.png",
    testAudio: "https://dl.dropbox.com/s/xlrgvb0a6ndjhrn/test_1.mp3",
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
    testAudio: "https://dl.dropbox.com/s/lcjtedcaqgaricq/test_2.mp3",
    hints: [
      {
        audio: "https://dl.dropbox.com/s/idktc7y4phmannq/%E5%8F%8B.mp3"
      }
    ]
  }
};

export type WordToURLMap = {
  [key: string]: URLData;
};

type URLData = {
  imageUrl: string;
  videoUrl: string;
  ancientUrl: string;
  testAudio: string;
  hints: Array<Hint>;
};

export type Hint = {
  audio: string;
  text?: string;
};
