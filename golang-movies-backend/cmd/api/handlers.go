package main

import (
	"fmt"
	"net/http"
)

func Hello(w http.ResponseWriter, r *http.Request) {

	fmt.Fprintf(w, "<h1>Hello Adiros 🤓</h1>")
}
