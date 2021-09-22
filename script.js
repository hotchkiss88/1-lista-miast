let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


function townNames(x) {


  let scriptElement = document.getElementsByTagName('script');

  let olElement = document.createElement("ol");

  x.forEach((city) => {
    let li = document.createElement('li');

    li.innerText = city;

    olElement.appendChild(li);

    li.className += 'city';
  }

  )

  document.body.insertAdjacentElement('afterbegin', olElement);

};

townNames(cities);