# Description

Test [description](DESCRIPTION.md)

# Installing

`$ npm install`

# Running Server

`$ npm start`

# Accessing Api

Now open browser in http://localhost:4000

# Routes

Obs: body, params or query strings with (?) are optional.

<table>
  <thead>
    <th>Description</th>
    <th>Method</th>
    <th>Url</th>
    <th>QueryString</th>
    <th>Body</th>
    <th colspan="2">Obs</th>
  </thead>
  <tbody>
    <tr>
      <td>Get all cities</td>
      <td>GET</td>
      <td>cities</td>
      <td>none</td>
      <td>none</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Get all cities that has available weathers, with weathers</td>
      <td>GET</td>
      <td>weather/cities</td>
      <td>none</td>
      <td>none</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Get a city with weathers</td>
      <td>GET</td>
      <td>cities/:id/weather</td>
      <td>none</td>
      <td>none</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Get a city with weathers between dates</td>
      <td>GET</td>
      <td>cities/:id/weather</td>
      <td>
        start_date (YYYY-MM-DD) <br />
        end_date? (YYYY-MM-DD)
      </td>
      <td>none</td>
      <td>
        Passing only start_date you'll get results since <b>start_date</b> until
        last date that exists <br />
        Passing only end_date you'll get results since first date until
        <b>end_date</b> passed
      </td>
      <td>Padding both of query strings you'll get results between dates</td>
    </tr>
  </tbody>
</table>

# Testing

`$ npm run test`

# Docker

### Building Image

`$ docker build -t pay-test-api-desafio .`

### Running Image

`$ docker run -p 4000:4000 -d pay-test-api-desafio`

### Accessing

`$ docker-machine ip` #ex: 192.168.99.100

Now open browser in http://192.168.99.100:4000
