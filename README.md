# Eat-Da-Burger!

This application lets users submit a burger name, devour a burger, and make another.

## Motivation

This application utilizes MySQL, Node, Express, Handlebars, and an ORM. MySQL is used to query and route data into the app, and Handlebars generates the HTML.

## Usage

Eat-Da-Burger! is live [here](https://nabeek-eat-da-burger.herokuapp.com/).

## Screenshot

![eat-da-burger](https://user-images.githubusercontent.com/4752937/83184322-860ad300-a0e6-11ea-9f58-07e71e3c7ba4.gif)

## Tech Used

[Bulma](https://bulma.io/)\
[Express](https://expressjs.com/)\
[Handlebars](https://handlebarsjs.com/)\
[MySQL](https://www.mysql.com/)\
[Node](https://nodejs.org/en/)

## Code Examples

One click listener function is used to alternate between the non-/devoured status, with color by class differentiating them.

```js
$(function () {
    $(".change-status").on("click", function (event) {
      let id = $(this).data("id");
      let status = $(this).data("status");

      let newStatus = {
        devoured: status === 0 ? 1 : 0    // Ternary operator enables same click listener to switch devour status
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function () {
          location.reload();
        }
      );
    });
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Roadmap

Not explicitly part of the assignment, but it would make sense to include an option/button to delete individual burgers from the db.

## License

MIT © [nabeek](https://github.com/nabeek)
