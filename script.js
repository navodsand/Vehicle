 
 function display(vehicle){

    const vehicleInfo = `<h1>Details</h1>
    <img src="land .jpg" alt="Car Image" />
    <table>
      <tr>
        <th>Brand</th>
        <td>${vehicle.Brand}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>${vehicle.Model}</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>${vehicle.Price}</td>
      </tr>
      <tr>
        <th>Year</th>
        <td>${vehicle.Year}</td>
      </tr>
      <tr>
        <th>Color</th>
        <td>${vehicle.Color}</td>
      </tr>
    </table>`;
    document.querySelector('.container').innerHTML = vehicleInfo;
 }
 
 
 const xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200){
        display(JSON.parse(xhr.responseText));
    }
 }

 xhr.open('GET', 'vehicle.json');
 xhr.send();