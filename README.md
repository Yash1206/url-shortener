# URL shortener API

This is a url shortener API, build with Ruby On Rails 6.

## [](https://github.com/Yash1206/url-shortener#cloning-and-usage)Cloning and Usage

-   Clone this repo to your local system.
-   Execute  `rails db:create`  to create the database.
-   Execute  `rails db:migrate`  to migrate the database and create tables.

## [](https://github.com/Yash1206/url-shortener#testing-the-app)Testing the app

We have rake tasks to mimic the API calls, to test the app run the following commands on your terminal.

-   Start your server with  `rails server`.

To shorten a URL run following rake task.

-   `rake app:encode URL=https://test.com`

Result will be similar:

-   The shortened url of  **[https://test.com](https://test.com)**  is  **[https://short.is/tkLo2367](https://short.is/tkLo2367)**

To get full_url from short_url run the following rake task.

-   `rake app:decode SHORTURL=https://short.is/tkLo2367`

Result will be similar:

-   The original url of short url  **[https://short.is/tkLo2367](https://short.is/tkLo2367)**  is  **[https://test.com](https://test.com)**

## [](https://github.com/Yash1206/url-shortener#endpoints)EndPoints

Shorten URL:

-   EndPoint -  `/url`, POST
-   Params - { "url": { "full_url": "https://url.com" } }

Get Full URL from shortened one:

-   EndPoint -  `/show`, GET
-   Params -  { "url": { "short_url": "https://short.is/#{hex}" } }

