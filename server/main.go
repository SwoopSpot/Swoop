package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
	"github.com/gofiber/fiber/v2/middleware/recover"

)

func main() {
	port := "3000"

	// This method creates a new App named instance
    app := fiber.New()
		app.Use(recover.New())

	// It’s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them.
    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World 👋!")
    })

	log.Fatal(app.Listen(":3000"))

	app.Listen(":" + port)
	fmt.Println("Server on port 3000")
}

