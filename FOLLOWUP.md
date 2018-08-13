# General:

### Q) What libraries did you add to the frontend? What are they used for?

I added there following:

- react-bootstrap - used for the layout.
- react-vis - a charting library used for the graph.


### Q) How long, in hours, did you spend on the test?

I spend around 6 hours on the test.

### Q) If you had more time, what further improvements or new features would you add?

If I had more time I would improve the look and feel of the graph. I'd add the ability to turn on/off the various data points, add tooltip and add the ability to zoom in/out.

I'd also add more unit test around the dispatcher and the connected components.

### Q) Which parts are you most proud of? And why?

I'm most proud of the general structure and separation of the React components. I think they are seperated into a good set of reusable components.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent the longest on the charting portion of the test. It took me quite a while to find a charting library that I felt was suitable while being flexible. Some of the other libraries I found either did not plot time series, did not look nice or were difficult to work with using React.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them.

The test overall was enjoyable while it covered a lot of different aspects to React/Redux.

## Instructions

The web server is build using .dotnet core to build/run the webserver run the following commands:

```
frontend-test> dotnet build
frontend-test/src/FrontendWeb/ClientApp> npm install
frontend-test/src/FrontendWeb> dotnet run
```

The webserver will start on port 5000 and going to http://localhost:5000 should render the website.

There are three options for getting the data which can be specified through a query string `mode` these are `api`, `fake` and `cors`. `api` makes a call from the webserver to the api, `fake` is the web server returing some fake data and `cors` by passes the web server and the client app goes to the api via CORS anywhere. Also, you can run the ClientApp using `npm run` and pass in the query string `?mode=cors` to bypass the web server all together.


`