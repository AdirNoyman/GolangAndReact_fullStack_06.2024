package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {

	// TODO: set application configuration
	var app application

	// Read from command line

	// connect to database

	app.Domain = "example.com"

	log.Println("Starting application on port", port)

	http.HandleFunc("/", Hello)

	// start a web server
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)

	if err != nil {
		// If you can't start server -> die and print the error message
		log.Fatal(err)
	}

}
