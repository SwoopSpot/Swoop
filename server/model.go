package model

import (
	"database/sql"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"

)

func Router() {
	config := getConfig()

	// replace with env postgresql string 
	db, err := sql.Open("postgres", config.uri)
	if err != nil {
		// if it fails to connect, trigger this error
		log.Fatal(err)
	}

	return router
}