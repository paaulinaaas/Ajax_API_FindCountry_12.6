var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries'); // searchbyid countries i przypisz

$('#search').click(searchCountries); //searchbyid search i addevent click 
                                    // z funkcja search countries
function searchCountries() {
    var countryName = $('#country-name').val(); // val czyli pobierz wartosc z pola 
    // country-name
    if(!countryName.length) countryName = 'Poland'; // jesli pole tekstowe jest puste
    //to ustawiamy wartosc na Poland
$.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) { // parametr resp to obiekt JSON przesylany przez metode .ajax()
    countriesList.empty(); // czysci listę krajow po uprzednim zapytaniu
resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
});
}