package main

import (
	"database/sql"
	"fmt"
	"log"

	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

type Borough struct {
	id     int
	name   string
	search string
	image  string
}

func main() {

	port := "3000"

	// creates a new App named instance
	app := fiber.New()
	app.Use(recover.New())
	app.Use(logger.New())

	app.Static("/", "./build")

	godotenv.Load(".env")

	connStr := os.Getenv("PG_URI")

	// // connect to the database
	db, err := sql.Open("postgres", connStr)

	// // if there's an error
	if err != nil {
		log.Fatal(err)
	}

	// retrieve the boroughs from the database
	app.Get("/boroughs", func(c *fiber.Ctx) error {
		// var boroughs []Borough

		rows, err := db.Query("SELECT * from borough")
		defer rows.Close()
		if err != nil {
			log.Fatalln(err)
			c.JSON("An error occured when getting boroughs")
		}
		// for rows.Next() {
		// 	rows.Decode(&boroughs)
		// 	boroughs = append(boroughs)
		// }
		// return c.JSON()
		return c.SendString("This works")

	})

	// catches all errors that occur while running route handlers and middleware
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("This is an error")
	})

	log.Fatal(app.Listen(":3000"))

	app.Listen(":" + port)
	fmt.Println("Server on port 3000")
}
