package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
)

func main() {
	fileName := "拖曳對應圖像到右側.mp3"
	f, err := os.Open(fileName)
	if err != nil {
		url := fmt.Sprintf(
			"http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=%s&tl=%s",
			url.QueryEscape("拖曳對應圖像到右側"),
			"zh-TW")
		response, err := http.Get(url)
		if err != nil {
			log.Println(err)
			os.Exit(1)
		}
		defer response.Body.Close()

		output, err := os.Create(fileName)
		if err != nil {
			log.Println(err)
			os.Exit(1)
		}

		_, err = io.Copy(output, response.Body)
		log.Println(err)
	}

	f.Close()
}
