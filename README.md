# URL shortener API

Live application with list of all shortened links: **[https://url-shortner-yash1206.herokuapp.com/](https://url-shortner-yash1206.herokuapp.com/)**

This is a url shortener API, build with Ruby On Rails 6.

## [](https://github.com/Yash1206/url-shortener#cloning-and-usage)Cloning and Usage

- Clone this repo to your local system.

- Execute `rails db:create` to create the database.

- Execute `rails db:migrate` to migrate the database and create tables.

## [](https://github.com/Yash1206/url-shortener#testing-the-app)Testing the app

We have rake tasks to mimic the API calls, to test the app run the following commands on your terminal.

- Start your server with `rails server`.

To shorten a URL run following rake task.

- `rake app:encode URL=https://test.com`

Result will be similar:

- The shortened url of **[https://test.com](https://test.com)** is **[https://short.is/tkLo2367](https://short.is/tkLo2367)**

To get full_url from short_url run the following rake task.

- `rake app:decode SHORTURL=https://short.is/tkLo2367`

Result will be similar:

- The original url of short url **[https://short.is/tkLo2367](https://short.is/tkLo2367)** is **[https://test.com](https://test.com)**

## [](https://github.com/Yash1206/url-shortener#endpoints)EndPoints

Shorten URL:

- EndPoint - `/url`, POST

- Params - { "url": { "full_url": "https://url.com" } }

Get Full URL from shortened one:

- EndPoint - `/show`, GET

- Params - { "url": { "short_url": "https://short.is/#{hex}" } }

### Implementation

- All the Urls have an attribute named `pinned` which is `false` by default.

- When a user clicks on a pin, the `pinned` attribute changes to `true`.

- The list is ordered in descending order according to their `updated_at` time.

- The last pinned Url will move to the top.

- When clicked on the pin again, the Url will move below the pinned Urls.
