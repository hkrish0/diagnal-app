## Description

Diagnal Task - METADATA SCRAPING FROM A GIVEN WEB PAGE URL

Built a RESTful API in NestJs Framework and pushed to AWS Lmabda.Used Serverless
framework for deployment.

## Stack Used

Node JS

Framework Used - Nest JS

## Running the app

AWS Lambda Endpoint for POST Request

https://7fltjkbmt7.execute-api.us-east-1.amazonaws.com/dev/scrape

POST application/json { "url:" "http://www.example.com" }

## Source code Details

Created Separate module Scrape inside the nestjs app for the
functionality.Implemented caching through Nestjs in-cache memory mechanism.

Module Location - /src/scrape
