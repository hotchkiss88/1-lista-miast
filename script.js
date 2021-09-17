let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


function townNames(x) {


    let scriptElement= document.getElementsByTagName('script');

    let ulElement = document.createElement("ul");

    x.forEach((city) => {
            let li = document.createElement('li');

            li.innerText = city;

            ulElement.appendChild(li);

            li.className += 'city';
        }

    )

    document.body.insertAdjacentElement('afterbegin', ulElement);

};

townNames(cities);