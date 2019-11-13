# Install

`$ npm install`

# Run Server

`$ npm start`

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
      <td>cities/get</td>
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
        start_date (YYYY/MM/DD) <br />
        end_date? (YYYY/MM/DD)
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
