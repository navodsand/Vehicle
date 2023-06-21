 
 function display(){

    const vehicleInfo = `<h1>Details</h1>
    <img src="land .jpg" alt="Car Image" />
    <table>
      <tr>
        <th>Brand</th>
        <td></td>
      </tr>
      <tr>
        <th>Model</th>
        <td></td>
      </tr>
      <tr>
        <th>Price</th>
        <td></td>
      </tr>
      <tr>
        <th>Year</th>
        <td></td>
      </tr>
      <tr>
        <th>Color</th>
        <td></td>
      </tr>
    </table>`;
 }
 
 
 const xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
    }
 }

 xhr.open('GET', 'vehicle.json');
 xhr.send();